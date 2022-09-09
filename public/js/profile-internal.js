$(window).on("load", function () {
  var FACULTY_ENDPOINT = "https://asc-fiapi-profile-proxy.azurewebsites.net/api/activity/faculty/";
   console.log("INTERNAL faculty profile javascript loaded");

     function invalidUUID(){
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
 
     if ($("#uuid").val() !== "") {
       $.ajax({
         type: "GET",
         url:
           FACULTY_ENDPOINT +
           $("#uuid").val()
       })
         .done(function (data) {
           data=JSON.parse(data);

           //Begin Awards
           var awardLength=data.Awards.length;
           if (awardLength > 0) {
            $("#utsa-discovery-items").append("<li>Awards: " + awardLength + "</li>");
           } else {
            $("#utsa-discovery-items").append("<li>Awards: " + awardLength + "</li>");
             $("#awards").append(
               "<p class='text-danger border border-danger p-3'>No data returned!</p>"
             );
             $("#awards").removeClass("d-none");
           }
           //End Awards      
           
           //Begin Presentations
           var presentationLength=data.Presentations.length;
           if (presentationLength > 0) {
            $("#utsa-discovery-items").append("<li>Presentations: " + presentationLength + "</li>");
           } else {
            $("#utsa-discovery-items").append("<li>Presentations: " + presentationLength + "</li>");
             $("#presentations").append(
               "<p class='text-danger border border-danger p-3'>No data returned!</p>"
             );
             $("#presentations").removeClass("d-none");
           }
           //End Presentations           

           //Begin Grants, Patents, and Clinical Trials
           if (
             data.Grants.length > 0 ||
             data.Patents.length > 0 ||
             data.ClinicalTrials > 0
           ) {
             //Begin Grants
            var grantLength=data.Grants.length;
             if (grantLength > 0) {
                $("#utsa-discovery-items").append("<li>Grants: " + grantLength + "</li>");
             }else{
                $("#utsa-discovery-items").append("<li>Grants: " + grantLength + "</li>");

                $("#grants").append(
                    "<p class='text-danger border border-danger p-3'>No data returned for Grants!</p>"
                  );
                  $("#grants").removeClass("d-none");                
             }
             
             //End Grants
             //Begin Patents
             var patentLength=data.Patents.length;
             if (patentLength > 0) {
                $("#utsa-discovery-items").append("<li>Patents: " + patentLength + "</li>");
             }else{
                $("#utsa-discovery-items").append("<li>Patents: " + patentLength + "</li>");

                $("#grants").append(
                    "<p class='text-danger border border-danger p-3'>No data returned for Patents!</p>"
                  );
                  $("#grants").removeClass("d-none");                
             }
             //End Patents
 
             //Begin Clinical Trials
             var ctLength=data.ClinicalTrials.length;
             if (ctLength > 0) {
                $("#utsa-discovery-items").append("<li>Clinical Trials: " + ctLength + "</li>");
             }else{
                $("#utsa-discovery-items").append("<li>Clinical Trials: " + ctLength + "</li>");
                $("#grants").append(
                    "<p class='text-danger border border-danger p-3'>No data returned for Clinical Trials!</p>"
                  );
                  $("#grants").removeClass("d-none");
             }
             //End Clinical Trials

           }
           //End Grants, Patents, and Clinical Trials

           //Begin Publications
           var articleLength=data.Articles.length;
           if (articleLength > 0) {
             $("#utsa-discovery-items").append("<li>Articles: " + articleLength + "</li>");
           } else {
            $("#utsa-discovery-items").append("<li>Articles: " + articleLength + "</li>");
             $("#publications").append(
               "<p class='text-danger border border-danger p-3'>No data returned!</p>"
             );
             $("#publications").removeClass("d-none");
           }
           //End Publications           
         })
         .fail(function (data) {
          invalidUUID();
         });
     } else {
        invalidUUID();
     }
});