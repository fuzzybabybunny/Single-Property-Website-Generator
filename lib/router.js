Router.configure({
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
    layoutTemplate: 'layout',
    onBeforeAction: redirectToWebsitesList
  });

  this.route('websitesList', {
    path: '/',
    layoutTemplate: 'layout',
    onBeforeAction: checkIfUserLoggedIn
  });

  this.route('websiteSubmit', {
    path: '/submit',
    layoutTemplate: 'layout',
    onBeforeAction: checkIfUserLoggedIn
  });

  this.route('websitePage', {
    path: '/websites/:_id',
    data: getWebsiteDataById
  });

  this.route('websiteEdit', {
    path: '/websites/:_id/edit',
    layoutTemplate: 'layout',
    data: getWebsiteDataById
  });

  this.route('merlinTemplate', {
    path: '/merlin',
  });

  this.route('merlinTemplateIframe', {
    path: 'http://localhost:4000/:_id',
    data: getWebsiteDataById
  });

  this.route('userPage', {
    path: '/user/:_id',
    layoutTemplate: 'layout'
  });

  this.route('userEdit', {
    path: '/user/:_id/edit',
    layoutTemplate: 'layout'
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