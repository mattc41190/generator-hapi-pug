const path = require('path');
const yoHelpers = require('yeoman-test');
const yoAssert = require('yeoman-assert');
const generator = path.join(__dirname, '../generators/app');

const files = [
  'package.json',
  'server.js',
  'README.md',
  'src/views/index.pug',
  'src/styles/main.styl',
  'src/images/headshot.png' // This is made dynamically
]

describe('staticus:app', function () {

  it('generates a project with all the correct files', function () {
    return yoHelpers.run(generator)
      .withPrompts({ name: 'Charles Mingus', tagLine: 'I <3 jazz', gitHub: false })
      .then(function () {
        yoAssert.file(files);
      });
  });

});
