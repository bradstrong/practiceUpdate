practiceUpdate
==============

Elsevier Practice Update

This repo contains all of the front end files for PracticeUpdate.

## Contributing to the project

Development for major feature additions should take place in a new branch before being merged back into master.

Tasks will be assigned to collaborators as issues.

## Project Dependencies
- [ruby](http://www.ruby-lang.org/en/)
- [compass](http://compass-style.org/)
- [Zurb Foundation](http://foundation.zurb.com/)
- [SCSS](http://sass-lang.com/)
- [mustache.js](https://github.com/janl/mustache.js)
- [json](http://www.json.org/)

Optional:

- [codekit](http://incident57.com/codekit/)

PracticeUpdate uses [Zurb Foundation](http://foundation.zurb.com/) as a [compass](http://compass-style.org/) extension. You can find documentation on how to install the foundation extension here: http://compass-style.org/

Once installed, development follows the recommended workflow for Zurb Foundation:

- app.scss contains all import rules for scss partials
- _foundation-overrides.scss contains all variables specific to the project, including Foundation variables whose values have been reassigned. Custom mixins should be placed here, as well.
- styles are divided across several partial files (_base, _layout, _module, _theme), following the patterns laid out by [SMACCS](http://smacss.com/). 
  - _base: element styles (i.e., `form{ display: block;}`)
  - _layout: Container elements that control page layout (i.e., `.page-header{ display: block;}`)
  - _module: reusable markup patters (i.e., `.page-header{ display: block;}`)
  - _state: *has not been created, but can be if necessary* used to indicate a non-default state or context. This would be appropriate for device-specific styles.
  - _theme: Mostly used for color and type styling that differs from the framework settings
- JS is placed in app.js, written predomintently in well commented jquery.

CSS is generated locally. I recommend using codekit on mac environment, as the app provides a GUI for most Compass and SCSS settings as well as detaied debug logs.

## Conventions

### Avoid presentational markup

Zurb foundation uses .row and .column classes in order to work with the grid. Using, SCSS allows you to work with mixins, meaning that your HTML markup can contain semantically rich class names, while the grid related styles can be included in your SCSS files.

As opposed to writing something like:

```html
<div class="row">
```

you would write:

```html
<div class="post-container">
```

```scss
.post-container{@include innerRow();}
```

### Use templates as necessary

Repetative areas of the UI should be broken out into individual mustache templates, as neccesary.

Templates should be created using external .mustache and .json files, as opposed to hardcoding vars.

### When possible, create reusable markup

`<header class="form-header">` as opposed to `<form id="form1"><header id="form1header">`

### Remotes

**Live beta**: http://www.practiceupdate.com

**Dev Server**: http://dev.practiceupdate.com

## Deliverables

Most html pages that Nix needs to deliver exists on the Dev server. Issues have been created for each individual page, and links to the dev pages have been added to each issue.
The pages on the dev server should be seen as draft html. They represent appropriate functionality, but they are not production-ready.

As much as possible, HTML should be written before css/scss. If appropriate html elements are used and the foundation framework markup patterns are followed, a large amount of the content will already be styled.

It's more important to show error text and confirmation alerts as markup than to create functioning validation and state changes. The wireframes are meant to illustrate the logic to the engineering team who will be implementing the templates on the development server.

Completed .html, .js and .css files should be delivered to the engineering team, via [PMcFad](https://github.com/PMcFad).

## Visual Assets

### Icons

- we use [Font Awesome](http://fortawesome.github.com/Font-Awesome/) for our icons

### Colors

- Our base color palette can be downloaded as an [illustrator file](https://www.dropbox.com/s/ebtgdc5iji45frg/PracticeUpdate_ColorPalette.ai)
		- all colors in the palette are available as variables that have been set in _foundation-overrides.scss *these variable should be used, instead of hardcoding color values into the css*

### Fonts

- We are serving our fonts via [Typekit](http://typekit.com)
- Our branding is done in Museo Slab and Din
	- for web fonts, we are using Museo Slab 500 and Din Condensed
	- Museo is the default for headers
	- Din is used for item titles (such as articles) because the condenced font helps reduce line wraps in longer titles
	- for general font styling, consult [this mockup](https://www.dropbox.com/s/h72xx42yzzt8xqu/PracticeUpdate_Web_3_V6.psd) *We have since decided to use a solid light tan background, please keep that in mind when styling the text*


