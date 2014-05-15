Template.websiteItem.title = function() {
  return Session.get('title');
}

Template.websiteItem.events({

  'click .glyphicon-trash': function(e) {
    e.preventDefault();
    if (confirm("Delete this website permanently?")) {
      var currentWebsiteId = this._id;
      Websites.remove(currentWebsiteId);
      Router.go('websitesList');
    }
  },

  'submit #edit-website-form': function(e) {
      e.preventDefault();
      console.log("clicked!");
      var currentWebsiteId = this._id;
      var website = {
        address1: $(e.target).find('[name=address1]').val(),
        address2: $(e.target).find('[name=address2]').val(),
        city: $(e.target).find('[name=city]').val(),
        state: $(e.target).find('[name=state]').val(),
        zip: $(e.target).find('[name=zip]').val(),
        sqft: $(e.target).find('[name=sqft]').val(),
        beds: $(e.target).find('[name=beds]').val(),
        baths: $(e.target).find('[name=baths]').val(),
        lot: $(e.target).find('[name=lot]').val(),
        website_title: $(e.target).find('[name=title]').val(),
        description: $(e.target).find('[name=description]').val(),
        created: new Date(),
        template: $(e.target).find('[name=template]').val(),
        video: $(e.target).find('[name=video]').val(),
        user_id: $(e.target).find('[name=user_id]').val()
      }
      console.log(currentWebsiteId);
      Websites.update(currentWebsiteId, {$set: website}, function(error) {
        console.log("Website ID: " + currentWebsiteId);
        if (error) {
          // display the error to the user
          alert(error.reason);
        } else {
          console.log("No Errors");
          var template = $(e.target).find('[name=template]').val();
          var url = "";

          if ( template == "1" ) {
            url = "http://localhost:4001/" + currentWebsiteId;
          } else if ( template == "2" ) {
            url = "http://localhost:4002/" + currentWebsiteId;
          } else if ( template == "3" ) {
            url = "http://localhost:4003/" + currentWebsiteId;
          } else if ( template == "4" ) {
            url = "http://localhost:4004/" + currentWebsiteId;
          }

          console.log(url);

          Websites.update( currentWebsiteId,
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
                alert ("Website Edited!");
              }
            }
          );
        }
      });
    }

});
