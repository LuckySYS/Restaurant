$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("acitve");
    $("#mobile_btn").find('i').toggleClass("fa-x");
  });
});
