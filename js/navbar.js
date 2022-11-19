$(document).ready(function () {
  // menu toggle
  $('.nav').hide();
  $('.nav-arrow').hide();

  $('.menu').click(function (e) {
    e.preventDefault();

    $('.nav-arrow').toggle();
    $('.nav').slideToggle(300);
    $('.arrow').toggleClass('fa-caret-down');
    $('.arrow').toggleClass('fa-caret-up');
    $(this).toggleClass('menu-active');
  });

  // sign up
  $('.sign-up').click(function () {
    $('.modal').show();
    $('.modal-header h2').text('create accaount');
    $('.registerForm').show();
    $('.signInForm').hide();
  });

  // sign in
  $('.sign-in').click(function () {
    $('.modal').show();
    $('.modal-header h2').text('sign in');
    $('.registerForm').hide();
    $('.signInForm').show();
  });
});
