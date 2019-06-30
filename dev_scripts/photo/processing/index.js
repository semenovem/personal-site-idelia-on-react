const pkgPath = require('path');

const createDir = require('./createDir');
const generateFnNewFilePath = require('./newFilePath');
const resizeImg = require('./resize');

/**
 * @param {{ input, output, tasks }}
 * @param sourceFilePaths {Array<string>}
 */
async function processing({ input, output, tasks, baseDir }, sourceFilePaths) {
  const createdFiles = [];
  const outputDir = pkgPath.resolve(baseDir, output.dir);
  const newFilePath = generateFnNewFilePath(outputDir, output.extension);

  if (!createDir(outputDir)) {
    throw `failed to create directory ${outputDir}`;
  }

  for(const filePath of sourceFilePaths) {
    const { name: fileName, base } = pkgPath.parse(filePath);

    for(const { resolution, quality, pixelRatio, size, kind } of tasks) {
      for (const pixelRatioValue of pixelRatio) {
        const filePathResized = newFilePath(
          fileName,
          resolution,
          kind === 'main' ? null : kind,
          pixelRatioValue
        );

        const targetSize = sizeToPixelRatio(size, pixelRatioValue);

        // TODO добавить обработку небольших оригиналов, что бы не увеличивать больше оригинального разрешения

        // const resultSize = {
        //   height: 100,
        //   ...targetSize
        // };
        const resultSize = await resizeImg(
          filePath,
          filePathResized,
          targetSize,
          quality
        );


        createdFiles.push({
          sourceFilePath: filePathResized,
          filePathResized,
          size: resultSize,
          originFileName: fileName,
          resolution,
          pixelRatio,
          kind,
        });
        console.log(filePathResized.substr(process.cwd().length), size, resultSize, quality);
      }
    }
  }

  return createdFiles;
}


module.exports = processing;


function sizeToPixelRatio(size, pixelRatio) {
  if (pixelRatio === 1) {
    return size;
  }

  const newSize = {
    ...size
  };

  if ('width' in newSize) {
    newSize.width = newSize.width === null ? null : Math.round(newSize.width * pixelRatio);
  }

  if ('height' in newSize) {
    newSize.height = newSize.height === null ? null : Math.round(newSize.height * pixelRatio);
  }

  return newSize;
}
