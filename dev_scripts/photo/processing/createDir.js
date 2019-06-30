const makeDir = require('make-dir');

module.exports = function(dir) {
  const createdPath = makeDir.sync(dir);

  return createdPath === dir;
};
