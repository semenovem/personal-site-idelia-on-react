import {getCodeWinSize, getSmaller, WinSize} from "ctx/WinSize";

import { photos } from './importPhotos';

interface Result {
  url: string;
  width: number;
  height: number;
}

/**
 * @param id
 * @param winSize
 * @param kind
 */
export function getPhotoById(id: number, winSize: WinSize, kind: string): Result {
  const data = photos.find((it: any) => it.id === id) as any;

  return getPhoto(data, winSize, kind);
}


/**
 * @param data
 * @param winSize
 * @param kind
 */
export function getPhoto(data: any, winSize: WinSize, kind: string): Result {
  let w: WinSize | null = winSize;
  let codeWinSize: string;

  while(w !== null) {
    codeWinSize = getCodeWinSize(w).toLowerCase();

    if (data[codeWinSize] && data[codeWinSize][kind]) {
      const d = data[codeWinSize][kind];

      return {
        url: d.url,
        width: d.width,
        height: d.height,
      };
    }
    w = getSmaller(w);
  }

  return {
    url: '',
    width: 100,
    height: 100,
  };
}

export function getPrevId(id: number): number | null {
  let i: number;
  let next: number | null = null;

  for(i = 0; i < photos.length; i++) {
    if (photos[i].id === id) {
      break;
    }

    next = photos[i].id;
  }

  return next;
}


export function getNextId(id: number): number | null {
  let i: number;
  let prev: number | null = null;

  for(i = photos.length - 1; i >= 0; i--) {
    if (photos[i].id === id) {
      break;
    }

    prev = photos[i].id;
  }

  return prev;
}
