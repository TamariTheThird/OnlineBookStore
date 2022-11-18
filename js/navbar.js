$(document).ready(function () {
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

  let pass = $('.pass');
  $('.pass-icon').click(function () {
    if (pass.prop('type') == 'password') {
      $(this).removeClass('fa-eye-slash');
      $(this).addClass(' fa-eye');
      pass.attr('type', 'text');
    } else {
      $(this).removeClass('fa-eye');
      $(this).addClass(' fa-eye-slash');
      pass.attr('type', 'password');
    }
  });

  // sign up
  $('.sign-up').click(function () {
    $('.modal').show();
    $('h2').text('create accaount');
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

  $('.close').click(function () {
    $('.modal').hide();
  });
});
