### Webpack Skeleton

Set up is simple - drop the contents of this folder into any WordPress theme.
  
  * Navigate to the theme's folder and run `npm install`
  * Run `npx webpack`

And that's it!

The project will then run Webpack, which will search through both the `src/js` and `src/scss` folders. Webpack will then watch for changes. If any of these files have been changed upon save, Webpack will minify, compile, and concat any JS or SCSS into the `assets` folder. Webpack will update the filename to `index.min.js` and `index.min.css` to indicate a minified version, as well as an additional `.map` file for each respective file.

See the example file structure:

```
.
├── assets 
│   ├── css 
│     ├── index.min.css 
│     └── index.min.css.map
│   ├── js 
│     ├── index.min.js 
│     └── index.min.js.map
└── src
```

#### Adding a JavaScript file

* Navigate to the `src/js` folder 
* Add a new file, beginning with `_` (this will indicate the imported files over the main Javascript file, `index.js`)
* In `index.js`, `import` the new file — the files will import in the order they are added

#### Adding a SCSS file

* Navigate to the `src/scss` folder 
* Add a new file, beginning with `_` (this will indicate the imported files over the main SCSS file, `index.scss`)

The main SCSS file is already imported within `src/js/index.js`, so we don't have to do anything additional here.