Visitor.init();

if (Meteor.isClient) {

  var username = "username";

  Template.WhoAmI.helpers({
    userId: function () {
      return Meteor.userId();
    }
    , visitorId: function () {
      return Meteor.visitorId();
    }
  });

  Template.WhoAmI.events({
    'click .signup': function () {
      Accounts.createUser({
        username: username
        , password: "password"
      });
    }
    , 'click .signin': function () {
      Meteor.loginWithPassword(username, 'password');
    }
    , 'click .signout': function () {
      Meteor.logout();
    }
  });
}

if (Meteor.isServer) {
}
