const gulp = require('gulp')
	, browsersync = require('browser-sync').create()
	, path = require('path')
	, webpack = require('webpack-stream')
	, sass = require('gulp-sass')
	, autoprefixer = require('gulp-autoprefixer')
	, jshint = require('gulp-jshint')
	, jshintStylish = require('jshint-stylish')
	, sourcemaps = require('gulp-sourcemaps')
	, scsslint = require('gulp-scss-lint')


var files = {
	'src': {
		'styles': './src/sass'
	},
	'dest': {
		'styles': './build/styles'
	}
};


gulp.task('sass', function() {
	console.info('compiling sass');
	return gulp.src(files.src.styles + '/app.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'Explorer 9']
		}))
		.pipe(sass())
		.pipe(gulp.dest(files.dest.styles))
		.pipe(browsersync.reload({stream: true}));

});

gulp.task('watch', function(){
	gulp.watch(files.src.styles		+ '/**/*.scss', ['sass']);
});