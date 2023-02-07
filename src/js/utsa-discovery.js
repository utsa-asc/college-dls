$(window).on("load", function () {

  $(document)
  .ajaxStart(function () {
    $("#results").append("<h2 class='text-center' id='loading'><div class='spinner-border' role='status'><span class='sr-only'>Loading...</span></div> Loading...</h2>");
  })
  .ajaxStop(function () {
    $("#loading").remove();
  });

  var FACULTY_ENDPOINT = "https://asc-fiapi-profile-proxy.azurewebsites.net/api/activity/faculty/";
   console.log("faculty profile javascript loaded");
   $(function () {
      function openingAccordion(accordionName){
        return "<div class='container pb-4'><div class='accordion' id='accordion-" + accordionName +  "'><div class='accordion-item'><p class='accordion-header' id='heading-" + accordionName +  "'><button type='button' class='accordion-button collapsed' data-bs-toggle='collapse' data-bs-target='#collapse-" + accordionName +  "'>"
      }
      
      function closingAccordion(accordionName){
      return "</button></p><div id='collapse-" + accordionName +  "' class='accordion-collapse collapse'><div class='card-body'><div class='accordion-body-content'>"
      }

      function lengthSet(length,count){
        if(length<count){
          return length;
         }else{
          return count;
         }        
      }

      //reverse chrono order
      function reverseChronologicalOrder(data, publishName){
        return data = data.sort(function(lhs, rhs) {
          if(lhs[publishName]!==null && rhs[publishName]!==null){
            return parseFloat(convertDate(rhs[publishName].toString())) - parseFloat(convertDate(lhs[publishName].toString()));
          }
        });
      }      
      
      var closingDivs = "</div></div></div></div></div></div>";

     function convertDate(d) {
       d = new Date(d);
       return d.getFullYear();
     }

     function invalidUUID(){
        console.log("Data for UUID not found!");
      }
 
     if ($("#uuid").val() !== "") {
       $.ajax({
         type: "GET",
         url:
           FACULTY_ENDPOINT +
           $("#uuid").val()
       })
         .done(function (data) {
          
          let dataCheck = $("#uuid").val() + " not found";

          if(data===dataCheck){
            invalidUUID();
            return false;
          }

           data=JSON.parse(data);

           //Begin Publications
           var sectionName="Publications";
           let articlesTitle = openingAccordion(sectionName) + sectionName + closingAccordion(sectionName);

           var articleLength = lengthSet(data.Articles.length, $("#publicationsCount").val());

          let articlesHTML="";
           if (articleLength > 0) {          

            reverseChronologicalOrder(data.Articles, publishName="PublishDate");

             for (let i = 0; i < articleLength; i++) {
               let currentItem = data.Articles[i];
               articlesHTML+="<ul><li><strong>" + currentItem.ArticleTitle.toString() + "</strong></li>";

               let currentJournal = "";
               if (!currentItem.JournalName) {
                currentJournal = "";
               } else {
                currentJournal =
                 "<li><strong>Journal:</strong> " +
                 currentItem.JournalName.toString() +
                 "</li>";
               }
               let currentPublishDate = "";
               if (!currentItem.PublishDate) {
                currentPublishDate = "";
               } else {
                currentPublishDate = 
                 "<li><strong>Publish Date:</strong> " +
                 convertDate(currentItem.PublishDate.toString()) +
                 "</li>";
               }
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
                 "<ul>" +
                 currentJournal +
                 currentPublishDate + 
                 currentDOILink +
                 currentAbstract +
                 "</ul></ul>";
             }
             articlesHTML = articlesTitle + articlesHTML;
             articlesHTML += closingDivs;
             $("#publications").removeClass("d-none");
             $("#publications").append(articlesHTML);
           } else {
             console.log("No data returned for publications!");
           }
           //End Publications
 
           //Begin Awards
           var sectionName = "Awards";
           let awardsTitle = openingAccordion(sectionName) + "Awards" + closingAccordion(sectionName);

           var awardsLength = lengthSet(data.Awards.length, $("#awardsCount").val());       

           let awardsHTML="";
           if (awardsLength > 0) {

            reverseChronologicalOrder(data.Awards, publishName="ReceivedDate");
             
             for (let i = 0; i < awardsLength; i++) {
               let currentItem = data.Awards[i];
               awardsHTML+="<ul><li><strong>" + currentItem.AwardName.toString() + "</strong></li>";
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
 
               awardsHTML +=
                 "<ul>" +
                 currentYear +
                 currentURL +
                 currentOrg +
                 "</ul></ul>";
             }
             awardsHTML = awardsTitle + awardsHTML;
             awardsHTML += closingDivs;
             $("#awards").removeClass("d-none");
             $("#awards").append(awardsHTML);
           } else {
            console.log("No data returned for awards!");
           }
           //End Awards
 

           //Begin Grants, Patents, and Clinical Trials
           articlesHTML;
           if (
             data.Grants.length > 0 ||
             data.Patents.length > 0 ||
             data.ClinicalTrials > 0
           ) {
             //Begin Grants
             var sectionName = "Grants";
             grantsTitle = openingAccordion(sectionName) + "Grant, Patents, and Clinical Trials" + closingAccordion(sectionName);
            let grantsHTML="";

            var grantsLength = lengthSet(data.Grants.length, $("#grantsCount").val());

             if (grantsLength > 0) {

              reverseChronologicalOrder(data.Grants, publishName="StartDate");
              
               for (let i = 0; i < grantsLength; i++) {
                 let currentItem = data.Grants[i];
                 grantsHTML+="<ul><li><strong>Grant: " + currentItem.GrantName.toString() + "</strong></li>";
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
 
                 grantsHTML +=
                   "<ul>" +
                   currentYear +
                   totalDollars +
                   "</ul></ul>";
               }
             }
             //End Grants
             //Begin Patents
             var patentsLength = lengthSet(data.Patents.length, $("#patentsCount").val());

             if (patentsLength > 0) {

              reverseChronologicalOrder(data.Patents, publishName="PatentDate");

               for (let i = 0; i < patentsLength; i++) {
                 let currentItem = data.Patents[i];
                 grantsHTML+= "<ul><li><strong>Patent: " + currentItem.PatentName.toString() + "</strong></li>";
 
                 let currentYear = currentItem.PatentDate;
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
 
                 grantsHTML +=
                   "<ul>" +
                   currentYear +
                   patentNo +
                   patentAbstract +
                   "</ul></ul>";
               }
             }
             //End Patents
 
             //Begin Clinical Trials
             var clinicalTrialsLength =lengthSet(data.ClinicalTrials.length, $("#clinicalTrialsCount").val());

             if (clinicalTrialsLength > 0) {

              reverseChronologicalOrder(data.ClinicalTrials, publishName="StartDate");

              for (let i = 0; i < clinicalTrialsLength; i++) {
                let currentItem = data.ClinicalTrials[i];
                grantsHTML+= "<ul><li><strong>Clinical Trial: " + currentItem.ClinicalTrialTitle.toString() + "</strong></li>";

                let startDate = currentItem.StartDate;
                
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

                grantsHTML +=
                  "<ul>" +
                  startDate +
                  ctSource +
                  ctSummary +
                  "</ul></ul>";
              }
            }
             //End Clinical Trials
             grantsHTML = grantsTitle + grantsHTML;
             grantsHTML += closingDivs;
             $("#grants").removeClass("d-none");
             $("#grants").append(grantsHTML);
           } else {
            console.log("No data returned for grants, patents, and/or clinical trials!");
           }
           //End Grants, Patents, and Clinical Trials
 
           //Begin Presentations
           var sectionName = "Presentations";
           let presentationsTitle = openingAccordion(sectionName) + sectionName + closingAccordion(sectionName);
           let presentationsHTML = "";

           var presentationsLength = lengthSet(data.Presentations.length, $("#presentationsCount").val());        

           if (presentationsLength > 0) {

            reverseChronologicalOrder(data.Presentations, publishName="PresentationDate");
             
             for (let i = 0; i < presentationsLength; i++) {
               let currentItem = data.Presentations[i];
               presentationsHTML+="<ul><li><strong>" + currentItem.PresentationName.toString() + "</strong></li>";
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
               if (!currentItem.PresentationDate) {
                 presentationDate = "";
               } else {
                 presentationDate =
                   "<li><strong>Presentation Date:</strong> " +
                   convertDate(currentItem.PresentationDate) +
                   "</li>";
               }
 
               presentationsHTML +=
                 "<ul>" +
                 venue +
                 sponsor +
                 location +
                 presentationDate +
                 "</ul></ul>";
             }
             presentationsHTML = presentationsTitle + presentationsHTML;
             presentationsHTML += closingDivs;
             $("#presentations").removeClass("d-none");
             $("#presentations").append(presentationsHTML);
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