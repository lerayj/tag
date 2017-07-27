/**
 * Pizza delivery prompt example
 * run example by writing `node pizza.js` in your console
 */

'use strict';
var inquirer = require('inquirer');

console.log('===== Convertyx Config tool =====');

var questions = [
  {
    type: 'input',
    name: 'websiteKey',
    message: 'Enter the domain name:',
    validate: function (value) {
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'list',
    name: 'type',
    message: 'Choose the client site type:',
    choices: ['retail', 'hotel'],
    default: false
  },
  {
    type: 'input',
    name: 'basketContainer',
    message: '==== Basket capture ====\n Basket URL?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    },
  },
  {
    type: 'input',
    name: 'basketContainer',
    message: 'Basket CONTAINER selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    },
  },

  {
    type: 'input',
    name: 'basketProductId',
    message: 'Basket product ID selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'basketProductImage',
    message: 'Basket product IMAGE selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'basketProductLine',
    message: 'Basket product LINE selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'basketProductName',
    message: 'Basket product NAME selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'basketProductPrice',
    message: 'Basket product PRICE selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'basketProductQuantity',
    message: 'Basket product QUANTITY selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'basketTotal',
    message: 'Basket TOTAL PRICE selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'emailCheckoutExisting',
    message: '==== Email Capture ====\n == Checkout Part == \nEXISTING email selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
  {
    type: 'input',
    name: 'emailCheckoutLogin',
    message: 'EXISTING email selector?',
    validate: function (value) {
        console.log("VALUE: ", value);
      return value ? true : 'Cannot be empty.';
    }
  },
];

inquirer.prompt(questions).then(function (answers) {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});