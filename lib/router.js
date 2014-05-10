Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('websites'); }
});

checkIfUserLoggedIn = function() {
  if(!Meteor.loggingIn() && !Meteor.user()) {
      this.redirect("login");
  }
}

redirectToWebsitesList = function() {
  if( Meteor.user() ) {
    this.redirect('websitesList');
  }
}

getWebsiteDataById = function() {
  return Websites.findOne(this.params._id);
}

Router.map(function() {

  this.route('login', {
    path: '/login',
    onBeforeAction: redirectToWebsitesList
  });

  this.route('websitesList', {
    path: '/',
    onBeforeAction: checkIfUserLoggedIn
  });

  this.route('websiteSubmit', {
    path: '/submit',
    onBeforeAction: checkIfUserLoggedIn
  });

  this.route('websitePage', {
    path: '/websites/:_id',
    data: getWebsiteDataById
  });

  this.route('websiteEdit', {
    path: '/websites/:_id/edit',
  });

  this.route('merlinTemplate', {
    path: '/merlin',
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