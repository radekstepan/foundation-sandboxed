#[Foundation Sandboxed](http://foundation.zurb.com)

Custom Foundation CSS framework build.

- [x] No `max-width` on grid rows.
- [x] A `foundation` class prefix/sandboxing on all selectors.
- [x] Minimize all CSS files.
- [x] Package all CSS as CommonJS modules that can be required in the browser.

##Install

```bash
$ npm install foundation-sandboxed
```

Then you can grab the CSS or JS files in the `build` directory or require the CommonJS modules in your project:

```javascript
require('foundation-sandboxed/build/commonjs/foundation.sandboxed.min.js');
```

##Build

```bash
$ gem install bundler
$ bundle install
$ npm install
$ grunt
```