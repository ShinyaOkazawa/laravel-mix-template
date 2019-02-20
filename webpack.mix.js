const mix = require('laravel-mix');
const src = 'src';
const dst = 'public';
mix.sass(`${src}/assets/sass/style.scss`, `${dst}/assets/css`)
  .js(`${src}/assets/js/**/*.js`, `${dst}/assets/js`)
  .sourceMaps();