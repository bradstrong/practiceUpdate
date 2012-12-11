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
- _foundation-overrides.scss contains all variables specific to the project, including Foundation variables whose values have been reassigned
- styles are divided across several partial files (_base, _layout, _module, _theme), following the patterns laid out by [SMACCS](http://smacss.com/). 
- JS is placed in app.js, written predomintently in well commented jquery.

CSS is generated locally. I recommend using codekit on mac environment, as the app provides a GUI for most Compass and SCSS settings as well as detaied debug logs.

## Conventions

### Avoid presentational markup

Zurb foundation uses .row and .column classes in order to work with the grid. Using, SCSS allows you to work with mixins, meanign that your HTML markup can contain semantically rich class names, while the grid related styles can be included in your SCSS files.

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

## Deliver assets

Completed .html, .js and .css files should be delivered to the engineering team, via [PMcFad](https://github.com/PMcFad).



