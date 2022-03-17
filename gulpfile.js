const { src, dest, watch, series, parallel, lastRun } = require('gulp');

const del      = require('del');
const autoprefixer = require('autoprefixer');
const cssnano  = require('cssnano');
const gulpif   = require('gulp-if');
const sassGlob = require('gulp-sass-glob');
const postcss  = require('gulp-postcss');
const rename   = require('gulp-rename');
const sass     = require('gulp-sass')(require('sass'));
const useref   = require('gulp-useref');
const uglify   = require('gulp-uglify');
const gulpIf   = require('gulp-if');

// FRACTAL: import local Fractal config and console
const fractal = require('./fractal.config.js');
const logger = fractal.cli.console;

/* 
We have two goals currently:

1. generate & update (public/stylesheets/site.css) whenever a component scss file is updated 
    so we can reference it within (components/_preview.hbs) for a real-time preview.
2. start fractal server and let it do its thing (watch, livereload, build)
*/

// copy scss with dynamic imports for all 
// component sass files into public/css   so
// we can use it in /components/_preview.hbs
function styles() {
	return src('src/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass.sync({ outputStyle: 'expanded', precision: 10 }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
	// .pipe(postcss([cssnano({safe: true, autoprefixer: false})]))
	// .pipe(gulpif(isProd, postcss([cssnano({safe: true, autoprefixer: false})])))
    .pipe(rename('site.css'))
    .pipe(dest('public/css', { sourcemaps: true, }));
}

function stylesMin() {
	return src('src/scss/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass.sync({ outputStyle: 'expanded', precision: 10 }).on('error', sass.logError))
	.pipe(postcss([cssnano({safe: true, autoprefixer: false})]))
    .pipe(rename('site.css'))
    .pipe(dest('public/css', { sourcemaps: true, }));
}

// Optimize images before Fractal grabs them for its build
function images() {
	return src('public/utsa/images/**/*', { since: lastRun(images) })
    // .pipe(imagemin())
    .pipe(dest('public/utsa/images'));
}

// Optimize fonts before Fractal grabs them for its build
// Task: Need to find or create plugin to optimize fonts -- IF NECESSARY
//       Otherwise, we can remove this task as Fractal grabs fonts during build.
function fonts() {
	return src('public/font/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(dest('public/font'));
}

// We really don't need clean() due to ephemeral philosophy of build systems.
// Build assets are meant to be temporary, so 'overwrite' is default
// - Fractal deletes dist/ on start()
// - Gulp overwrites /public/stylesheets/site.css
// - We can add dist/ etc.. to gitignore if we don't want to commit them
// - If piping or cache becomes an issue, then clean() becomes useful.
function clean() {
	return del(['dist'])
}

function scripts() {
	return src(['src/js/vendor-load.html'])
	  .pipe(useref())
	  .pipe(dest('public/js'))
}

function scriptsMin() {
	return src(['src/js/vendor-load.html'])
	  .pipe(useref())
	  .pipe(gulpIf('*.js', uglify()))
//   .pipe(uglify())
	  .pipe(dest('public/js'))
}

async function startFractal() {
	// rebuild assets onSave
    watch('components/**/*.scss', styles);
	watch('src/scss/**/*', styles);
    watch('public/utsa/images/**/*', images);
    watch('public/college/images/**/*', images);
	watch('src/js/*', scripts);

	const server = fractal.web.server({ sync: true });
		  server.on('error', err => logger.error(err.message));

	await server.start();
	logger.success(`Fractal server is now running at ${server.url}`);
}

async function buildFractal() {
	const builder = fractal.web.builder();
	builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
	builder.on('error', err => logger.error(err.message));
	return builder.build().then(() => {
		logger.success('Fractal build completed!');
	});
}

exports.styles = series(styles); // `npm run styles` OR `gulp styles`
exports.images = series(images); // `npm run images` OR `gulp images`
exports.scripts = series(clean, scripts); // `npm run javascript` OR `gulp javascript`
exports.build = series(clean, stylesMin, scriptsMin, buildFractal);
exports.default = series(clean, styles, scripts, startFractal); // `npm run start` OR `gulp`
