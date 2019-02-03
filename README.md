## Frontend Exercise

With the next markup, you must create an accordion (JS / CSS) show only the contents of a section at a time.
Sure to follow the [SUIT](https://suitcss.github.io/) convention when working with CSS.


```html
<dl>
  <dt>Section 1</dt>
  <dd>
    <p>Section 1 Content...</p>
  </dd>
  <dt>Section 2</dt>
  <dd>
    <p>Section 2 Content...</p>
  </dd>
  <dt>Section 3</dt>
  <dd>
    <p>Section 3 Content...</p>
  </dd>
</dl>
```

### Conditions
* Use Sass for generate CSS
* Use ES6
* Use only Vanilla JS, without any JS framework
* Generate gh-page for publish


### Bonus
* Add new section with Ajax content


## Frontend Resolution
The proof of concept works the next building and test tools:

- Webpack for building css and javascript bundles as well as attach them into a HTML template.
- ESLint & Prettier to validate and follow a style guide for JS
- Stylelint to validate styles. Mainly scss files.
- Postcss & Autoprefixer to add additional behaviours into the CSS generated from sass compilation
- Babel to compile ES6 code into ES5
- Jest to test the code

## Folders Structure

```
project
 |_ dist                  // Distro for production releasements
 |_ src
     |_ Domain            // Core business logic 
     |_ Infrastructure    // Tool to run the app  
        |_ Common         // Shared items accross components
        |_ Components     // UI Components       
```

## How to run the app?

First of all install dependencies
```
$>npm i
```

You can run the app in development or production mode.

##### Dev mode
```
$>npm run dev
```
> It opens a tab at http://localhost:8081/

##### Prod mode
```
$>npm run build
```
> Then you can run index.html file at dist directory

## How to test it?
```
$>npm test
```

## How to check Javascript's style guide
```
$> node_modules/.bin/eslint --ignore-pattern "src/**/*.test.js" src/**/*.js 
```
## How to check Styles' style guide
```
$> node_modules/.bin/stylelint "src/styles/**/*.scss" 
```