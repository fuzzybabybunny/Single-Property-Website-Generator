$('#create-website-modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
});

Template.websitesList.helpers({
  websites: function() {
    return Websites.find({}, {sort: {created: -1}});
  }
});

Template.websitesList.events({

  'submit #add-website-form': function(e) {
    e.preventDefault();

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

    console.log(website);

    website._id = Websites.insert(website, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        console.log(website._id);
        var template = $(e.target).find('[name=template]').val();
        var url = "";

        if ( template == "1" ) {
          url = "http://localhost:4000/" + website._id;
        } else if ( template == "2" ) {
          url = "http://localhost:4001/" + website._id;
        } else if ( template == "3" ) {
          url = "http://localhost:4002/" + website._id;
        } else if ( template == "4" ) {
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
              alert ("Website Created!");
            }
          }
        );
      }
    });
  },
});