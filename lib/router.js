Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('websites'); }
});

Router.map(function() {

  this.route('login', {
    path: '/login',
    onBeforeAction: function() {
      if ( Meteor.user() ) {
        this.render('websitesList');
        this.pause();
      }
    }
  });

  this.route('websitesList', {
    path: '/',
    // onBeforeAction: function() {
    //   if ( !Meteor.user() ) {
    //     this.render('login');
    //     this.pause();
    //   }
    // }
  });

  this.route('websiteSubmit', {
    path: '/submit',
    onBeforeAction: function() {
      if ( !Meteor.user() ) {
        this.render('login');
        this.pause();
      }
    }
  });

  this.route('websitePage', {
    path: '/websites/:_id',
    data: function() { return Websites.findOne(this.params._id); }
  });

  this.route('websiteEdit', {
    path: '/websites/:_id/edit',
    data: function() { return Websites.findOne(this.params._id); }
  });

});

var requireLogin = function(pause) {
  if (! Meteor.user() ) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');

    pause();
  }
}