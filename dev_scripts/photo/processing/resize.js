const pkgGm = require('gm');


module.exports = function(filePath, filePathResized, size, quality) {
  return new Promise((resolve) => {
    pkgGm(filePath)
      .resize(...convSizeToArr(size))
      .noProfile()
      .quality(quality)
      .write(filePathResized, err => {
        if (err) {
          console.log(`error write image: ${filePath}, ${filePathResized}`);
          console.error(err);
          throw(`error write image: ${filePath}, ${filePathResized}`);
        }

        pkgGm(filePathResized)
          .size((err, size) => {
            if (err) {
              console.log(`error get size of image: ${filePath}, ${filePathResized}`);
              console.error(err);
              throw(`error get size of image: ${filePath}, ${filePathResized}`);
            }

            resolve(size);
          });
      });
  });
};

/**
 * @param size {{ width: string, [height]: string}}
 * @returns {Array}
 */
function convSizeToArr(size) {
  const argsResize = [];

  if ('width' in size) {
    argsResize.push(size.width);
  }
  if ('height' in size) {
    argsResize.push(size.height);
  }

  return argsResize;
}
