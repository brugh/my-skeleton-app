
import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const scrollY = writable(0);
export const sectionHeight = writable(0);

const _H = (browser && window.innerHeight || 0);
const _innerHeight = writable(_H);
export const innerHeight = {
  subscribe: _innerHeight.subscribe,
  set: (height: number) => {
    let _h = height;
    if (globalThis.window) _h = height -
      (document.getElementById('page-header')?.offsetHeight || 0) -
      (document.getElementById('page-footer')?.offsetHeight || 0);
    _innerHeight.set(_h);
  }
}

// const { subscribe } = writable(0);
// const set = (height: number) => {
//   const _h = height -
//     (document.getElementById('page-header')?.offsetHeight || 0) -
//     (document.getElementById('page-footer')?.offsetHeight || 0);
//   console.log(_h);
//   return _h;
// }

// return { subscribe, set };
// }
// export const innerHeight = createInnerHeight();