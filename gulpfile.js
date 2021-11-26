const { src, dest, watch, series, parallel, lastRun } = require('gulp');

const del      = require('del');
const autoprefixer = require('autoprefixer');
const cssnano  = require('cssnano');
const plumber  = require('gulp-plumber');
const gulpif   = require('gulp-if');
const sassGlob = require('gulp-sass-glob');
const postcss  = require('gulp-postcss');
const imagemin = require('gulp-imagemin');
const rename   = require('gulp-rename');
const sass     = require('gulp-sass')(require('sass'));

// FRACTAL
// import local Fractal config and console
const fractal = require('./fractal.config.js');
const logger = fractal.cli.console;

/* 
const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const isDev = !isProd && !isTest;
 */

/* 
We have two goals currently:

1. generate & update (public/stylesheets/site.css) whenever a component scss file is updated 
    so we can reference it within (components/_preview.hbs) for a real-time preview.
2. start fractal server and let it do its thing (watch, livereload, build)
*/

// copy generated.scss with dynamic imports for
// all component sass files into public/css   so
// we can use it in /components/_preview.hbs
function styles() {
	return src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass.sync({ outputStyle: 'expanded', precision: 10 }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
	// .pipe(postcss([cssnano({safe: true, autoprefixer: false})]))
	// .pipe(gulpif(isProd, postcss([cssnano({safe: true, autoprefixer: false})])))
    .pipe(rename('site.css'))
    .pipe(dest('public/stylesheets', { sourcemaps: true, }));
}

function images() {
	return src('public/images/**/*', { since: lastRun(images) })
    .pipe(imagemin())
    .pipe(dest('dist/images'));
}

function fonts() {
	return src('public/fonts/**/*.{eot,svg,ttf,woff,woff2}')
    .pipe(dest('dist/fonts'));
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

async function startFractal() {
	// rebuild site.css onSave
    watch('components/**/*.scss', styles);
	//watch('public/js/**/*.js', scripts);

	const server = fractal.web.server({ sync: true });
		  server.on('error', err => logger.error(err.message));

	await server.start();
	logger.success(`Fractal server is now running at ${server.url}`);
}

exports.styles = series(styles); // `npm run styles` OR `gulp styles`
exports.default = series(clean, styles, startFractal); // `npm run start` OR `gulp`