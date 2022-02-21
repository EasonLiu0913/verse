$("main").css("padding-top", $("header").height());

function updateSettingBtn() {
  $(".setting").css(
    "left",
    $("main .container").offset().left +
      $("main .container").outerWidth() +
      30 +
      "px"
  );
}

updateSettingBtn();

$(window).resize(function () {
  updateSettingBtn();
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});
