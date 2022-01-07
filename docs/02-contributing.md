---
title: Contributing
label: Contributing
status: draft
---
## Contributing

Members of the UTSA web development community are welcome to submit Pull Requests and create Issues via github.  You are also welcome to fork and request merges for improvements.

It's highly recommended to reach out to [Academic Strategic Communications](https://provost.utsa.edu/communications) before begining any big chunks of work or contributions.  Please feel free to also reach out via out [College Web Team Site](https://utsacloud.sharepoint.com/sites/TEAM-CollegeWeb) if you are a part of a College at UTSA.
## Installing in your environment

After cloning the repository and having Node.js installed (more info available on the [Welcome page](index.html)), you only need to do the following to get started:

``` npm install ```

to install all required dependencies, we use npm to manage all our dependencies, and gulp for out local server and build pipeline.  All relevant gulp tasks can be access from the npm run command:

``` npm run start ```

This will start the fractal server and give you a [local server](http://localhost:3000) hosting the code cloned on your machine.

### How the DLS is built

We depend on [Fractal](https://fractal.build) for the underlying DLS framework.  Specifically each component is composed of the following files:

* <component_name>.config.json: a configuration file in JSON format for your component
* <component_name>.hbs: a template for your component in the handlebars format
* <component_name>.readme.md: a markdown file for documentation related to your component
* <component_name>.scss: a sass file for all your relevant css code for your component

## Creating a Pull Request

After planning a chunk of work with Academic Strategic Communications, it's best to create a branch for your work.  We utilize the standard gitflow for all work submitted to the College DLS.

Please use the ```feature``` prefix on your branch for any new items, ```sprint-n``` for any branches that are put on our roadmap project after getting assigned a sprint number (n).  ```bug``` or ```hotfix``` prefix for any small branch aimed at a small or immediate fix.

Good example of branch names:

* feature-augmenting-fractal-config-settings
* sprint-01-news-group
* sprint-03-reorg-visual-styling
* hotfix-a11y-action-buttons

Work contained in a PR should be restricted to a single component, however, for larger components built upon smaller atoms, it may be acceptable that a PR contains changes to more than one component (i.e. news group, news card, content card).

## States

When initially considering items for addition to the DLS, there are different states a component may take on to show it's implementation status:

* __Prototype__:  Prototypes are proofs of concept and may still be in a design phase (subject to major changes).
* __WIP__: Work in progress, these are components that have passed on from prototyping, no more major design changes should happen but smaller development/semantic markup changes may be required.  Also, contextual information may be added for further testing.
* __Ready__: All design and development work has been completed.  Feel free to use this component in any page mock-ups.
* __Exported__: Components that are in use in current designs and pages will be marked as Exported.

## Roadmap

The initial design of the DLS was handled by Simpson Scarborough, as such, we aim to have our initial base set of components completed to the __Exported__ state by the beginning of Spring 2022.  This also includes the initial set of [Example Pages](/components/detail/college-home-page).
