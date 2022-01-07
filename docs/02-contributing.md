---
title: Contributing
label: Contributing
status: published
---

Members of the UTSA web development community are welcome to submit Pull Requests and create Issues via github.  You are also welcome to fork and request merges for improvements.

It's highly recommended to reach out to [Academic Strategic Communications](https://provost.utsa.edu/communications) before begining any big chunks of work or contributions.  Please feel free to also reach out via our [College Web Team Site](https://utsacloud.sharepoint.com/sites/TEAM-CollegeWeb) if you are a part of a college at UTSA or would like to play a bigger role in our college web site implementation.
## Installing in your environment

After cloning the repository and having Node.js installed (more info available on the [Welcome page](index.html)), you only need to do the following to get started:

``` npm install ```

This command will install all required dependencies, we use npm to manage all our dependencies for the DLS as well as any built assets, gulp is used as a task runner for running a local development server and all build pipeline tasks.  All relevant gulp tasks can be accessed from the npm run command:

``` npm run start ```

This will start the fractal server and give you a [local server](http://localhost:3000) hosting the College DLS cloned on your machine.

``` npm run build ```

This will build all the assets for the [College DLS website](https://utsa-asc.github.io/college-dls/) and place them in the ```dist``` folder in your cloned repository.  This includes packaged css and js files for your use in your own page prototyping and mock-ups.

### How the DLS is built

We depend on [Fractal](https://fractal.build) for the underlying design system framework.  Specifically each component is composed of the following files:

#### __component_name__ Folder ####

All files pertaining to a component are placed in a named folder using the components name (spaces seperated by hyphens '-').  An additional two digit prefix is used to control ordering in the navigation menu.  For example: ```01-visual-styling``` or ```03-button```.  Inside each component folder are at least four files:

* __component_name__.config.json: a configuration file in JSON format for your component
* __component_name__.hbs: a template for your component in the handlebars format
* __component_name__.readme.md: a markdown file for documentation related to your component
* __component_name__.scss: a sass file for all your relevant css code for your component

For additional information on this folder and file structure, please refer to the [Fractal Documentation](https://fractal.build/guide/components/) on Components.

## Creating a Pull Request

After planning a chunk of work with Academic Strategic Communications, it's best to create a branch for your work.  We utilize [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) for a lightweight, branch-based workflow.

Please use the ```feature``` prefix on your branch for any new items, ```sprint-n``` for any branches that are put on our project-roadmap after getting assigned a sprint number (n).  ```bug``` or ```hotfix``` prefix for any small branch aimed at a small or immediate fix.

Examples of good branch names:

* feature-augmenting-fractal-config-settings
* sprint-01-news-group
* sprint-03-reorg-visual-styling
* hotfix-a11y-action-buttons

Work contained in a PR should be restricted to a single component, however, for larger components built upon smaller atoms, it may be acceptable that a PR contains changes to more than one component (i.e. news group, news card, content card).

After completing a chunk of work, please do open an issue via github referencing any sprint or feature that's already been discussed with Academic Strategic Communications.  After submitting your PR with reference to this issue, our team will review and may recommend additional changes before merging with our code base.
## States

When initially considering items for addition to the DLS, there are different states a component may take on to show it's implementation status:

* __Prototype__:  Prototypes are proofs of concept and may still be in a design phase (subject to major changes).
* __WIP__: Work in progress, these are components that have passed on from prototyping, no more major design changes should happen but smaller development/semantic markup changes may be required.  Also, contextual information may be added for further testing.
* __Ready__: All design and development work has been completed.  Feel free to use this component in any page mock-ups.  Components must be in the ready state before being merged into our main branch for inclusion in our build files for work being done in our content management system.
* __Exported__: Components that have started being used in our implemented sites with the university content management system are marked as __Exported__.  These should be readily available via our release packages and in our project sites or if you build the project locally from the main branch.

## Roadmap

The initial design of the DLS was handled by [Simpson Scarborough](https://www.simpsonscarborough.com), we aim to have our initial base set of components completed to the __Exported__ state by the beginning of Spring 2022.  This also includes the initial set of [Example Pages](/components/detail/college-home-page).

### Initial Timeline (To Be Updated)

* Spring 2022: Implementation of Simpson Scarborough deliverables
* Spring 2022: College web site implementation for CEID
* Spring/Summer 2022: College web site implementation for HCAP
* Summer/Fall 2022: College website implementation for COS/COLFA begins


