function change(theObject) {
  document.getElementById("Register").style.display = "none";
  document.getElementById("Login").style.display = "block";
  document.getElementById("Loginchange1").style.borderColor = "#172746";
  document.getElementById("Loginchange2").style.borderColor =
    "rgba(23, 39, 70, 0.24)";
}
function change1(theObject) {
  document.getElementById("Login").style.display = "none";
  document.getElementById("Register").style.display = "block";
  document.getElementById("Loginchange2").style.borderColor = "#172746";
  document.getElementById("Loginchange1").style.borderColor =
    "rgba(23, 39, 70, 0.24)";
}
