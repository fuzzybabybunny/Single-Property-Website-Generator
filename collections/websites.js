Websites = new Meteor.Collection('websites');

Meteor.methods({
  website: function(websiteAttributes) {

    var user = Meteor.user();

    var website = _.extend(_.pick(websiteAttributes, 'address1',
      'address2', 'city', 'state', 'zip', 'title', 'description'), {
      userId: user._id,
      owner: user.username,
      created: new Date()
    });

    var websiteId = Websites.insert(website);

    return websiteId;
  }

})