Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('websites'); }
});

Router.map(function() {
  this.route('websitesList', {path: '/'});
});