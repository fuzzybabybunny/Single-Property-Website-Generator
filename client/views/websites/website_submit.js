Template.websiteSubmit.events({

  'submit form': function(e) {
    e.preventDefault();

    var website = {
      address1: $(e.target).find('[name=address1]').val(),
      address2: $(e.target).find('[name=address2]').val(),
      city: $(e.target).find('[name=city]').val(),
      state: $(e.target).find('[name=state]').val(),
      zip: $(e.target).find('[name=address1]').val(),
      address1: $(e.target).find('[name=zip]').val(),
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val(),
      created: new Date()
    }

  }

});