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

    this.When(/^I (signup|signin|signout)$/, function (buttonName, callback) {
      var className = '.' + buttonName;
      this.browser.
        waitForVisible(className).
        click(className).
        call(callback);
    });

    this.Then(/^I should see the title "([^"]*)"$/, function (expectedTitle, callback) {
      // you can use chai-as-promised in step definitions also
      this.browser.
        waitForVisible('h1'). // WebdriverIO chain-able promise magic
        getTitle().should.become(expectedTitle).and.notify(callback);
    });

    this.Then(/^The "([^"]*)" should be (new|empty|the same)$/
      , function (variableName, expected, callback) {
      // you can use chai-as-promised in step definitions also
      var className = '.' + variableName;
      this.browser.
        waitForVisible(className). // WebdriverIO chain-able promise magic
        getText(className).then(function (result) {
          var value = new RegExp(variableName + "\\: ([a-zA-Z0-9]+)?").exec(result);
          value = value && value[1];

          var actual;
          if (value) {
            actual = value === state[value] ? "the same" : "new";
            state[value] = value;
          } else {
            actual = "empty";
          }

          console.log(variableName, value);

          return actual;
        }).should.become(expected).and.notify(callback);
    });

  };

})();