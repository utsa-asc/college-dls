'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

// create a new instance with custom config options
const ASCTheme = mandelbrot({
    skin: {
        name: 'blue',
        accent: '#0C2340',
        complement: '#D3430D',
        links: '#F15A22'
    },
    favicon: 'favicon.ico'
});

/*
 * Give your project a title.
 */
fractal.set('project.title', 'College Design Language System');
fractal.set('project.verison', 'v0.1');
fractal.set('project.author', 'Academic Strategic Communications <vpaacomms@utsa.edu>');
// tell Fractal to use the configured theme by default
fractal.web.theme(ASCTheme);
/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell the Fractal where to output the build files.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'dist'));

/* change the "assets" tab to the present file type */
fractal.components.set('resources', {
    scss: {
        label: 'SCSS',
        match: ['**/*.scss']
    },
    css: {
        label: 'CSS',
        match: ['**/*.css']
    },
    other: {
        label: 'Other Assets',
        match: ['**/*', '!**/*.scss', '!**.css']
    }
});

// UTSA Custom CLI Commands

// LIST COMPONENTS
// USAGE: fractal list-components
fractal.cli.command('list-components', function (args, done) {
    const app = this.fractal;
    const sourcemap = {};
    for (let item of app.components.flatten()) {
        sourcemap[item.handle] = {path: item.path, ctx: item.context, title: item.title}
    }
    console.log(JSON.stringify(sourcemap));
    done();
    }, {description: "List components"}
);

// CREATE COMPONENT
// USAGE: fractal create-comp yourCompName
function createComp (comp) {
    // create new component directory inside components/
    // then, create starter files

    const createFile = (compPath, compContent) => {
        try {
            fs.writeFileSync(compPath, compContent);
            console.log('SUCCESS: File created')
        }
        catch (error) {
            console.error('ERROR: ', error);
        }
    }

    const componentPath = process.cwd() + '/components/' + comp;

    try { // do not create, if it already exists
        if (!fs.existsSync(componentPath)) {
            fs.mkdirSync(componentPath, { recursive: true });
            console.log('SUCCESS: Component directory created.');
            // If parent directory is created, now create the files.
            const hbsFile = componentPath + '/' + comp + '.hbs';
            const jsonFile = componentPath + '/' + comp + '.json';
            const cssFile = componentPath + '/' + comp + '.css';
            createFile(hbsFile, 'blank');
            createFile(jsonFile, '{"title": "'+ comp +' Component"}');
            createFile(cssFile, 'blank');
        } 
        else {
            console.error('ERROR: That component directory already EXISTS!')
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}

fractal.cli.command("create-comp <req> [opt]", function (args, done) {
	createComp(args.req);
	done();
}, {description: "Create a new component"});
