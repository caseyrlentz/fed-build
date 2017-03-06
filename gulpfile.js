var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var src = 'scss';
var hybrisDest = '../hybris/bin/aramark/arsmvcstore/web/webroot/style/ars';
var webserverDest = '/Library/WebServer/Documents/style/ars';
var devUrl = 'YOUR LOCAL URL';

gulp.task('hybrisCSS', function(){
    return buildCSS(src + '/**/*.scss', hybrisDest);
});

gulp.task('webserverCSS', function(){
    return buildCSS(src + '/**/*.scss', webserverDest);
})

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
});

function buildCSS(src, dest){
    return gulp.src(src)
        .pipe(sass())
        .pipe(gulp.dest(dest));
}