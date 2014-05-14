// Template.login.events({

//   'submit #login-button' : function(e, t){
//     e.preventDefault();
//     // retrieve the input field values
//     var email = t.find('#login-email').value
//       , password = t.find('#login-password').value;

//       // Trim and validate your fields here....

//       // If validation passes, supply the appropriate fields to the
//       // Meteor.loginWithPassword() function.
//       // Meteor.loginWithPassword(email, password, function(err){
//       // if (err)
//       //   // The user might not have been found, or their passwword
//       //   // could be incorrect. Inform the user that their
//       //   // login attempt has failed.
//       // else
//       //   // The user has been logged in.
//     // });
//        return false;
//     }
// });

Template.login.rendered = function()
{
    Accounts._loginButtonsSession.set('dropdownVisible', true);
};

Template.login.created = function() {
  $('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>');
  $('head').append('<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>');
  $('head').append('<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>');
  // $('head').append('<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false"></script>');

  $.getScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCRngKslUGJTlibkQ3FkfTxj3Xss1UlZDA&sensor=false', function() {
    $('head').append('<script src="js/grayscale.js"></script>');
  })
}