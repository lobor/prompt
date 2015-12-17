/*
 * add-properties.js: Example of how to add properties to an object using prompt.
 *
 * (C) 2010, Nodejitsu Inc.
 *
 */

var prompt = require('prompt');

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
        return (prompt.history('animal').value === 'dog');
      },
      default: false,
    },
    t: {
      description: 't',
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
  console.log('  animal: ' + result.animal);
  console.log('  sound: ' + result.sound);
  console.log('  t: ' + result.t);
});
