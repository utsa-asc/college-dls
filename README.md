# UTSA College Web Pattern Library

## Features
- built with [fractal.build](https://fractal.build) and gulp
  - cssnano (coming soon)
  - js minify (coming soon)

## Setup
```
  $ npm install
  # you may also need to install fractal and gulp globally
  $ npm install -g @frctl/fractal
  $ npm install -g gulp
```

### For live prototyping (default task)
```
  $ gulp watch
  $ fractal start --sync
  # live prototype viewable at: http://localhost:3000
```

### For building assets
```
    $ fratcal build
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
