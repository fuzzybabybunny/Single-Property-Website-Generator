Template.websitesList.helpers({
  websites: function() {
    return Websites.find({}, {sort: {created: -1}});
  }
});