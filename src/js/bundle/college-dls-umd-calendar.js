import $ from 'jquery'
window.jQuery = window.$ = $

import Popover from '../../../node_modules/bootstrap/js/src/popover';

import moment from "moment";
// console.log(moment().format());

import * as Calendar from '../../../node_modules/fullcalendar/dist/fullcalendar.js';
import * as Gcal from 'fullcalendar/dist/gcal';

// jQuery plugin
$.fn.hhCalendar = function (options) {
    var defaults = {
        categories: {},
        fullcalendar: {
            firstHour: 9,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,listWeek,listDay'
            },
            slotMinutes: 30,
            theme: false,
            views: {
                listWeek: { buttonText: 'week' },
                listDay: { buttonText: 'day' }
            },
            defaultView: 'month'
        },
        onReady: function () { },
        recurringPathArray: [],
        yyyyMMPathMap: {}
    };

    // Constructor
    var Calendar = function (el, options) {
        this.elem = el;
        this.FC = $(el);
        this.now = new Date();
        this.eventsCache = {};
        this.ui = {};

        // Record any available metadata (ie hh-calendar-options='{...}')
        this.metadata = this.FC.data("hh-calendar-options");
        if (typeof this.metadata === "string") {
            this.metadata = {};
        }

        // Merge new options and metadata (recursively) with defaults
        this.options = $.extend(true, {}, defaults, options, this.metadata);

        this.ui.hasActiveEventPopover = false;
        this.ui.eventPopover = $("<a></a>").css({
            "position": "absolute",
            "zindex": "9999"
        }).appendTo("body");

        // Initialize the calendar
        this.init();

        // Initialize events for calendar options.
        this.initPubSub();

        // Fire onReady event handler.
        $.proxy(this.options.onReady, this)();

        return this;
    };

    Calendar.prototype.init = function () {
        console.dir(this);

        var self = this,
            tempDate = moment(self.now),
            fcOptions = $.extend(true, {
                googleCalendarApiKey: self.options['googleCalendarApiKey'],
                eventRender: function (event, element) {
                    if (event.target) {
                        element.attr("target", "_parent");
                    }
                },
                eventClick: function (event, e, view) {
                    var popoverContent = '',
                        whenString = '',
                        start = moment(event.start),
                        end = event.end !== null ? moment(event.end) : null;
                    // Remove the click event and stop propogation (used for the click outside to close functionality).
                    e.preventDefault();
                    e.stopPropagation();


                    // If a popover for this event exists, re-use it.
                    // Otherwise, destroy/dispose the current popover and update the id of the popover placeholder.
                    if (self.ui.hasActiveEventPopover) {
                        self.ui.eventPopover.popover("dispose");
                        self.ui.hasActiveEventPopover = false;
                        self.ui.eventPopover.remove();
                        self.ui.eventPopover = $("<a></a>").css({
                            "position": "absolute",
                            "zindex": "9999",
                            'top': e.pageY,
                            'left': e.pageX
                        }).appendTo("body");
                    } else {
                        // Set the position of the popover based on the click event (this should be somewhere on the event).
                        self.ui.eventPopover.css({
                            'top': e.pageY,
                            'left': e.pageX
                        });
                    }

                    // If the event is all day, we'll display just the date and month.
                    // Otherwise, display the date, month and time.
                    if (event.allDay) {
                        whenString = start.format("ddd, MMMM D");
                        // If the start and end differ, output the end date as well.
                        if (end !== null) {
                            whenString += (end.isSame(start, "d") ? "" : ' - ' + end.format("ddd, MMMM D"));
                        } else {
                            whenString += ' - All Day';
                        }
                    } else {
                        whenString = start.format("ddd, MMMM D, h:mma");
                        // If the start and end differ, output the end date as well.
                        // Otherwise, just output the end time (because they are the same day).
                        if (end !== null) {
                            whenString += ' - ';
                            whenString += (end.isSame(start, "d") ? end.format("h:mma") : end.format("ddd, MMMM D, h:mma"));
                        }
                    }
                    var eventUrl = (event.url.includes("google.com") === false) ? '<p class="pull-right"><a href="' + event.url + '"' + (event.target ? ' target="_parent"' : '') + '>view event <i class="fa-solid fa-angles-right"></i></a></p>' : '<p>&nbsp;</p>';
                    console.log(eventUrl)
                    // Generate the content for the popover.
                    popoverContent = '<ul>' +
                        '<li><strong>When:</strong> <span class="event-date">' + whenString + '</span></li>' +
                        (event.location && '<li><strong>Where:</strong> ' + event.location + '</li>' || '') +
                        (event.summary && '<li>' + event.summary + '</li>' || '') +
                        '</ul>' + eventUrl;
                    //(event.url.includes("google.com")===false) ? '<p class="pull-right"><a href="' + event.url + '"' + (event.target ? ' target="_parent"' : '') + '>view event <i class="fa-solid fa-angles-right"></i></a></p>' : '<p>&nbsp;</p>'

                    // Initialize and show the Bootstrap popover.

                    self.ui.eventPopover.popover({
                        title: '<div class="d-flex justify-content-between">' + event.title + '<a class="close" data-dismiss="popover" style="line-height:14px; float: right;"><span class=""><i class="fa-solid fa-xmark"></i></span></a></div>',
                        content: popoverContent,
                        trigger: 'manual',
                        placement: 'top',
                        html: true
                    }).popover('show');

                    self.ui.hasActiveEventPopover = true;


                },
                viewRender: function (view) {
                    var currentViewYear = view.start.year();

                    self.preserveCategories();

                    // If the view's current year differs from the saved year, force a rerender of the events.
                    // This is needed for the recurring events to show.
                    if (currentViewYear != tempDate.year()) {
                        $(this).fullCalendar('rerenderEvents');
                        tempDate.year(currentViewYear);
                    }
                },
                eventAfterAllRender: function (view) {
                    self.preserveCategories();
                }
            }, this.options.fullcalendar);

        console.log('self: ');
        console.dir(self);

        self.FC.fullCalendar(fcOptions);

        // Add a click event to the page that will close the active event popover.
        $('html').click(function () {
            self.ui.eventPopover.popover("hide");
        });

        // Add single events source.
        self.FC.fullCalendar("addEventSource", function (start, end, timezone, callback) {
            var startMonth = 1, // javascript months are 0-indexed by default
                startYear = start.year(),
                endYear = end.year(),
                endMonth = end.month() + 1,
                eventsArray = [],
                monthArray = null,
                addEventToArray = function () {
                    var element = $(this).parent(),
                        categories = [],
                        eventUrl = $.trim($("path", element).text()),
                        isAllDay = ($.trim($("allday", element).text()) === 'true');

                    // If this is not a single event, skip and continue.
                    if ($("frequency", element).text() !== "Once") {
                        // Same as a continue statement, but for $.each.
                        return true;
                    }

                    $('category', element).each(function () {
                        var cat = $.trim($(this).text()),
                            className = self._getCategoryCSSClass(cat);

                        if (className && $.inArray(className, categories) === -1) {
                            categories.push(className);
                        }

                    });

                    if (categories.length > 0) {
                        categories.reverse();

                        // If the event is not all day, add an additional CSS class to revert the color scheme of the event.
                        if (isAllDay !== true) {
                            categories.push("fixedtime");
                            monthArray.push({
                                id: $("id", element).text(),
                                title: $("title", element).text(),
                                summary: $("summary", element).text(),
                                location: $("location", element).text(),
                                url: eventUrl,
                                start: $("startISO", element).text(),
                                end: $("endISO", element).text(),
                                target: ($.trim($("target", element).text()) === 'true'),
                                allDay: false,
                                className: categories
                            });
                        } else {
                            monthArray.push({
                                id: $("id", element).text(),
                                title: $("title", element).text(),
                                summary: $("summary", element).text(),
                                location: $("location", element).text(),
                                url: eventUrl,
                                start: $("startISO", element).text(),
                                target: ($.trim($("target", element).text()) === 'true'),
                                allDay: true,
                                className: categories
                            });
                        }
                    }
                };

            while (startYear < endYear + 1 || (startMonth <= endMonth && startYear === endYear)) {
                var key = startYear + (startMonth < 10 ? "0" : "") + startMonth,
                    url = self.options.yyyyMMPathMap[key] || "";

                monthArray = self.eventsCache[key] || null;

                // Only load the source if it is not already cached.
                if (monthArray === null) {
                    monthArray = [];
                    if (url !== "") {
                        $.ajax({
                            url: url.replace(/\&amp\;/g, "&"),
                            datatype: "xml",
                            async: false,
                            success: function (data) {
                                $("path", data).each(addEventToArray);
                            }
                        });
                    }

                    self.eventsCache[key] = monthArray;
                }

                if (monthArray.length > 0) {
                    eventsArray = eventsArray.concat(monthArray);
                }

                startMonth++;
                startYear = startYear + Math.floor(startMonth / 13);
                startMonth = startMonth % 13;
            }
            callback(eventsArray);
        });

        // Add recurring events source.
        self.FC.fullCalendar("addEventSource", function (start, end, timezone, callback) {
            var i = 0,
                currentDate = new Date(),
                recurringEventsArray = self.eventsCache["recurringEvents"],
                daysMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 },
                addEventToArray = function (e, start, end, timezone) {
                    recurringEventsArray.push({
                        id: e.id,
                        title: e.title,
                        summary: e.summary,
                        location: e.location,
                        url: e.url,
                        start: start,
                        end: end,
                        target: e.target,
                        allDay: e.allDay,
                        className: e.className
                    });
                }, theDate = moment();

            if (recurringEventsArray === null || recurringEventsArray === undefined || recurringEventsArray.length <= 0) {
                recurringEventsArray = [];
                for (; i < self.options.recurringPathArray.length; i++) {
                    var url = self.options.recurringPathArray[i];
                    if (url !== null && url !== undefined) {
                        url = url.replace(/\&amp\;/g, "&");
                        $.ajax({
                            url: url,
                            datatype: "xml",
                            async: false,
                            success: function (data) {
                                $("path", data).each(function () {
                                    var element = $(this).parent(),
                                        categories = [],
                                        frequency = $("frequency", element).text(),
                                        interval = parseInt($("interval", element).text());

                                    // If this is not a recurring event, skip and continue.
                                    if (frequency === "Once") {
                                        // Same as a continue statement, but for $.each.
                                        return true;
                                    }

                                    $('category', element).each(function () {
                                        var cat = $.trim($(this).text()),
                                            className = self._getCategoryCSSClass(cat);

                                        if (className && $.inArray(className, categories) === -1) {
                                            categories.push(className);
                                        }
                                    });
                                    if (categories.length > 0) {
                                        categories.reverse();

                                        var isAllDay = ($.trim($("allday", element).text()) === 'true'),
                                            event = {
                                                id: $("id", element).text(),
                                                title: $("title", element).text(),
                                                summary: $("summary", element).text(),
                                                location: $("location", element).text(),
                                                url: $.trim($("path", element).text()),
                                                target: ($.trim($("target", element).text()) === 'true'),
                                                allDay: isAllDay,
                                                className: categories
                                            },
                                            mStart = moment.utc($("startISO", element).text()),
                                            mEnd = moment.utc($("endISO", element).text()),
                                            mUntil = moment.utc($("untilISO", element).text()),
                                            mDiff = mEnd.diff(mStart, "s"),
                                            _mStart = mStart.clone();

                                        // If the event is not all day, add an additional CSS class to revert the color scheme of the event.
                                        if (isAllDay !== true) {
                                            event.className.push("fixedtime");
                                        }

                                        // If no until date was provided, default to 2 years out from the starting date.
                                        if (mUntil.isValid() === false) {
                                            mUntil = mStart.clone().add("y", 2);
                                        } else {
                                            // Cap the until date to 2 years out from the current year for repeating events.
                                            if (mUntil.diff(mStart, "y") > 2) {
                                                mUntil.years(mStart.years() + 2);
                                            }
                                        }

                                        switch (frequency) {
                                            case 'Daily':
                                                // Add an occurrence for each day+interval.
                                                while (mUntil.diff(mStart, "s") >= 0) {
                                                    addEventToArray(event, mStart.toISOString(), mEnd.toISOString());

                                                    // Increment the start date based chosen interval.
                                                    mStart.add("d", interval);
                                                    mEnd.add("d", interval);
                                                }
                                                break;
                                            case 'Weekly':
                                                days = $("day", element);
                                                // Are we adding a single weekly occurrence, or multiple?
                                                if (days.length < 1) {
                                                    while (mUntil.diff(mStart, "s") >= 0) {
                                                        addEventToArray(event, mStart.toISOString(), mEnd.toISOString());

                                                        mStart.add("w", interval);
                                                        mEnd.add("w", interval);
                                                    }
                                                } else {
                                                    while (mUntil.diff(mStart, "s") >= 0) {
                                                        // Loop through each chosen day and add the occurrences.
                                                        days.each(function () {
                                                            mStart.date(mStart.date() + (daysMap[$(this).text()] - mStart.day()));
                                                            mEnd = mStart.clone().add("s", mDiff);

                                                            // Only add occurrences that are after the actual start date.
                                                            if (mStart.diff(_mStart, "s") >= 0) {
                                                                addEventToArray(event, mStart.toISOString(), mEnd.toISOString());
                                                            }
                                                        });

                                                        // Increment the start date based chosen interval.
                                                        mStart.add("w", interval);
                                                        mEnd.add("w", interval);
                                                    }
                                                }
                                                break;
                                            case 'Monthly':
                                                dayOfMonthOption = $("monthly-day", element).text();
                                                if (dayOfMonthOption == 'day of the month') {
                                                    // Add a monthly occurrence based on the original event's date.
                                                    while (mUntil.diff(mStart, "s") >= 0) {
                                                        // Ensure the date exists within the current month.
                                                        if (mStart.date() == _mStart.date()) {
                                                            addEventToArray(event, mStart.toISOString(), mEnd.toISOString());
                                                        }

                                                        // Increment the start date based chosen interval.
                                                        mStart.add("M", interval);
                                                        if (mStart.daysInMonth() >= _mStart.date()) {
                                                            mStart.date(_mStart.date());
                                                        }
                                                        mEnd = mStart.clone().add("s", mDiff);
                                                    }
                                                } else {
                                                    // Add a monthly occurrence based on the original event's day of the week.
                                                    // Determine the position of this day in the month (ie 1st, 2nd ...)
                                                    var theWeek = Math.floor(mStart.date() / 7),
                                                        theDay = mStart.day() + 1,
                                                        tempMonth = mStart.month();
                                                    while (mUntil.diff(mStart, "s") >= 0) {
                                                        // If we didn't roll over into the next month, add the event.
                                                        if (tempMonth === mStart.month()) {
                                                            addEventToArray(event, mStart.toISOString(), mEnd.toISOString());
                                                        }

                                                        // Figure out where the next month's first day lies and add the difference
                                                        // in days with the weekly position.
                                                        mStart.add("M", interval).date(1);
                                                        tempMonth = mStart.month();
                                                        if (theDay <= mStart.day()) {
                                                            mStart.date((theDay - mStart.day() + ((theWeek + 1) * 7)));
                                                        } else {
                                                            mStart.date((theDay - mStart.day() + (theWeek * 7)));
                                                        }

                                                        mEnd = mStart.clone().add("s", mDiff);
                                                    }
                                                }
                                                break;
                                            case 'Yearly':
                                                // Add an occurrence for each day+interval.
                                                while (mUntil.diff(mStart, "s") >= 0) {
                                                    addEventToArray(event, mStart.toISOString(), mEnd.toISOString());

                                                    // Increment the start year based chosen interval.
                                                    mStart.add("y", interval);
                                                    mEnd.add("y", interval);
                                                }
                                                break;
                                        }
                                    }
                                });
                            }
                        });
                    }
                }

                if (recurringEventsArray.length > 0) {
                    self.eventsCache["recurringEvents"] = recurringEventsArray;
                }
            }

            callback(recurringEventsArray);
        });
    };

    Calendar.prototype.subscribe = function (topic, callback) {
        this.events.subscribe(topic, $.proxy(callback, this));
    };

    Calendar.prototype.getOption = function (optionName) {
        // If the option has the "options." namespace, remove it.
        if (optionName.indexOf("options.") !== -1) {
            optionName = optionName.replace("options.", "");
        }

        var calendarOptions = this.options,
            parts = optionName.split('.'),
            last = parts.pop(),
            current = null;

        // If there are no parts, simply return the end of the name that was provided.
        if (parts.length === 0) {
            return calendarOptions[last];
        }

        // Loop over each part and get the next option in the name.
        $.each(parts, function (k, option) {
            current = calendarOptions[option];
        });

        // Return the option.
        return current !== undefined ? current[last] : null;
    };

    Calendar.prototype.initPubSub = function () {
        var calendar = this;

        // Setup the Pub/Sub object for this instance.
        calendar.events = {
            cache: {},

            // Publish some data on a named topic.
            publish: function (/* String */topic, /* Array? */args) {
                var self = this;
                if (self.cache[topic]) {
                    if (typeof args !== "array") {
                        args = [args];
                    }

                    $.each(self.cache[topic], function () {
                        try {
                            this.apply(calendar, args || []);
                        } catch (err) {
                            console.log(err);
                        }
                    });
                }
            },

            // Register a callback on a named topic.
            subscribe: function (/* String */topic, /* Function */callback) {
                if (!this.cache[topic]) {
                    this.cache[topic] = [];
                }
                this.cache[topic].push(callback);
                return [topic, callback]; // Array
            },

            // Disconnect a subscribed function for a topic.
            unsubscribe: function (/* String */topic, /* Function */callback) {
                var self = this;
                if (self.cache[topic]) {
                    $.each(self.cache[topic], function (idx) {
                        if (this == callback) {
                            self.cache[topic].splice(idx, 1);
                        }
                    });
                }
            },

            // List Subscribers
            subscribers: function (/* String */topic) {
                l = [];
                if (this.cache[topic]) {
                    $.each(this.cache[topic], function (idx) {
                        l.push(this.name);
                    });
                }
                return l;
            }
        };
    };

    Calendar.prototype.preserveCategories = function () {
        $('#calendars a').each(function () {
            var elmClass = $(this).attr("id").replace("trigger-", ""),
                isOff = $(this).hasClass("off"),
                events = $("#calendar ." + elmClass);

            if (isOff) {
                events.addClass(elmClass + "-off");
                events.removeClass(elmClass);
            }
        });

    };

    Calendar.prototype.renderCategoryOptions = function (obj) {
        var self = this,
            htmlString = "",
            calendarsDiv = (obj instanceof jQuery ? obj : $(obj));

        htmlString += "<ul id='categories' class='unstyled'>";
        $.each(self.options.categories, function (k, v) {
            htmlString += '<li><a id="trigger-' + v + '" href="#"> <span> </span>' + k.replace(/_/g, " ") + '</a></li>';
        });
        htmlString += "</ul>";

        htmlString += '<div class="btn-group" style="margin-bottom: 20px;">' +
            '<a class="btn btn-primary" href="#" id="categoriesToggleHide" title="Hide all events">Hide All</a><a class="btn btn-primary" href="#" id="categoriesToggleShow" title="Show all events">Show All</a>' +
            '</div>';

        // Add the category links to div#calendars.
        calendarsDiv.html(htmlString);

        // Add a click event to the category links to toggle events with that category.
        $("a[id^='trigger-']", calendarsDiv).click(function () {
            var category = $(this).attr("id").replace("trigger-", "");
            self.toggleEventsInCategory(category, $(this).hasClass("off"));
            $(this).toggleClass("off");
            return false;
        });

        $("#categoriesToggleHide").click(function () {
            $("a[id^='trigger-']", calendarsDiv).each(function () {
                var category = $(this).attr("id").replace("trigger-", "");
                $(this).addClass("off");
                self.toggleEventsInCategory(category, false);
            });

            return false;
        });

        $("#categoriesToggleShow").click(function (el) {
            $("a[id^='trigger-']", calendarsDiv).each(function () {
                var category = $(this).attr("id").replace("trigger-", "");
                $(this).removeClass("off");
                self.toggleEventsInCategory(category, true);
            });

            return false;
        });
    };

    Calendar.prototype.toggleEventsInCategory = function (category, showOrHide) {
        showOrHide = showOrHide || false;
        var self = this,
            events = $("#calendar ." + category + (showOrHide ? "-off" : ""));

        if (showOrHide) {
            events.addClass(category);
            events.removeClass(category + "-off");
        } else {
            events.addClass(category + "-off");
            events.removeClass(category);
        }
    };

    Calendar.prototype.updateOption = function (optionName, value) {
        // For convenience, we can ommit the "options." prefix.
        if (optionName.indexOf("options.") === -1) {
            optionName = "options." + optionName;
        }

        // Publish the new value for the subscribers.
        this.events.publish(optionName, [value]);
    };

    Calendar.prototype.updateOptions = function (options) {
        var calendar = this;
        // Make sure we have an object before looping over the options.
        if (typeof options === "object") {
            // Loop over each option and update it.
            $.each(options, function (optionName, value) {
                calendar.updateOption(optionName, value);
            });
        }
    };

    Calendar.prototype._getCategoryCSSClass = function (c) {
        return this.options.categories[c.replace(/\s/g, "_")] || false;
    };

    // Make Calendar object globally available.
    // if (window) {
    window.Calendar = Calendar;
    // }

    return this.each(function () {
        // Store the editor object using jQuery's data method
        if (!$.data(this, 'hh-calendar')) {
            $.data(this, 'hh-calendar', new Calendar($(this), options));
        }
    });
};


