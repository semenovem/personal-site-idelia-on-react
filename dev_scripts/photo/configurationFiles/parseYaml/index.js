const pkgFs = require('fs');
const pkgPath = require('path');
const pkgYaml = require('js-yaml');

const parseResolutions = require('./parseResolutions');

const PHOTO_STUDIO = 'photoStudio';

/**
 * @param path {string} full path to the configuration file
 * @returns {Promise<null|{ baseDir, resolutions, input, output }>}
 */
async function parseYaml(path) {
  try {
    const configCommon = pkgYaml.safeLoad(pkgFs.readFileSync(path, 'utf8'));

    if (PHOTO_STUDIO in configCommon === false) {
      return null;
    }

    const config = configCommon[PHOTO_STUDIO];

    return {
      ...config,
      tasks: parseResolutions(config.resolutions, config.defaults),
      baseDir: pkgPath.dirname(path),
    };
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = parseYaml;
