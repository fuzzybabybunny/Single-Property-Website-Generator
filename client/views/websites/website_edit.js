
Template.websiteEdit.events({

  'submit form': function(e) {
    e.preventDefault();

    var website = {
      address1: $(e.target).find('[name=address1]').val(),
      address2: $(e.target).find('[name=address2]').val(),
      city: $(e.target).find('[name=city]').val(),
      state: $(e.target).find('[name=state]').val(),
      zip: $(e.target).find('[name=zip]').val(),
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      created: new Date(),
      template: $(e.target).find('[name=template]').val()
    }

    website._id = Websites.insert(website, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {

        var template = $(e.target).find('[name=template]').val();
        var url = "";

        if ( template == "0" ) {
          url = "http://localhost:4000/" + website._id;
        } else if ( template == "1" ) {
          url = "http://localhost:4001/" + website._id;
        } else if ( template == "2" ) {
          url = "http://localhost:4002/" + website._id;
        } else if ( template == "3" ) {
          url = "http://localhost:4003/" + website._id;
        }

        Websites.update( website._id,
          {
            $set: {
              'url': url
            }
          },

          function(error) {
            if (error) {
            // display the error to the user
            alert(error.reason);
            } else {
              Router.go('websitePage', {_id: website._id });
            }
          }
        );
      }
    });
  }
});