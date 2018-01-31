var gulp = require('gulp');
var bower = require('gulp-bower');

// 自动分配手写类库引入
gulp.task('bower', function() {
    gulp.src('./node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./public/js/db/'));
});