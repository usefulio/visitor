(function () {

  'use strict';

  module.exports = function () {

    // You can use normal require here, cucumber is NOT run in a Meteor context (by design)
    var url = require('url');
    var state = {};

    this.Given(/^I am a new user$/, function () {
      state = {};
      // no callbacks! DDP has been promisified so you can just return it
      return this.ddp.callAsync('reset', []); // this.ddp is a connection to the mirror
    });

    this.When(/^I navigate to "([^"]*)"$/, function (relativePath, callback) {
      // WebdriverIO supports Promises/A+ out the box, so you can return that too
      this.browser. // this.browser is a pre-configured WebdriverIO + PhantomJS instance
        url(url.resolve(process.env.HOST, relativePath)). // process.env.HOST always points to the mirror
        call(callback);
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle).and.notify(callback);
    });

    this.Then(/^VisitorId should be (new|empty|the same)$/, function (expectedId, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser.
        waitForVisible('.visitorId'). // WebdriverIO chain-able promise magic
        getText('.visitorId').then(function (result) {
          var visitorId = /Visitor\: ([a-zA-Z0-9]+)?/.exec(result);
          visitorId = visitorId && visitorId[1];

          var actualId;
          if (visitorId && visitorId !== state.visitorId)
            actualId = 'new';
          if (visitorId && visitorId === state.visitorId)
            actualId = 'the same';
          if (!visitorId)
            actualId = 'empty';

          state.visitorId = visitorId;

          return actualId;
        }).should.become(expectedId).and.notify(callback);
    });

  };

})();