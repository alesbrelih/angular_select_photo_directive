const gulp = require("gulp"),
    sass = require("gulp-sass"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream");


gulp.task("sass-debug",()=>{
    gulp.src("./sass/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./www/css"));
});

gulp.task("browserify",()=>{
    return browserify("./scripts/app.js")
        .bundle()
        .pipe(source("app.b.js"))
        .pipe(gulp.dest("./www/scripts"));
});