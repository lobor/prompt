/*
 * add-properties.js: Example of how to add properties to an object using prompt.
 *
 * (C) 2010, Nodejitsu Inc.
 *
 */

var prompt = require('../lib/prompt');

//
// Start the prompt
//
prompt.start();

var obj = {
  properties: {
    animal: {
      description: 'Enter an animal',
      default: 'dog',
      pattern: /dog|cat/
    },
    sound: {
      description: 'What sound does this animal make?',
      ask: function () {
      }
    }
  }
};

//
// Log the initial object.
//

prompt.get(obj, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  email: ' + result.email);
  console.log('  password: ' + result.password);
});
