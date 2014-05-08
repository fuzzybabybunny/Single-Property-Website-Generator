Template.websiteEdit.events({

  'submit form': function(e) {
    e.preventDefault();

    var currentWebsiteId = this._id;

    var websiteProperties = {
      address1: $(e.target).find('[name=address1]').val(),
      address2: $(e.target).find('[name=address2]').val(),
      city: $(e.target).find('[name=city]').val(),
      state: $(e.target).find('[name=state]').val(),
      zip: $(e.target).find('[name=zip]').val(),
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      created: new Date()
    }

    Websites.update(currentWebsiteId, {$set: websiteProperties}, function(error) {
      if (error) {
      // display the error to the user
      alert(error.reason);
      } else {
        Router.go('websitePage', {_id: currentWebsiteId});
      }
    });

  }

});