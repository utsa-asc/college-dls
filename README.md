# UTSA College Design Language System

Repository for code which generates our [Design Language System](https://utsa-asc.github.io/college-dls/) for UTSA College Websites.

## Features
- built with [fractal.build](https://fractal.build) and gulp
  - cssnano (coming soon)
  - js minify (coming soon)

## Setup
```
    $ npm install
    $ npm start
```
npm start will start a fractal instance at http://localhost:3000 (via BrowserSync) and will also watch for any file changes.  Changes to any sass files will also be monitored by gulp for recompilation and browsersync reload.

### For building assets
```
    $ npm run build
    # output will be in the dist folder
```    

### Cleaning up your folder
```
    $ npm run clean
    # the assets built in the dist folder will be removed
```

## App structure and Setup

- components: this is where component templates are stored
- dist: this is where fractal build outputs
- docs: this is where component documentation is stored
- src: this is where the magic happens (sass and js source files)
- public: assets folder
- fractal.config.js: fractal configuration
- gulpfile.js: gulp tasks for dev, build and clean
- README.md: this file


## Updating dependencies

Web dependencies are managed directly by npm, so updating a dependency entails updating the npm dependency via npm or package.json.
