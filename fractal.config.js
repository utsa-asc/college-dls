'use strict';

/*
* Require the path module
*/
const path = require('path');
const fs = require('fs');

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
        complement: '#F15A22',
        links: '#D3430D',
    },
    lang: "en-US",
    panels: ["notes", "html", "resources", "view"],
    nav: ['search', 'docs', 'components', 'information'],
    navigation: 'split',
    favicon: 'favicon.ico',
    styles: [
        'default',
        // for simple overrides
        '/college-dls/theme/theme.css'
    ],
    scripts: [
        'default',
        // for simple overrides
        '/college-dls/theme/theme.js'
    ],
    information: [
        {
            label: 'Version',
            value: require('./package.json').version
        },
        {
            label: 'Built on',
            value: new Date(),
            type: 'time',
            format: (value) => {
                return value.toLocaleDateString('en');
            }
        },
        {
            label: 'Project',
            value: '',
            format: (value) => {
                const homepage = require('./package.json').homepage
                const val = '<a href="' + homepage + '">github</a>';
                return val
            }
        }
    ]
});

const hbs = require('@frctl/handlebars')({
    helpers: {
        uppercase: function(str) {
            return str.toUpperCase();
        },
        each_upto: function(ary, max, options) {
            if(!ary || ary.length == 0)
                return options.inverse(this);
        
            var result = [ ];
            for(var i = 0; i < max && i < ary.length; ++i)
                result.push(options.fn(ary[i]));
            return result.join('');
        }
    }
    /* other configuration options here */
});

fractal.components.engine(hbs);

/*
 * Give your project a title.
 */
// keep title empty so we can display BG logo
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
// Define potential Statuses for documentation pages.
fractal.docs.set('statuses', {
    draft: {
        label: "Draft",
        description: "This documentation is not complete",
        color: "#FF4136"
    },
    published: {
        label: "Published",
        description: "Documentation complete",
        color: "#2ECC40"
    }
});
/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, '/public'));
fractal.web.set('static.mount', '/college-dls');
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

// Define potential Statuses for components.
fractal.components.set('statuses', {
    prototype: {
        label: "Prototype",
        description: "Do not implement",
        color: "#FF4136"
    },
    wip: {
        label: "WIP",
        description: "Work in progress. Implement with caution",
        color: "#FFDC00"
    },
    ready: {
        label: "Ready",
        description: "Ready to implement",
        color: "#2ECC40"
    },
    exported: {
        label: "Exported",
        description: "Exported to the working project",
        color: "#01FF70"
    }
});
fractal.components.set('default.status', 'prototype');

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// UTSA Custom CLI Commands
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : 
// LIST COMPONENTS
// FUTURE: add [opts] to list components by status [prototype, wip, ready, exported]
// USAGE: fractal list, fractal list clean
const list = (opt='json') => {
    if (opt == 'clean') {
        console.log('they want it clean', opt);
        for (let item of fractal.components.flatten()) {
            console.log(`Title: ${item.title} \n Path: ${item.path} \n Status: ${item.status.label} \n`);
        }
    }
    else {
        const sourcemap = {};
        for (let item of fractal.components.flatten()) {
            sourcemap[item.handle] = {path: item.path, ctx: item.context, title: item.title}
        }
        console.log(JSON.stringify(sourcemap));
    }
}
fractal.cli.command('list [opt]', (args, done) => {
    list(args.opt);
    done();
    }, {description: "List components"}
);


// ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : ~ : 
// CREATE COMPONENTS
// USAGE: fractal create yourCompName
// MAKE SURE: you are IN the directory where you want to create your component
const create = (comp) => {
    const createFile = (compPath, compContent, fileType) => {
        try {
            fs.writeFileSync(compPath, compContent);
            console.log('SUCCESS: '+ fileType +' file created');
        }
        catch (error) {
            console.error('ERROR: ', error);
        }
    }

    const componentPath = process.cwd() + '/' + comp;

    // 1st create directory structure, then create starter files
    try { 
        // Do not create the component directory if it already exists
        if (!fs.existsSync(componentPath)) {
            // If the directory was created, now create the starter files
            if (fs.mkdirSync(componentPath, { recursive: true })) {
                console.log('SUCCESS: Component directory created.');

                const compFile   = componentPath + '/' + comp; 
                const hbsFile    = compFile + '.hbs';
                const configFile = compFile + '.config.json';
                const scssFile   = compFile + '.scss';
                const notesFile  = compFile + '.readme.md';
                
                createFile(hbsFile, '{{placeholder}}', 'Handlebars');
                createFile(configFile, '{"title": "' + comp + ' Component", "context": {"placeholder": "Success"}}', 'Config');
                createFile(scssFile, '', 'Sass');
                createFile(notesFile, '# ' + comp.toUpperCase(), 'Readme');
            }
        } 
        else {
            console.error('ERROR: That component directory already EXISTS!');
        }
    } 
    catch (error) {
        console.error('Error: ', error);
    }
}

fractal.cli.command("create <req> [opt]", (args, done) => {
	create(args.req);
	done();
}, {description: "Create a new component"});
