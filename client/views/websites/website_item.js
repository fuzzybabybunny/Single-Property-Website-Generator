Template.websiteItem.title = function() {
  return Session.get('title');
}

Template.websiteItem.helpers({

  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  },

});

Template.websiteItem.events({

 'click .glyphicon-trash': function(e) {
    e.preventDefault();

    if (confirm("Delete this website?")) {
      var currentWebsiteId = this._id;
      console.log(this._id);
      Websites.remove(currentWebsiteId);
      Router.go('websitesList');
    }

  },

 'click .glyphicon-pencil': function(e) {
    e.preventDefault();
    Router.go('websiteEdit');
  }

});