// $.fn.hhCalendar(jQuery, this);                   

$(document).ready(function () {
    var calendar = $("#calendar").hhCalendar({
        googleCalendarApiKey: "AIzaSyBDnCymQZhUvhm3ve7ca4G9vF1azcA0JU0",
        categories: { Academics: "blue-2", Alumni: "grey-1", Students: "grey-3", Holidays: "orange-a11y", Campus_Events: "blue" },
        recurringPathArray: pathArray,
        // ["{{ path '/college-dls/events/2024/index.xml'}}"],
        yyyyMMPathMap: pathMap
        // { 202401: "{{ path '/college-dls/events/2024/01/index.xml'}}", 202402: "{{ path '/college-dls/events/2024/02/index.xml'}}", 202403: "{{ path '/college-dls/events/2024/03/index.xml'}}", 202404: "{{ path '/college-dls/events/2024/04/index.xml'}}", 202405: "{{ path '/college-dls/events/2024/05/index.xml'}}", 202406: "{{ path '/college-dls/events/2024/06/index.xml'}}", 202407: "{{ path '/college-dls/events/2024/07/index.xml'}}", 202408: "{{ path '/college-dls/events/2024/08/index.xml'}}", 202409: "{{ path '/college-dls/events/2024/09/index.xml'}}", 202410: "{{ path '/college-dls/events/2024/10/index.xml'}}", 202411: "{{ path '/college-dls/events/2024/11/index.xml'}}", 202412: "{{ path '/college-dls/events/2024/12/index.xml'}}" }
    }).data("hh-calendar"),
        timestampToUnix = function (timestamp) {
            var tString = timestamp.toString();
            return tString.length > 10 ? Math.floor(timestamp / 1000) : timestamp;
        };
    calendar.renderCategoryOptions($("#calendars"));
    calendar.FC.fullCalendar("addEventSource", {
        googleCalendarId: "usa__en@holiday.calendar.google.com",
        className: calendar._getCategoryCSSClass("Holidays")
    });
});