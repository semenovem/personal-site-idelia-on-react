const pkgPath = require('path');

const createDir = require('./createDir');
const write = require('./write');


async function createImportPhotos({ baseDir, importFile }, createFiles) {
  const dir = pkgPath.resolve(baseDir, importFile.dir);

  if (!createDir(dir)) {
    throw `failed to create directory ${dir}`;
  }

  const path = pkgPath.normalize(`${dir}/${importFile.name}`);

  write(path, createFiles);

  console.log('------ ');
}

module.exports = createImportPhotos;
