$(window).on("load", function () {
  var FACULTY_ENDPOINT =
    "https://asc-fiapi-profile-proxy.azurewebsites.net/api/activity/faculty/";
  console.log("INTERNAL faculty profile javascript loaded");

  function invalidUUID() {
    $("#publications").append(
      "<p class='text-danger border border-danger p-3'>Data for UUID not found!</p>",
    );
    $("#awards").append(
      "<p class='text-danger border border-danger p-3'>Data for UUID not found!</p>",
    );
    $("#presentations").append(
      "<p class='text-danger border border-danger p-3'>Data for UUID not found!</p>",
    );
    $("#grants").append(
      "<p class='text-danger border border-danger p-3'>Data for UUID not found!</p>",
    );
    $("#publications").removeClass("d-none");
    $("#awards").removeClass("d-none");
    $("#presentations").removeClass("d-none");
    $("#grants").removeClass("d-none");
    $("#utsa-discovery-items").append(
      "<li class='text-danger'>Data for UUID not found!</li>",
    );
  }

  if ($("#uuid").val() !== "") {
    $.ajax({
      type: "GET",
      url: FACULTY_ENDPOINT + $("#uuid").val(),
    })
      .done(function (data) {
        let dataCheck = $("#uuid").val() + " not found";

        //Check to see if nothing was returned
        if (data === dataCheck) {
          invalidUUID();
          return false;
        }

        function lengthCheck(data, itemName){
          if(data[itemName]){
            return data[itemName].length;
          }else{
            return 0;
          }
        }

        // console.log(typeof data);
        // data = JSON.parse(data);
        console.log(data);
        //Begin Awards
        var awardLength = lengthCheck(data, "Awards");
        if (awardLength > 0) {
          $("#utsa-discovery-items").append(
            "<li>Awards: " + awardLength + "</li>",
          );
        } else {
          $("#utsa-discovery-items").append(
            "<li>Awards: " + awardLength + "</li>",
          );
          $("#awards").append(
            "<p class='text-danger border border-danger p-3'>No data returned!</p>",
          );
          $("#awards").removeClass("d-none");
        }
        //End Awards

        //Begin Presentations
        var presentationLength = lengthCheck(data, "Presentations");
        if (presentationLength > 0) {
          $("#utsa-discovery-items").append(
            "<li>Presentations: " + presentationLength + "</li>",
          );
        } else {
          $("#utsa-discovery-items").append(
            "<li>Presentations: " + presentationLength + "</li>",
          );
          $("#presentations").append(
            "<p class='text-danger border border-danger p-3'>No data returned!</p>",
          );
          $("#presentations").removeClass("d-none");
        }
        //End Presentations

        //Begin Grants, Patents, and Clinical Trials
        var grantLength = lengthCheck(data, "Grants");
        var patentLength = lengthCheck(data, "Patents");
        var ctLength = lengthCheck(data, "ClinicalTrials");
        if (
          grantLength > 0 ||
          patentLength > 0 ||
          ctLength > 0
        ) {
          //Begin Grants
          if (grantLength > 0) {
            $("#utsa-discovery-items").append(
              "<li>Grants: " + grantLength + "</li>",
            );
          } else {
            $("#utsa-discovery-items").append(
              "<li>Grants: " + grantLength + "</li>",
            );

            $("#grants").append(
              "<p class='text-danger border border-danger p-3'>No data returned for Grants!</p>",
            );
            $("#grants").removeClass("d-none");
          }

          //End Grants
          //Begin Patents
          if (patentLength > 0) {
            $("#utsa-discovery-items").append(
              "<li>Patents: " + patentLength + "</li>",
            );
          } else {
            $("#utsa-discovery-items").append(
              "<li>Patents: " + patentLength + "</li>",
            );

            $("#grants").append(
              "<p class='text-danger border border-danger p-3'>No data returned for Patents!</p>",
            );
            $("#grants").removeClass("d-none");
          }
          //End Patents

          //Begin Clinical Trials
          if (ctLength > 0) {
            $("#utsa-discovery-items").append(
              "<li>Clinical Trials: " + ctLength + "</li>",
            );
          } else {
            $("#utsa-discovery-items").append(
              "<li>Clinical Trials: " + ctLength + "</li>",
            );
            $("#grants").append(
              "<p class='text-danger border border-danger p-3'>No data returned for Clinical Trials!</p>",
            );
            $("#grants").removeClass("d-none");
          }
          //End Clinical Trials
        } else {
          $("#grants").append(
            "<p class='text-danger border border-danger p-3'>No data returned for Grants, Patents, and Clinical Trials!</p>",
          );
          $("#grants").removeClass("d-none");
          $("#utsa-discovery-items").append(
            "<li>Grants: " + grantLength + "</li>",
          );
          $("#utsa-discovery-items").append(
            "<li>Patents: " + patentLength + "</li>",
          );
          $("#utsa-discovery-items").append(
            "<li>Clinical Trials: " + ctLength + "</li>",
          );
        }
        //End Grants, Patents, and Clinical Trials

        //Begin Publications
        var articleLength = lengthCheck(data, "Articles");
        if (articleLength > 0) {
          $("#utsa-discovery-items").append(
            "<li>Publications: " + articleLength + "</li>",
          );
        } else {
          $("#utsa-discovery-items").append(
            "<li>Publications: " + articleLength + "</li>",
          );
          $("#publications").append(
            "<p class='text-danger border border-danger p-3'>No data returned!</p>",
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
