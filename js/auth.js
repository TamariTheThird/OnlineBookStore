$(document).ready(function () {
  // check email
  let email = $('.email');
  email.keyup(function () {
    if (!email.val().match('@')) {
      $('.email-error').show().text('* Please use valid email');
    } else {
      $('.email-error').hide();
    }
  });

  //  check password
  let pass = $('.pass');
  pass.keyup(function () {
    if ((pass.val().length < 6) | !pass.val().match(/[0-9]/)) {
      $('.pass-error')
        .show()
        .text('* Required min. 6 symbols including numbers');
    } else {
      $('.pass-error').hide();
    }
  });

  // show/hide password
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
  // alert
  $('.alert').hide();
  $('input').mousedown(function (e) {
    $('.alert').hide();
  });

  // close form
  $('.close').click(function () {
    $('.alert').hide();
    $('input').val('');
    $('.pass-error').hide();
    $('.email-error').hide();

    $('.modal').hide();
  });

  //
  let users = [];

  // create account
  $('.register-user').click(function (e) {
    e.preventDefault();

    let name = $('.name').val();
    let lastName = $('.last-name').val();

    let email = $('.email').val();
    let pass = $('.pass').val();

    users = JSON.parse(localStorage.getItem('Users'))
      ? JSON.parse(localStorage.getItem('Users'))
      : [];

    if (name == '' || lastName == '' || email == '' || pass == '') {
      $('.alert').show().text('All fields are required');
    } else if (
      users.some((data) => {
        return data.email == email || data.pass == pass;
      })
    ) {
      $('.alert').show().text('This email and/or password is used already');
    } else {
      users.push({
        name: name,
        lastName: lastName,
        email: email,
        pass: pass,
      });

      localStorage.setItem('Users', JSON.stringify(users));
      $('input').val('');
      $('.user').html(` <div class="active-user">
<span class="user-avatar"><img src="images/user-icon.png" alt=""></span>
<span class="name">user account</span> 
</div>`);
      $('.modal').hide();
    }
  });

  // sign in

  $('.sign-in-user').click(function (e) {
    e.preventDefault();
    let email = $('.signInForm .email').val();
    let pass = $('.signInForm .pass').val();

    users = JSON.parse(localStorage.getItem('Users'));

    if (
      users.some((data) => {
        return data.email == email && data.pass == pass;
      })
    ) {
      $('.user').html(` <div class="active-user">
      <span class="user-avatar"><img src="images/user-icon.png" alt=""></span>
      <span class="name">user account</span> 
      </div>`);
      $('.modal').hide();
    } else {
      $('.alert').show().text('Email address or password is wrong ...');
    }
  });
});
