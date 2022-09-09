var data = "";
$(window).on("load", function () {
  var FACULTY_ENDPOINT = "https://asc-fiapi-profile-proxy.azurewebsites.net/api/activity/faculty/";
   console.log("faculty profile javascript loaded");
   $(function () {
     function convertDate(d) {
       d = new Date(d);
       return Intl.DateTimeFormat("en-US").format(d);
     }

     function invalidUUID(){
        console.log("Invalid UUID!");
      }
 
     if ($("#uuid").val() !== "") {
       $.ajax({
         type: "GET",
         url:
           FACULTY_ENDPOINT +
           $("#uuid").val()
       })
         .done(function (data) {
           data=JSON.parse(data);

           //Begin Publications
           if (data.Articles.length > 0) {
             let articlesHTML =
               "<div class='container pb-4'><div class='accordion' id='accordion-publications'><div class='accordion-item'>";
             for (let i = 0; i < data.Articles.length; i++) {
               let currentItem = data.Articles[i];
               let currentTitle =
                 "<p class='accordion-header' id='heading-publications-" +
                 i +
                 "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-publications-" +
                 i +
                 "'>" +
                 currentItem.ArticleTitle.toString() +
                 "</button></p><div id='collapse-publications-" +
                 i +
                 "' class='accordion-collapse collapse' data-bs-parent='#accordion-publications'><div class='card-body'><div class='accordion-body-content'>";
               let currentJournal =
                 "<li><strong>Journal:</strong> " +
                 currentItem.JournalName.toString() +
                 "</li>";
 
               let DOIinfo = currentItem.DOI;
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
               if (!currentItem.Abstract) {
                 currentAbstract = "";
               } else {
                 currentAbstract =
                   "<li><strong>Abstract:</strong> " +
                   currentItem.Abstract.toString() +
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
             console.log("No data returned for publications!");
           }
           //End Publications
 
           //Begin Awards
           if (data.Awards.length > 0) {
             let articlesHTML =
               "<div class='container'><div class='accordion pb-4' id='accordion-awards'><div class='accordion-item'>";
             for (let i = 0; i < data.Awards.length; i++) {
               let currentItem = data.Awards[i];
               let currentTitle =
                 "<p class='accordion-header' id='heading-awards-" +
                 i +
                 "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-awards-" +
                 i +
                 "'>" +
                 currentItem.AwardName.toString() +
                 "</button></p><div id='collapse-awards-" +
                 i +
                 "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";
               let currentYear =
                 "<li><strong>Year Awarded:</strong> " +
                 convertDate(currentItem.ReceivedDate.toString()) +
                 "</li>";
 
               let currentURL = currentItem.URL;
 
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
               if (!currentItem.GoverningSocietyName) {
                 currentOrg = "";
               } else {
                 currentOrg =
                   "<li><strong>Governing Organization:</strong> " +
                   currentItem.GoverningSocietyName.toString() +
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
            console.log("No data returned for awards!");
           }
           //End Awards
 
           var articlesHTML;
           if (
             data.Grants.length > 0 ||
             data.Patents.length > 0 ||
             data.ClinicalTrials > 0
           ) {
             //Begin Grants
 
             if (data.Grants.length > 0) {
               articlesHTML =
                 "<div class='container'><div class='accordion pb-4' id='accordion-grants'><div class='accordion-item'>";
               for (let i = 0; i < data.Grants.length; i++) {
                 let currentItem = data.Grants[i];
                 let currentTitle =
                   "<p class='accordion-header' id='heading-grants-" +
                   i +
                   "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-grants-" +
                   i +
                   "'>Grant: " +
                   currentItem.GrantName.toString() +
                   "</button></p><div id='collapse-grants-" +
                   i +
                   "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";
                 let currentYear =
                   "<li><strong>Duration:</strong> " +
                   convertDate(currentItem.StartDate) +
                   " - " +
                   convertDate(currentItem.EndDate) +
                   "</li>";
 
                 let totalDollars = currentItem.TotalDollars;
 
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
             if (data.Patents.length > 0) {
               // articlesHTML =
               //   "<div class='container'><div class='accordion pb-4' id='accordion-patents'><div class='accordion-item'>";
               for (let i = 0; i < data.Patents.length; i++) {
                 let currentItem = data.Patents[i];
                 let currentTitle =
                   "<p class='accordion-header' id='heading-patents-" +
                   i +
                   "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-patents-" +
                   i +
                   "'>Patent: " +
                   currentItem.PatentName.toString() +
                   "</button></p><div id='collapse-patents-" +
                   i +
                   "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";
 
                 let currentYear = currentItem.PatentDate;
                 //console.log(data)
                 if (!currentYear) {
                   currentYear = "";
                 } else {
                   currentYear =
                     "<li><strong>Patent Approved:</strong> " +
                     convertDate(currentYear);
                   ("</li>");
                 }
 
                 let patentNo = currentItem.PatentNumber;
 
                 if (!patentNo) {
                   patentNo = "";
                 } else {
                   patentNo =
                     "<li><strong>Patent No:</strong> " +
                     patentNo.toString() +
                     "</li>";
                 }

                 let patentAbstract = currentItem.PatentAbstract;
 
                 if (!patentAbstract) {
                  patentAbstract = "";
                 } else {
                  patentAbstract =
                     "<li><strong>Patent Abstract:</strong> " +
                     patentAbstract.toString() +
                     "</li>";
                 }
 
                 articlesHTML +=
                   currentTitle +
                   "<ul>" +
                   currentYear +
                   patentNo +
                   patentAbstract +
                   "</ul></div></div></div>";
               }
             }
             //End Patents
 
             //Begin Clinical Trials
             if (data.ClinicalTrials.length > 0) {
              for (let i = 0; i < data.ClinicalTrials.length; i++) {
                let currentItem = data.ClinicalTrials[i];
                let currentTitle =
                  "<p class='accordion-header' id='heading-clinical-trials-" +
                  i +
                  "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-clinical-trials-" +
                  i +
                  "'>Clinical Trial: " +
                  currentItem.ClinicalTrialTitle.toString() +
                  "</button></p><div id='collapse-clinical-trials-" +
                  i +
                  "' class='accordion-collapse collapse' data-bs-parent='#accordion'><div class='card-body'><div class='accordion-body-content'>";

                let startDate = currentItem.StartDate;
                //console.log(data)
                if (!startDate) {
                  startDate = "";
                } else {
                  startDate =
                    "<li><strong>Duration:</strong> " +
                    convertDate(startDate) + " - " + convertDate(currentItem.EndDate);
                  ("</li>");
                }

                let ctSource = currentItem.Source;

                if (!ctSource) {
                  ctSource = "";
                } else {
                  ctSource =
                    "<li><strong>Source:</strong> " +
                    ctSource.toString() +
                    "</li>";
                }

                let ctSummary = currentItem.Summary;

                if (!ctSummary) {
                  ctSummary = "";
                } else {
                  ctSummary =
                    "<li><strong>Summary:</strong> " +
                    ctSummary.toString() +
                    "</li>";
                }

                articlesHTML +=
                  currentTitle +
                  "<ul>" +
                  startDate +
                  ctSource +
                  ctSummary +
                  "</ul></div></div></div>";
              }
            }
             //End Clinical Trials
 
             articlesHTML += "</div></div></div>";
             $("#grants").removeClass("d-none");
             $("#grants").append(articlesHTML);
           } else {
            console.log("No data returned for grants, patents, and/or clinical trials!");
           }
           //End Grants
 
           //Begin Presentations
           if (data.Presentations.length > 0) {
             let articlesHTML =
               "<div class='container pb-4'><div class='accordion' id='accordion-presentations'><div class='accordion-item'>";
             for (let i = 0; i < data.Presentations.length; i++) {
               let currentItem = data.Presentations[i];
               let currentTitle =
                 "<p class='accordion-header' id='heading-presentations-" +
                 i +
                 "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-presentations-" +
                 i +
                 "'>" +
                 currentItem.PresentationName.toString() +
                 "</button></p><div id='collapse-presentations-" +
                 i +
                 "' class='accordion-collapse collapse' data-bs-parent='#accordion-presentations'><div class='card-body'><div class='accordion-body-content'>";
 
               let venue = "";
               if (!currentItem.Venue) {
                 venue = "";
               } else {
                 venue =
                   "<li><strong>Venue:</strong> " +
                   currentItem.Venue.toString() +
                   "</li>";
               }
 
               let sponsor = "";
               if (!currentItem.Sponsor) {
                 sponsor = "";
               } else {
                 sponsor =
                   "<li><strong>Sponsor:</strong> " +
                   currentItem.Sponsor.toString() +
                   "</li>";
               }
 
               let location = "";
               if (!currentItem.Location) {
                 location = "";
               } else {
                 location =
                   "<li><strong>Location:</strong> " +
                   currentItem.Location.toString() +
                   "</li>";
               }
 
               let presentationDate = "";
               if (!currentItem.Sponsor) {
                 presentationDate = "";
               } else {
                 presentationDate =
                   "<li><strong>Presentation Date:</strong> " +
                   convertDate(currentItem.PresentationDate) +
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
            console.log("No data returned for presentations!");
           }
           //End Presentations
         })
         .fail(function (data) {
          invalidUUID();
         });
     } else {
        invalidUUID();
     }
   });
 });