---
title: College Design Language System
label: Welcome
status: published
---

The College DLS is our effort to realign all college websites with a standard pattern library and design system to provide a core user experience for all audiences across all types of screens and browsers.  All audiences will have access to the same information in the same experience. 

## How To Use This Pattern Library

Implemention of this pattern library in your existing systems will depend highly on the needs of your project and your current environment.  [Academic Strategic Communications](https://provost.utsa.edu/communications) will be working with each college in an implementation with approved University content management systems (primarily Cascace CMS at the start).

- Download this project or clone via git and use the ```npm run build``` to build any assets.  The main branch of this repository will always feature the current build that can be used in production sites.

### Getting started

The College DLS attempts to provide a design system following best practices for atomic web design.  As such, the project is broken up into three main sections.  You don't need to understand all of the following concepts to install/use the design system, but you will need to know them to build with it:

- [01-Visual Styling](https://utsa-asc.github.io/college-dls/components/detail/background-colors.html):  This contains our basic design system tokens and base styles including but not limited to: color, spacing, typography, anchor links, buttons.  These form the building blocks of the design system.

- [02-Components](https://utsa-asc.github.io/college-dls/components/detail/action-card.html): Components are simple and consistent self contained blocks of HTML and corresponding CSS which are used to build out different sections of a web page.  These range in size of small content cards to full size hero carousel or larger page components (i.e.- global footer or site navigation menu).

- [03-Example Pages](https://utsa-asc.github.io/college-dls/components/detail/college-home-page.html): Our example pages contain reference site pages built using the higher order components (full-width containers) from 02-Components.

If you have any questions during, before and/or after getting started, please reach out via our GitHub issues or email to [vpaacomms@utsa.edu](mailto:vpaacomms@utsa.edu)

## What you need

We recommend using the following tools when working with this repository directly:

- Node (at least version 16 LTS)
- npm
- SASS (use the [latest sass package from npm](https://www.npmjs.com/package/sass))

## Building a release distribution for use on your own site

If you are looking to build page directly using the new DLS.  You can build the same files we build and install in our implementation project by utilizing the ```npm run build``` command.  More information on utilizing this repo can be found on the [Contributing](/docs/contributing) page.

College DLS utilizes two third party services that are restricted to *.utsa.edu domains:

- FontAwesome (for icons)
- TypeKit (for UTSA branding font faces)

If you need to utilize the DLS on a non utsa.edu, please contact us by submitting a ticket request to [Academic Strategic Communications](https://provost.utsa.edu/communications).

## Other tools used to build the College DLS (Credits)

The College DLS was built with [Bootstrap v5](https://getbootstrap.com) and [Fractal](https://fractal.build).  Initial components and design was completed by [Simpson Scarborough](https://www.simpsonscarborough.com).  The following dependencies are also used heavily in the production of this design system:

* [Bootstrap (v5.0.2)](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
* [Fractal (v1.5.11)](https://fractal.build)
* [Gulp (v4.0.2)](https://gulpjs.com)
* [SASS (v1.43.5)](https://www.npmjs.com/package/sass)
* [JQuery (v3.6.0)](https://jquery.com)
* [Select2 (v4.1.0-rc-0)](https://github.com/select2/select2)

