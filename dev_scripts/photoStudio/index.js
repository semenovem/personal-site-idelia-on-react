console.log('__start');

const fs = require('fs');
const gm = require('gm');
const yaml = require('js-yaml');

/**
 * path of project
 * @type {string}
 */
const dir = process.cwd();

/**
 * path of file with settings
 * @type {string}
 */
const pathYamlGallery = `${dir}/src/mod/Gallery/photos.yml`;

let settings;

// get settings
try {
  settings = yaml.safeLoad(fs.readFileSync(pathYamlGallery, 'utf8'));
  console.log(JSON.stringify(settings));
} catch (e) {
  console.log(e);
  process.exit(1);
}



console.log('__end');
