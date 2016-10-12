var gulp = require('gulp'),
 	del = require('del');



 // Copy files and folder with same tree structure to the destination folder and watch changes in files
 
// clean everything end with .ts under dist folder
gulp.task('clean',function(){
	return del('dist/**/*.ts');
});

// first run ['watch_chnage'] task then run copy task
// ['copy'] task copying files and folders to the destination folder with same structure
//['base':'.'] this tells gulp to copy with same structure to its destination 

gulp.task('copy',['watch_change'],function(){
	return gulp.src('app/**/*.ts',{'base':'.'})
	.pipe(gulp.dest('dist'))
});


// first run clean task described earlier then [watch-change] task
// ['watch_change'] reflect  changes in files that ends with .ts

gulp.task('watch_change',['clean'] ,function(){
	return gulp.src('app/**/*.ts');


});

// contineous watch for file changes
gulp.task('watch',function(){
	gulp.watch('app/**/*.ts',['watch_change']);
	gulp.watch('app/**/*.ts',['copy']);

});

// default task to run
gulp.task('default',['watch','copy']);