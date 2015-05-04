Visitor.init();

var username;

if (Meteor.isClient) {


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
        username: username = Random.id()
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
