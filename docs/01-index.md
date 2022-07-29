---
title: College Design Language System
label: Welcome
status: published
---

The College DLS is our effort to realign all college websites with a standard pattern library and design system to provide a core user experience for all audiences across all types of screens and browsers. 

## How To Use This Pattern Library

Implementation of this pattern library in your existing systems will depend highly on the needs of your project and your current environment.  [Academic Strategic Communications](https://provost.utsa.edu/communications) will be working with each college in an implementation with approved University content management systems (primarily Cascade CMS at the start).

- Download this project or clone via git and use the ```npm run build``` to build any assets.  The main branch of this repository will always feature the current build that can be used in production sites.

### Getting started

The College DLS attempts to provide a design system following best practices for atomic web design.  As such, the project is broken up into three main sections.  You don't need to understand all of the following concepts to install/use the design system, but you will need to know them to build with it:

- [01-Visual Styling](/college-dls/components/detail/color.html):  This contains our basic design system tokens and base styles including but not limited to: color, spacing, typography, anchor links, buttons.  These form the building blocks of the design system.

- [02-Components](/college-dls/components/detail/form--default.html):  Smaller components that are used to build the larger Section Components (see next item).  These are and consistent self contained blocks of HTML and corresponding CSS which are used to create smaller building blocks used by larger components.

- [03-Section Components](/college-dls/components/detail/accordion.html): Section level components intended to be used to build pages.  Start here if you are looking to customize your own page design.

- [04-Reference Pages](/college-dls/components/detail/college-home-page.html): Our reference pages contain example pages built using section components (full-width containers) from [03-Section Components](/college-dls/components/detail/accordion.html).  This work was initially delivered by our Pattern Library vendor (Simpson Scarborough), a copy of their original deliverables [copy of their original deliverables](/college-dls/college-dls/reference/toc.html) is also available.

If you have any questions during, before and/or after getting started, please reach out via our [issues](https://github.com/utsa-asc/college-dls/issues) or by email at [vpaacomms@utsa.edu](mailto:vpaacomms@utsa.edu?subject=College+DLS+Support).

## What you need

You will need to use the following tools to get started working with this repository directly:

- [Node (at least version 16 LTS)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com)
- SASS (use the [latest sass package from npm](https://www.npmjs.com/package/sass))

## Building a release distribution for use on your own site

If you are looking to build pages directly using the new DLS, you can build the same files we build and install in our implementation projects by utilizing the ```npm run build``` command.  More information on utilizing this repo can be found on the [Contributing](/college-dls/docs/contributing.html) page.

College DLS utilizes two third party services that are restricted to *.utsa.edu domains:

- [FontAwesome](https://fontawesome.com) (for icons)
- [Adobe Fonts](https://fonts.adobe.com) (for UTSA branding font faces)

If you need to utilize the DLS on a non *.utsa.edu website, please contact us by submitting a ticket request to [Academic Strategic Communications](https://provost.utsa.edu/communications).

## Other tools used to build the College DLS (Credits)

The College DLS was built with [Bootstrap v5](https://getbootstrap.com) and [Fractal](https://fractal.build).  Initial design work and implementation was completed by [Simpson Scarborough](https://www.simpsonscarborough.com).  The following dependencies are also used heavily in the production of this design system:

* [Bootstrap (v5.1.3)](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
* [Fractal (v1.5.11)](https://fractal.build)
* [Gulp (v4.0.2)](https://gulpjs.com)
* [BrowserSync](https://browsersync.io)
* [SASS (v1.49.9)](https://www.npmjs.com/package/sass)
* [JQuery (v3.6.0)](https://jquery.com)
* [Select2 (v4.1.0-rc-0)](https://github.com/select2/select2)
