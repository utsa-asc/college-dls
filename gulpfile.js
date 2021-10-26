const gulp = require('gulp');
const gulpif = require('gulp-if');
const gutil = require('gulp-util');
const plumber = require('gulp-plumber');
//const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const sassLint = require('gulp-sass-lint');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

// import local Fractal configuration settings and console object
const fractal = require('./fractal.config.js');
const logger = fractal.cli.console;

const watchOpt = {awaitWriteFinish: true};

const SASS_SRC = [
    'global/*.scss',
	'components/**/*.scss'
];

let isProduction = false;

// Fractal tasks
/*
 * Start the Fractal server
 *
 * In this example we are passing the option 'sync: true' which means that it will
 * use BrowserSync to watch for changes to the filesystem and refresh the browser automatically.
 * Obviously this is completely optional!
 *
 * This task will also log any errors to the console.
 */
gulp.task('fractal:start', function () {
	const server = fractal.web.server({
		sync: true
	});
	server.on('error', err => logger.error(err.message));
	return server.start().then(() => {
		logger.success(`Fractal server is now running at ${server.urls.sync.local}`);
	});
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */
gulp.task('fractal:build', function () {
	const builder = fractal.web.builder();
	builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
	builder.on('error', err => logger.error(err.message));
	return builder.build().then(() => {
		logger.success('Fractal build completed!');
	});
});

gulp.task('css:lint', () =>
	gulp.src(SASS_SRC)
	.pipe(plumber())
	.pipe(sassLint())
	.pipe(sassLint.format()));

gulp.task('css:process', function () {
	const postcssPipeline = [require('autoprefixer')];
	if (isProduction) {
		postcssPipeline.push(require('cssnano'));
	}
	return gulp.src(['global/import.scss'])
	.pipe(plumber())
	.pipe(gulpif(!isProduction, sourcemaps.init()))
	.pipe(sassGlob())
	.pipe(sass.sync({
		precision: 10,
		includePaths: ['./node_modules']
	})).on('error', sass.logError)
	//.pipe(postcss(postcssPipeline))
	.pipe(gulpif(!isProduction, sourcemaps.write()))
	.pipe(rename('site.css'))
	.pipe(gulp.dest('public/stylesheets'));
});

gulp.task('css:clean', function () {
	return del(['public/stylesheets']);
});

gulp.task('css:watch', function () {
	gulp.watch(SASS_SRC, watchOpt, gulp.series('css'));
});

gulp.task('css', gulp.series(gulp.parallel('css:clean', 'css:lint'), 'css:process'));

gulp.task('fonts:copy', function () {
	return gulp.src('assets/fonts/**/*')
	.pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('fonts:clean', function (done) {
	return del(['public/assets/fonts'], done);
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));

gulp.task('fonts:watch', function () {
	gulp.watch('assets/fonts/**/*', watchOpt, gulp.parallel('fonts'));
});

gulp.task('build:clean', function () {
	return del(['dist']);
});

//gulp.task('assets', gulp.series('svg', gulp.parallel('css', 'js:lint', 'js', 'fonts', 'images')));
gulp.task('assets', gulp.series(gulp.parallel('css', 'fonts')));

//gulp.task('watch', gulp.parallel('svg:watch', 'css:watch', 'js:watch', 'fonts:watch', 'images:watch'));
gulp.task('watch', gulp.parallel('css:watch', 'fonts:watch'));

gulp.task('dev', gulp.series('assets', 'fractal:start', 'watch'));

gulp.task('build', gulp.series(function (cb) {
	isProduction = true;

	cb();
}, 'assets', 'build:clean', 'fractal:build'));

gulp.task('default', gulp.series('build'));

// make sure you run fractal with "fractal start --sync" to use livereload in conjunction with this
