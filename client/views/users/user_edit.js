Template.userEdit.events({

  'submit form': function(e) {
    e.preventDefault();

    Meteor.users.update( Meteor.userId(),
      {
        $set: {
          'profile.first_name': $(e.target).find('[name=first_name]').val(),
          'profile.last_name': $(e.target).find('[name=last_name]').val(),
          'profile.cell_phone': $(e.target).find('[name=cell_phone]').val(),
          'profile.email': $(e.target).find('[name=email]').val(),
          'profile.business_name': $(e.target).find('[name=business_name]').val(),
          'profile.website': $(e.target).find('[name=website]').val()
        }
      },

      function(error) {
        if (error) {
        // display the error to the user
        alert(error.reason);
        } else {
          Router.go('userPage', {_id: Meteor.userId() });
        }
      }
    );
  }
});