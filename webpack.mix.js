const mix = require('laravel-mix');
const src = 'src';
const dst = 'public';

console.log(__dirname);

mix.js(`${src}/assets/js/**/*.js`, `${dst}/assets/js`)
  .sass(`${src}/assets/sass/style.scss`, `${dst}/assets/css`).options({
    autoprefixer: {
      options: {
        browsers: [
          'last 2 versions'
        ]
      }
    }
  })
  .copyDirectory(`${src}/assets/images`, `${dst}/assets/images`);

mix.browserSync({
  server: {
    baseDir: dst,
    index: 'index.html'
  },
  port: 8080,
  proxy: false,
  files: `${dst}/**/*`
});

if (!mix.inProduction()) {
  mix.sourceMaps()
}