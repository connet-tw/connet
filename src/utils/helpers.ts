export const isRoot = (s: string): boolean=> {
  return ['/', '/en', '/en/', '/es', '/es/', '/zh', '/zh/'].indexOf(s) > -1;
}
