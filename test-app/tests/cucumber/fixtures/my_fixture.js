(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
      // Complete reset

      Visitor.collection.remove({});
      Meteor.users.remove({});
    }
  });

})();