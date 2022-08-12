import { defineConfig } from 'dumi';

let base: any = '/my-cli';
let publicPath: any = '/my-cli/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}
export default defineConfig({
  title: 'Happy UI',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  base,
  publicPath,
});
