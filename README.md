# UTSA College Web Pattern Library

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

## App structure and Setup

- components: this is where component templates are stored
- dist: this is where fractal build outputs
- docs: this is where component documentation is stored
- global: this is where the magic happens (sass source files)
- public: assets folder
- fractal.config.js: fractal configuration
- gulpfile.js: gulp sass tasks for watch, sass compiling
- README.md: this files


## Updating dependencies

Web dependencies are managed directly by npm, so updating a dependency entails updating the npm dependency via npm or package.json.
