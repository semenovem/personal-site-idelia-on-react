const findFilePaths = require('./findFilePaths');
const parseYaml = require('./parseYaml');

/**
 * @returns {any[]}
 */
async function findConfigs() {
  const filePaths = await findFilePaths();
  const result = [];

  for (const path of filePaths) {
    const parsed = await parseYaml(path);

    if (parsed) {
      result.push(parsed);
    }
  }

  return result;
}

module.exports = findConfigs;
