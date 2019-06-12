export const PATH_NAME = 'p';

interface IParamImgBg {
  [id: string]: string;
}

export function makeImgBg(param: IParamImgBg): string {
  let path: string = '';
  let key: string;
  let flag = true;
  let propsLength = 0;

  for (key in param) {
    // TODO проверить свойство, является ли оно свойством объекта

    propsLength++;

    if (flag) {
      flag = false;
      path = param[key];
      continue;
    }

    path = defCommonPath(path, param[key]);
  }

  // для одной записи нет смысла выносить общуй часть пути
  if (propsLength < 2) {
    path = '';
  }

  let result = '';

  for (key in param) {
    // TODO проверить свойство, является ли оно свойством объекта

    if (result) {
      result += ' ';
    }

    const p = path ? param[key].substr(path.length) : param[key];

    result += `${key}:${p}`;
  }

  if (path) {
    result += ` ${PATH_NAME}:${path}`
  }

  return result;
}

/**
 * Общая часть строк
 *
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function defCommonPath (a: string, b: string): string {
  const l = Math.min(a.length, b.length);
  let i: number;

  for (i = 0; i < l; i++) {
    if (a[i] === b[i]) {
      continue;
    }

    break;
  }

  return a.substr(0, i);
}
