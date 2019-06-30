const pkgPath = require('path');
const findFilePaths = require('./findFilePath');

/**
 * @param input {{patternNameFile, dir}}
 * @param baseDir {string}
 * @returns {Promise<String[]>}
 */
async function sourceFiles({ input, baseDir }) {
  const dirForFindFiles = pkgPath.resolve(baseDir, input.dir);

  return await findFilePaths(dirForFindFiles, input.patternNameFile);
}

module.exports = sourceFiles;
