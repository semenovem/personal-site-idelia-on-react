const pkgFg = require('fast-glob');

const opts = {
  onlyFiles: true,
  absolute: true,
  objectMode: false,
  ignore: [
    '**/node_modules'
  ]
};

/**
 * @returns {Promise<string[]>}
 */
async function findFilePath () {
  return pkgFg.sync('**/*.yml', opts);
}

module.exports = findFilePath;
