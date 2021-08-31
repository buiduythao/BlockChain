var gulp = require("gulp");
var sass = require("gulp-sass")(require('sass'));
var rename = require("gulp-rename");

function css() {
    return gulp.src('scss/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename(function (path) {
            path.basename = "style";
            path.extname = ".min.css";
        }))
        .pipe(gulp.dest('css/'));
}

function watch() {
    css();
    gulp.watch('scss/main.scss', css);
}

gulp.task('default', watch);


