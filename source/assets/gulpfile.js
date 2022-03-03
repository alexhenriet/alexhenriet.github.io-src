// Must match stylesheet link in source/_layouts/app.html.twig and sublevel.html.twig
const file = 'merged-20220302-2.min.css'

const { series, src, dest } = require('gulp'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    del = require('del'),
    stripCssComments = require('gulp-strip-css-comments');;

function clean(cb) {
     return del(['./css/merged-*.min.css']);
}

function build(cb) {
    return src(['./css/normalize.min.css', './css/font-awesome.min.css', './css/main.css'])
        .pipe(concat(file))
        .pipe(cssnano())
        .pipe(stripCssComments())
        .pipe(dest('./css/'));
}

exports.build = build;
exports.clean = clean;
exports.default = series(clean, build);