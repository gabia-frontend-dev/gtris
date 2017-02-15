'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

// paths
var DIR = {
	MAP: 'map'
};

/* variables */
var paths = {
	src: {
		scss: 'app/src/scss/**/*.scss',
		js: 'app/src/js/**/*.js',
		js_util: 'app/src/js/util/*.js',
		js_ui: 'app/src/js/ui/*.js',
		js_tweenmax: 'app/src/js/greensock/*.js'
	},
	dist: {
		css: 'app/dist/css/',
		js: 'app/dist/js/',
	}
}

// task
gulp.task('lint-js', function() {
	gulp.src( [paths.src.js_util, paths.src.js_ui] )
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'))
	.pipe(jshint.reporter('fail'));
});

gulp.task('sass', function () {
	return gulp.src( paths.src.scss )
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(sourcemaps.write(DIR.MAP))
	.pipe(gulp.dest( paths.dist.css ));
});

gulp.task('js', ['lint-js'], function() {
	gulp.src( [paths.src.js_util, paths.src.js_ui, paths.src.js_tweenmax] )
	.pipe(concat('gtris.js'))
	.pipe(uglify())
	.pipe(gulp.dest( paths.dist.js ));
});

// watch
gulp.task('watch', function () {
	gulp.watch( paths.src.scss, ['sass']);
	gulp.watch( paths.src.js, ['js']);
});

gulp.task('default', ['sass','js','watch']);