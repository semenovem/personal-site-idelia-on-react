const fg = require('fast-glob');
const mdPath = require('path');

const opts = {
  onlyFiles: true,
  absolute: true,
  objectMode: false,
  ignore: [
    '**/node_modules'
  ]
};

/**
 * @param dir {string}
 * @param patternBaseName {string}
 * @returns {Promise<string[]>}
 */
async function findFilePaths(dir, patternBaseName) {
  const source = mdPath.normalize(`${dir}/${patternBaseName}`);

  return fg.sync(source, opts);
}

module.exports = findFilePaths;
