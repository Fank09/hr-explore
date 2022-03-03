"use strict";

// Back to Top Button 
var btn = $('#top-button');
$(window).scroll(function () {
  if ($(window).scrollTop() > 1000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
}); //Question Show//
//Show Hide Answer and Main Comment Box

$("#answerButton").click(function () {
  $(".comment-box-main").show();
  $("#answerButton").hide();
});
$("#cancelButton").click(function () {
  $(".comment-box-main").hide();
  $("#answerButton").show();
}); //Other Comment Box //

$(".comment-btn").on('click', function () {
  $(".comment-box").show();
});
$(".cancel-btn").on('click', function () {
  $(".comment-box").hide();
}); // Copy Url to Clipboard //

var $temp = $("<input>");
var $url = $(location).attr('href');
$('#shareLink').on('click', function () {
  $("body").append($temp);
  $temp.val($url).select();
  document.execCommand("copy");
  $(".copy-alert").text("URL copied!");
  $temp.remove();
  $('.copy-alert').fadeIn('slow', function () {
    $(this).delay(500).fadeOut('slow');
  });
});