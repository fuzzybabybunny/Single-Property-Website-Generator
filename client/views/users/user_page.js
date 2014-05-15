Template.userPage.created = function() {
  $.getScript('js/grayscale.js');
  $.getScript('js/jquery.easing.min.js');

  // element_to_scroll_to = document.getElementById('profile');

  // var a = document.getElementById('profile-nav-button');

  // a.onclick = function() {
  //   element_to_scroll_to.scrollIntoView();
  // }
}

Template.userPage.events({
  'submit #edit-profile-form': function(e) {
    e.preventDefault();
    Meteor.users.update( Meteor.userId(),
      {
        $set: {
          'profile.first_name': $(e.target).find('[name=first_name]').val(),
          'profile.last_name': $(e.target).find('[name=last_name]').val(),
          'profile.cell_phone': $(e.target).find('[name=cell_phone]').val(),
          'profile.email': $(e.target).find('[name=email]').val(),
          'profile.business_name': $(e.target).find('[name=business_name]').val(),
          'profile.website': $(e.target).find('[name=website]').val(),
          'profile.photo': $(e.target).find('[name=photo]').val()
        }
      },

      function(error) {
        if (error) {
        // display the error to the user
        alert(error.reason);
        } else {
          alert("Profile Edited!");
        }
      }
    )
  }
});
