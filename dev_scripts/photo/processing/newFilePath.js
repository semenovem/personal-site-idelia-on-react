const pkgPath = require('path');

module.exports = function(dir, ext) {
  return (name, resolution, kind, pixelRatio) => {
    const base = [
      name,
      resolution ? `-${resolution}` : '',
      kind ? `-${kind}` : '',
      pixelRatio !== 1 ? `-x${pixelRatio}` : '',
      '.',
      ext
    ].join('');

    return pkgPath.normalize(`${dir}/${base}`);
  }
};
