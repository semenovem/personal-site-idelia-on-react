
const DEFAULT_QUALITY = 70;
const DEFAULT_PIXEL_RATIO = [1];
const RESOLUTIONS = ['xs', 'sm', 'md', 'lg', 'xl'];
const KINDS = ['main', 'blurred', 'preview'];


/**
 * @param resolutions {{}}
 * @param defaults {{}}
 * @returns {Array<{resolution, quality, pixelRatio, size}>}
 */
module.exports = function (resolutions, defaults) {
  const setDefaults = makeDefaults(defaults);
  const tasks = KINDS
    .filter(kind => resolutions[kind])
    .map(kind => ({
        ...setDefaults[kind],
        ...resolutions[kind],
        kind
      })
    );

  RESOLUTIONS
    .filter(it => it in resolutions)
    .forEach(resolution => {
      const dataResolution = resolutions[resolution];

      if ('size' in dataResolution) {
        tasks.push({
          ...setDefaults['main'],
          size: dataResolution.size,
          resolution,
          kind: 'main',
        })
      }

      KINDS
        .filter(kind => kind in dataResolution)
        .forEach(kind => {
          const dataKind = dataResolution[kind];

          tasks.push({
            ...setDefaults[kind],
            size: typeof dataKind === 'object' ? dataKind.size : dataKind,
            resolution,
            kind,
          })
        });
    });

  return tasks
    .filter(it => 'size' in it && ('resolution' in it || 'kind' in it))
    .map(it => {
      if ('size' in it) {
        it.size = parseSize(it.size);
      }

      it.pixelRatio = it.pixelRatio.map(it => Math.round(it * 10) / 10);

      return it;
    });
};




function parseSize(sizeStr) {
  const size = {};

  if (typeof sizeStr === 'number') {
    return { width: sizeStr};
  }

  const split = sizeStr.trim().split(/\s+/);

  if (split[0]) {
    size.width = split[0] === 'null' ? null : parseInt(split[0], 10);
  }

  if (split[1]) {
    size.height = parseInt(split[1], 10);
  }

  return size;
}




/**
 * @param defaults
 * @returns {{}}
 */
function makeDefaults(defaults = {}) {
  const defaultQuality = 'quality' in defaults ? defaults['quality'] : DEFAULT_QUALITY;
  const defaultPixelRatio = 'pixelRatio' in defaults ? defaults['pixelRatio']  :DEFAULT_PIXEL_RATIO;

  return {
    ...KINDS.reduce((acc, kind) => {
      const data = defaults[kind];

      acc[kind] = {
        quality: data && 'quality' in data ? data.quality : defaultQuality,
        pixelRatio: data && 'pixelRatio' in data ? data.pixelRatio : defaultPixelRatio,
      };

      if (data && 'size' in data) {
        acc[kind].size = data.size;
      }

      return acc;
    }, {}),
  };
}

