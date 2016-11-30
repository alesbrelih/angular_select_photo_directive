const gulp = require("gulp"),
    sass = require("gulp-sass");


gulp.task("sass-debug",()=>{
    gulp.src("./sass/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./www/css"));
});