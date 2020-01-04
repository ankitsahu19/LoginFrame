$(document).ready(function() {
  // On Click SignIn Button Checks For Valid E-mail And All Field Should Be Filled

  // On Click SignUp It Will Hide Login Form and Display Registration Form
  $("#Loginchange1").click(function() {
    $("#Register").slideUp("fast", function() {
      $("#Login").slideDown("fast");
      $("Loginchange2").css("border-bottom-color", "#fff");
    });
  });
  // On Click SignIn It Will Hide Registration Form and Display Login Form
  $("#Loginchange2").click(function() {
    $("#Login").slideUp("fast", function() {
      $("#Register").slideDown("fast");
    });
  });
});
function change(theObject) {
  document.getElementById("Loginchange1").style.borderColor = "#172746";
  document.getElementById("Loginchange2").style.borderColor =
    "rgba(23, 39, 70, 0.24)";
}
function change1(theObject) {
  document.getElementById("Loginchange2").style.borderColor = "#172746";
  document.getElementById("Loginchange1").style.borderColor =
    "rgba(23, 39, 70, 0.24)";
}
