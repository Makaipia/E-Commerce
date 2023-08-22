$(document).ready(function () {
    $('.login-form').submit(function (e) {
      e.preventDefault();
      var email = $('input[type=email]').val();
      var password = $('input[type=password]').val();
      if (email === 'group5@gmail.com' && password === 'postive-energy-crew') {
        window.location.href = 'products.html';
        alert("Login successfully");
     
      } else {
        alert('Please check if you entered the correct email or password');
        alert("invalid credentials");
      }
    });
  });
  
 