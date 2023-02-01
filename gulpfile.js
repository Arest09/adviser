const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const include = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const del = require("del");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "build/",
    },
  });
}

function styles() {
  return src(["app/scss/style.scss"])
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 versions"],
        browsers: [
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 11",
          "iOS >= 6",
          "Opera >= 12",
          "Safari >= 6",
        ],
        grid: true,
      })
    )
    .pipe(dest("build/css"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/components/**/*.js", "!app/js/main.min.js"], scripts);
  watch(["app/images/**/*.*"], images);
  watch(["app/**/*.html"], html);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}


function images() {
  return src("app/images/**/*.*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("build/images"));
}

function cleanImage (){
  return del("build/images");
}

function scripts() {
  return src([
    "node_modules/jquery/dist/jquery.js",
    "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js",
    "node_modules/mixitup/dist/mixitup.js",
    "node_modules/ion-rangeslider/js/ion.rangeSlider.js",
    "node_modules/jquery-form-styler/dist/jquery.formstyler.js",
    "node_modules/smooth-scroll/dist/smooth-scroll.js",
    "node_modules/inputmask/dist/jquery.inputmask.js",
    "app/js/main.js","app/components/js/**/*.js"
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("build/js"));
}

function html() {
  return src(["app/*.html"]).pipe(include()).pipe(dest("build"));
}

function cleanDist() {
  return del("dist");
}


exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.html = html;
exports.browsersync = browsersync;
exports.cleanDist = cleanDist;

exports.cleanImage = cleanImage;
exports.images = images;
exports.images = series(cleanImage,images)

exports.default = parallel(styles, html,scripts,images, browsersync, watching);

exports.styles = styles;
