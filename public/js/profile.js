$(window).on("load", function () {
 //console.log(process.env.TEST);
  console.log("faculty profile javascript loaded");
  $(document).ready(function () {
    function convertDate(d) {
      d = new Date(d);
      return Intl.DateTimeFormat("en-US").format(d);
    }

    if ($("#uuid").val() !== "") {
      $.ajax({
        type: "GET",
        url:
          "https://fiapi.academicanalytics.com/api/activity/faculty/" +
          $("#uuid").val() +
          "?format=json",
        headers: { "x-api-key": academicAnalytics },
      })
        .done(function (data) {
          //Begin Publications
          if (data.articles.length > 0) {
            let articlesHTML =
              "<div class='container pb-4'><div class='accordion' id='accordion-publications'><div class='accordion-item'>";
            for (let i = 0; i < data.articles.length; i++) {
              let currentItem = data.articles[i];
              let currentTitle =
                "<h5 class='accordion-header' id='heading-publications-" +
                i +
                "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-publications-" +
                i +
                "'>" +
                currentItem.title.toString() +
                "</button></h5><div id='collapse-publications-" +
                i +
                "' class='accordion-collapse collapse' data-bs-parent='#accordion-publications'><div class='card-body'><div class='accordion-body-content'>";
              let currentJournal =
                "<li><strong>Journal:</strong> " +
                currentItem.journalName.toString() +
                "</li>";

              let DOIinfo = currentItem.digitalObjectIdentifier;
              let currentDOI;
              let currentDOILink;
              if (!DOIinfo) {
                currentDOILink = "";
              } else {
                currentDOI = "https://doi.org/" + DOIinfo.toString();
                currentDOILink =
                  "<li><strong>DOI:</strong> <a href='" +
                  currentDOI +
                  "' blank='_blank'>" +
                  currentDOI +
                  "</a></li>";
              }

              let currentAbstract = "";
              if (!currentItem.abstract) {
                currentAbstract = "";
              } else {
                currentAbstract =
                  "<li><strong>Abstract:</strong> " +
                  currentItem.abstract.toString() +
                  "</li>";
              }

              articlesHTML +=
                currentTitle +
                "<ul>" +
                currentJournal +
                currentDOILink +
                currentAbstract +
                "</ul></div></div></div>";
            }
            articlesHTML += "</div></div></div>";
            $("#publications").removeClass("d-none");
            $("#publications").append(articlesHTML);
          } else {
            $("#publications").append(
              "<p class='text-danger border border-danger p-3'>No data returned!</p>"
            );
            $("#publications").removeClass("d-none");
          }
          //End Publications

          //Begin Awards
          if (data.awards.length > 0) {
            let articlesHTML =
              "<div class='container'><div class='accordion pb-4' id='accordion-awards'><div class='accordion-item'>";
            for (let i = 0; i < data.awards.length; i++) {
              let currentItem = data.awards[i];
              let currentTitle =
                "<h5 class='accordion-header' id='heading-awards-" +
                i +
                "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-awards-" +
                i +
                "'>" +
                currentItem.name.toString() +
                "</button></h5><div id='collapse-awards-" +
                i +
                "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";
              let currentYear =
                "<li><strong>Year Awarded:</strong> " +
                currentItem.activityYear.toString() +
                "</li>";

              let currentURL = currentItem.url;

              if (!currentURL) {
                currentURL = "";
              } else {
                currentURL =
                  "<li><strong>URL:</strong> <a href='" +
                  currentURL +
                  "' blank='_blank'>" +
                  currentURL +
                  "</a></li>";
              }

              let currentOrg = "";
              if (!currentItem.governingSocietyName) {
                currentOrg = "";
              } else {
                currentOrg =
                  "<li><strong>Governing Organization:</strong> " +
                  currentItem.governingSocietyName.toString() +
                  "</li>";
              }

              articlesHTML +=
                currentTitle +
                "<ul>" +
                currentYear +
                currentURL +
                currentOrg +
                "</ul></div></div></div>";
            }
            articlesHTML += "</div></div></div>";
            $("#awards").removeClass("d-none");
            $("#awards").append(articlesHTML);
          } else {
            $("#awards").append(
              "<p class='text-danger border border-danger p-3'>No data returned!</p>"
            );
            $("#awards").removeClass("d-none");
          }
          //End Awards

          var articlesHTML;
          if (
            data.grants.length > 0 ||
            data.patents.length > 0 ||
            data.clinicalTrials > 0
          ) {
            //Begin Grants

            if (data.grants.length > 0) {
              articlesHTML =
                "<div class='container'><div class='accordion pb-4' id='accordion-grants'><div class='accordion-item'>";
              for (let i = 0; i < data.grants.length; i++) {
                let currentItem = data.grants[i];
                let currentTitle =
                  "<h5 class='accordion-header' id='heading-grants-" +
                  i +
                  "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-grants-" +
                  i +
                  "'>Grant: " +
                  currentItem.name.toString() +
                  "</button></h5><div id='collapse-grants-" +
                  i +
                  "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";
                let currentYear =
                  "<li><strong>Duration:</strong> " +
                  convertDate(currentItem.startDate) +
                  " - " +
                  convertDate(currentItem.endDate) +
                  "</li>";

                let totalDollars = currentItem.totalDollars;

                if (!totalDollars) {
                  totalDollars = "";
                } else {
                  totalDollars =
                    "<li><strong>Total Dollars:</strong> $" +
                    totalDollars.toLocaleString("en-US", {
                      style: "decimal",
                      minimumFractionDigits: 0,
                    });
                  +"</li>";
                }

                articlesHTML +=
                  currentTitle +
                  "<ul>" +
                  currentYear +
                  totalDollars +
                  "</ul></div></div></div>";
              }
            }
            //End Grants
            //Begin Patents
            if (data.patents.length > 0) {
              // articlesHTML =
              //   "<div class='container'><div class='accordion pb-4' id='accordion-patents'><div class='accordion-item'>";
              for (let i = 0; i < data.patents.length; i++) {
                let currentItem = data.patents[i];
                let currentTitle =
                  "<h5 class='accordion-header' id='heading-patents-" +
                  i +
                  "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-patents-" +
                  i +
                  "'>Patent: " +
                  currentItem.name.toString() +
                  "</button></h5><div id='collapse-patents-" +
                  i +
                  "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";

                let currentYear = currentItem.date;
                //console.log(data)
                if (!currentYear) {
                  currentYear = "";
                } else {
                  currentYear =
                    "<li><strong>Patent approved:</strong> " +
                    convertDate(currentItem.date);
                  ("</li>");
                }

                let patentNo = currentItem.number;

                if (!patentNo) {
                  patentNo = "";
                } else {
                  patentNo =
                    "<li><strong>Patent No:</strong> " +
                    patentNo.toString() +
                    "</li>";
                }

                articlesHTML +=
                  currentTitle +
                  "<ul>" +
                  currentYear +
                  patentNo +
                  "</ul></div></div></div>";
              }
            }
            //End Patents

            //Begin Clinical Trials

            //End Clinical Trials

            articlesHTML += "</div></div></div>";
            $("#grants").removeClass("d-none");
            $("#grants").append(articlesHTML);
          } else {
            $("#grants").append(
              "<p class='text-danger border border-danger p-3'>No data returned!</p>"
            );
            $("#grants").removeClass("d-none");
          }
          //End Grants

          //Begin Presentations
          if (data.presentations.length > 0) {
            let articlesHTML =
              "<div class='container pb-4'><div class='accordion' id='accordion-presentations'><div class='accordion-item'>";
            for (let i = 0; i < data.presentations.length; i++) {
              let currentItem = data.presentations[i];
              let currentTitle =
                "<h5 class='accordion-header' id='heading-presentations-" +
                i +
                "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-presentations-" +
                i +
                "'>" +
                currentItem.name.toString() +
                "</button></h5><div id='collapse-presentations-" +
                i +
                "' class='accordion-collapse collapse' data-bs-parent='#accordion-presentations'><div class='card-body'><div class='accordion-body-content'>";

              let venue = "";
              if (!currentItem.venue) {
                venue = "";
              } else {
                venue =
                  "<li><strong>Venue:</strong> " +
                  currentItem.venue.toString() +
                  "</li>";
              }

              let sponsor = "";
              if (!currentItem.sponsor) {
                sponsor = "";
              } else {
                sponsor =
                  "<li><strong>Sponsor:</strong> " +
                  currentItem.sponsor.toString() +
                  "</li>";
              }

              let location = "";
              if (!currentItem.location) {
                location = "";
              } else {
                location =
                  "<li><strong>Location:</strong> " +
                  currentItem.location.toString() +
                  "</li>";
              }

              let presentationDate = "";
              if (!currentItem.sponsor) {
                presentationDate = "";
              } else {
                presentationDate =
                  "<li><strong>Presentation Date:</strong> " +
                  convertDate(currentItem.presentationDate) +
                  "</li>";
              }

              articlesHTML +=
                currentTitle +
                "<ul>" +
                venue +
                sponsor +
                location +
                presentationDate +
                "</ul></div></div></div>";
            }
            articlesHTML += "</div></div></div>";
            $("#presentations").removeClass("d-none");
            $("#presentations").append(articlesHTML);
          } else {
            $("#presentations").append(
              "<p class='text-danger border border-danger p-3'>No data returned!</p>"
            );
            $("#presentations").removeClass("d-none");
          }
          //End Presentations
        })
        .fail(function (data) {
          $("#publications").append(
            "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
          );
          $("#awards").append(
            "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
          );
          $("#presentations").append(
            "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
          );
          $("#grants").append(
            "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
          );
          $("#publications").removeClass("d-none");
          $("#awards").removeClass("d-none");
          $("#presentations").removeClass("d-none");
          $("#grants").removeClass("d-none");
        });
    } else {
      $("#publications").append(
        "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
      );
      $("#awards").append(
        "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
      );
      $("#presentations").append(
        "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
      );
      $("#grants").append(
        "<p class='text-danger border border-danger p-3'>Invalid UUID!</p>"
      );
      $("#publications").removeClass("d-none");
      $("#awards").removeClass("d-none");
      $("#presentations").removeClass("d-none");
      $("#grants").removeClass("d-none");
    }
  });
});
