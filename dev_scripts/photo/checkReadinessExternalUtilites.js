const shell = require('shelljs');

const PROGRAM_NAME_IMAGE = 'gm';         // graphicsmagick
const PROGRAM_NAME_IMAGE1 = 'magick';    // imagemagick

module.exports = function() {
  if (!shell.which(PROGRAM_NAME_IMAGE)) {

    /*

    which brew
    brew update
    brew upgrade
    brew install graphicsmagick

    # --with-webp - not work
    brew install imagemagick --with-webp

    */

    return `Not installed required program: ${PROGRAM_NAME_IMAGE}`;
  }

  if (!shell.which(PROGRAM_NAME_IMAGE1)) {
    return `Not installed required program: ${PROGRAM_NAME_IMAGE1}`;
  }

  return null;
};
