function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_MAIN = '/';

export const PATH_MAIN = {
  root: ROOTS_MAIN,
  shopping: path(ROOTS_MAIN, 'shop'),
};
