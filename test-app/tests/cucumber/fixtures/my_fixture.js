(function () {

  'use strict';

  Meteor.methods({
    'reset' : function() {
      Visitor.collection.remove({});
    }
  });

})();