const pkgFs = require('fs');
const pkgPath = require('path');
let id = 1;

async function write(path, files) {
  const mapImports = {};
  let content = '/**\n';

  content += ' * Generated file. Not edit\n';
  content += ' */\n\n';

  for (const { sourceFilePath, filePathResized, resolution, kind, originFileName, size } of files) {
    const relative = './' + pkgPath.relative(pkgPath.dirname(path), sourceFilePath);
    const variable = convertToCamelCase('img-' + pkgPath.parse(filePathResized).name);

    content += `import ${variable} from '${relative}';\n`;

    if (originFileName in mapImports === false) {
      mapImports[originFileName] = {
        id: id++,
      }
    }

    const imp = mapImports[originFileName];

    if (resolution in imp === false) {
      imp[resolution] = {}
    }

    imp[resolution][kind] = {
      variable,
      width: size.width,
      height: size.height,
    };
  }
  content += '\n';




  // --------------------------------------------- create content
  // --------------------------------------------- create content
  // --------------------------------------------- create content
  content += 'export const photos = [';

  Object.keys(mapImports).forEach(fileName => {
    const data = mapImports[fileName];

    content += '\n  {';
    {
      content += `\n    id: ${data.id},\n`;

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(resolution => {
        content += createContentResolution(data[resolution], resolution);
      });
    }

    content += '\n  },';
  });

  content += '\n];';

  pkgFs.writeFileSync(path, content);
}


function createContentResolution(data, resolution) {
  if (!data) {
    return '';
  }

  let txt = `\n    ${resolution}: {`;

  {
    ['main', 'preview', 'blurred']
      .filter(kind => data[kind])
      .forEach(kind => {
        const d = data[kind];

        txt += `\n      ${kind}: {`;
        {
          txt += `\n        url: ${d.variable},`;
          txt += `\n        width: ${d.width},`;
          txt += `\n        height: ${d.height},`;
        }
        txt += `\n      },`;
    });
  }

  txt += '\n    },';

  return txt;
}




/**
 * 001-xs.jpg
 * 001-xs-preview-x2.jpg
 *
 * 001Xs.jpg
 * 001XsPreviewX2.jpg
 *
 * @param baseName
 */
function convertToCamelCase(baseName) {
  return baseName.replace(/-./g, (match) => match[1].toUpperCase());
}


module.exports = write;
