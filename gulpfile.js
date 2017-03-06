var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var src = 'scss';
var jsSrc = 'js';
var jsHybristDest = '../hybris/bin/aramark/arsmvcstore/web/webroot/script';
var jsWebServerDest = '/Library/WebServer/Documents/script'
var hybrisDest = '../hybris/bin/aramark/arsmvcstore/web/webroot/style/ars';
var webserverDest = '/Library/WebServer/Documents/style/ars';
var devUrl = 'MY LOCAL DEV URL';

gulp.task('hybrisCSS', function(){
    return buildCSS(src + '/**/*.scss', hybrisDest);
});

gulp.task('webserverCSS', function(){
    return buildCSS(src + '/**/*.scss', webserverDest);
});

gulp.task('jsBuildWebServer', function() {
    return buildJS(jsSrc + '/**/*.js', jsWebServerDest);
});

gulp.task('jsBuildHyberist', function() {
    return buildJS(jsSrc + '/**/*.js', jsHybristDest);
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: devUrl
    });
});

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('watch', ['browser-sync'],function() {
    gulp.watch(src + '/**/*.scss',['hybrisCSS','webserverCSS','reload']);
    gulp.watch(jsSrc + '/**/*.js',['jsBuildHyberist','jsBuildWebServer','reload']);
});

function buildCSS(src, dest){
    return gulp.src(src)
        .pipe(sass())
        .pipe(gulp.dest(dest));
}

function buildJS(src, dest) {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
}