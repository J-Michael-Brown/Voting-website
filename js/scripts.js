$(document).ready(function() {
  $("form#AgeControl").submit(function(event) {
    event.preventDefault();
    var ageInput = parseInt($("#UserAge").val());
    $("#Voter").hide();
    $("#NonVoter").hide();
    if (ageInput >= 18) {
      $("#Voter").show();


    } else {
      $("#NonVoter").show();

    }


  });
});
