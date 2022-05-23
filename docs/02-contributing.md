---
title: Contributing
label: Contributing
status: published
---

Members of the UTSA web development community are welcome to submit Pull Requests and create Issues via github.  You are also welcome to fork and request merges for improvements.

It's highly recommended to reach out to [Academic Strategic Communications](https://provost.utsa.edu/communications) before beginning any big chunks of work or contributions.  Please feel free to also reach out via our [College Web Team Site](https://utsacloud.sharepoint.com/sites/TEAM-CollegeWeb) if you are a part of a college at UTSA or would like to play a bigger role in our college web site implementation.
## Installing in your environment

After cloning the repository and having Node.js installed (more info available on the [Welcome page](index.html)), you only need to do the following to get started:

``` npm install ```

This command will install all required dependencies, we use npm to manage all our dependencies for the DLS as well as any built assets, gulp is used as a task runner for running a local development server and all build pipeline tasks.  All relevant gulp tasks can be accessed from the npm run command:

``` npm run start ```

This will start the fractal server and give you a [local server](http://localhost:3000) hosting the College DLS cloned on your machine.

``` npm run build ```

This will build all the assets for the [College DLS website](https://utsa-asc.github.io/college-dls/) and place them in the ```dist``` folder in your cloned repository.  This includes packaged css (dist/college-dls/css/site.css) and js (dist/college-dls/js/college-dls.min.js) files for your use in your own page prototyping and mock-ups.  Media assets that should be used from site to site are saved in the utsa folder (dist/college-dls/utsa) and media assets that usually change from site to site are stored in the college folder (dist/college-dls/college).

### How the DLS is built

We depend on [Fractal](https://fractal.build) for the underlying design system framework.  Specifically each component is composed of the following files:

#### __component-name__ Folder ####

All files pertaining to a component are placed in a named folder using the components name (use hyphens instead of spaces '-').  An additional two digit prefix is used to control ordering in the navigation menu.  For example: ```01-visual-styling``` or ```03-button```.  Inside each component folder are at least four files:

* __component-name__.config.json: a configuration file in JSON format for your component
* __component-name__.hbs: a template for your component in the handlebars format
* __component-name__.readme.md: a markdown file for documentation related to your component
* __component-name__.scss: a sass file for all your relevant css code for your component

For additional information on this folder and file structure, please refer to the [Fractal Documentation](https://fractal.build/guide/components/) on Components.

#### Conventions for components and variants ####

If a new component has multiple variants, the first variant should always be called "Default".  Do not reuse the component name in other variant labels.

For color variations, the color in the variant name should always be descriptive of the background color of the component.  Order of color variants should always try and follow the ordering:  (Default) white, grey, blue, orange (for color variants that exist).  

With this precedence order, if two variants exist with grey and orange background colors, the default variant will be the grey color and second variant will be the orange color.  Components are not required to support multiple color variants, but contributions may be asked to provide enough color variations for a component so that it can be used in different contexts and page designs.

## Creating a Pull Request

After planning a chunk of work with Academic Strategic Communications, it's best to create a branch for your work.  We utilize [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow) for a lightweight, branch-based workflow.

Please use the ```feature``` prefix on your branch for any new items, ```sprint-n``` for any branches that are put on our project-roadmap after getting assigned a sprint number (n).  ```bug``` or ```hotfix``` prefix for any small branch aimed at a small or immediate fix.

Examples of good branch names:

* feature-augmenting-fractal-config-settings
* sprint-01-news-group
* sprint-03-reorg-visual-styling
* hotfix-a11y-action-buttons

Work contained in a PR should be restricted to a single component, however, for larger components built upon smaller components, it may be acceptable that a PR contains changes to more than one component (i.e. news group, news card, content card).

When submitting a pull request, please make sure to reference your issue or sprint (almost all sprint items will have a corresponding issue), this will ensure any communication or previous conversation is referenced for easy follow up.  Academic Strategic Communications staff will review all PRs, but please bear in mind, there may be a delay in review and subsequent merge.  Change may be requested or directly made to your PR by ASC staff.  If a PR becomes too stale or too far behind, your PR may be closed or you may be asked to resubmit after rebasing your changes to the current main branch.

## States

When initially considering items for addition to the DLS, there are different states a component may take on to show it's implementation status:

* __Prototype__:  Prototypes are proofs of concept and may still be in a design phase (subject to major changes).
* __WIP__: Work in progress, these are components that have passed on from prototyping, no more major design changes should happen but smaller development/semantic markup changes may be required.  Also, contextual information may be added for further testing.  In our initial migration of components from delivery from our design vendor into Fractal, all migrated components will be in this WIP state.  As implementation into Cascade is happening in parallel, these initial components may be __Ready__ and __Exported__ into working Cascade templates while still in the WIP state.
* __Ready__: All design and development work has been completed.  Feel free to use this component in any page mock-ups.  Components must be in the ready state before being merged into our main branch for inclusion in our build files for work being done in our content management system (with the noted exception stated above for component initially delivered by our design vendor).
* __Exported__: Components that have started being used in our implemented sites with the university content management system are marked as __Exported__.  These should be readily available via our release packages and in our project sites or if you build the project locally from the main branch.

## Roadmap

The initial design and [reference implementation](/college-dls/college-dls/reference/toc.html) of the DLS was handled by [Simpson Scarborough](https://www.simpsonscarborough.com), we aim to have our initial base set of components completed to the __WIP__ state by the beginning of Spring 2022.  This also includes the initial set of [Example Pages](/college-dls/components/detail/college-home-page.html).  These initial components may be in the __WIP__ state until we are able to devote enough time to refactor CSS into SASS, this should not delay the development of our Cascade templates.
### Initial Timeline (To Be Updated)

* Spring 2022: Implementation of Simpson Scarborough deliverables
* Spring 2022: Development of an initial Cascade Prototype Site based on the delivered Reference Pages
* Spring 2022: College web site implementation for CEID
* Spring/Summer 2022: College web site implementation for HCAP
* Summer/Fall 2022: College website implementation for COS/COLFA begins
