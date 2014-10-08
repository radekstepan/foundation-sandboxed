(function () {
    // normalize.css
    var cssText = "" +
"/*! normalize.css v3.0.1 | MIT License | git.io/normalize */\n" +
"/**\n" +
" * 1. Set default font family to sans-serif.\n" +
" * 2. Prevent iOS text size adjust after orientation change, without disabling\n" +
" *    user zoom.\n" +
" */\n" +
"html {\n" +
"  font-family: sans-serif;\n" +
"  /* 1 */\n" +
"  -ms-text-size-adjust: 100%;\n" +
"  /* 2 */\n" +
"  -webkit-text-size-adjust: 100%;\n" +
"  /* 2 */ }\n" +
"\n" +
"/**\n" +
" * Remove default margin.\n" +
" */\n" +
"body {\n" +
"  margin: 0; }\n" +
"\n" +
"/* HTML5 display definitions\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Correct `block` display not defined for any HTML5 element in IE 8/9.\n" +
" * Correct `block` display not defined for `details` or `summary` in IE 10/11 and Firefox.\n" +
" * Correct `block` display not defined for `main` in IE 11.\n" +
" */\n" +
"article,\n" +
"aside,\n" +
"details,\n" +
"figcaption,\n" +
"figure,\n" +
"footer,\n" +
"header,\n" +
"hgroup,\n" +
"main,\n" +
"nav,\n" +
"section,\n" +
"summary {\n" +
"  display: block; }\n" +
"\n" +
"/**\n" +
" * 1. Correct `inline-block` display not defined in IE 8/9.\n" +
" * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n" +
" */\n" +
"audio,\n" +
"canvas,\n" +
"progress,\n" +
"video {\n" +
"  display: inline-block;\n" +
"  /* 1 */\n" +
"  vertical-align: baseline;\n" +
"  /* 2 */ }\n" +
"\n" +
"/**\n" +
" * Prevent modern browsers from displaying `audio` without controls.\n" +
" * Remove excess height in iOS 5 devices.\n" +
" */\n" +
"audio:not([controls]) {\n" +
"  display: none;\n" +
"  height: 0; }\n" +
"\n" +
"/**\n" +
" * Address `[hidden]` styling not present in IE 8/9/10.\n" +
" * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\n" +
" */\n" +
"[hidden],\n" +
"template {\n" +
"  display: none; }\n" +
"\n" +
"/* Links\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Remove the gray background color from active links in IE 10.\n" +
" */\n" +
"a {\n" +
"  background: transparent; }\n" +
"\n" +
"/**\n" +
" * Improve readability when focused and also mouse hovered in all browsers.\n" +
" */\n" +
"a:active,\n" +
"a:hover {\n" +
"  outline: 0; }\n" +
"\n" +
"/* Text-level semantics\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n" +
" */\n" +
"abbr[title] {\n" +
"  border-bottom: 1px dotted; }\n" +
"\n" +
"/**\n" +
" * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n" +
" */\n" +
"b,\n" +
"strong {\n" +
"  font-weight: bold; }\n" +
"\n" +
"/**\n" +
" * Address styling not present in Safari and Chrome.\n" +
" */\n" +
"dfn {\n" +
"  font-style: italic; }\n" +
"\n" +
"/**\n" +
" * Address variable `h1` font-size and margin within `section` and `article`\n" +
" * contexts in Firefox 4+, Safari, and Chrome.\n" +
" */\n" +
"h1 {\n" +
"  font-size: 2em;\n" +
"  margin: 0.67em 0; }\n" +
"\n" +
"/**\n" +
" * Address styling not present in IE 8/9.\n" +
" */\n" +
"mark {\n" +
"  background: #ff0;\n" +
"  color: #000; }\n" +
"\n" +
"/**\n" +
" * Address inconsistent and variable font size in all browsers.\n" +
" */\n" +
"small {\n" +
"  font-size: 80%; }\n" +
"\n" +
"/**\n" +
" * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n" +
" */\n" +
"sub,\n" +
"sup {\n" +
"  font-size: 75%;\n" +
"  line-height: 0;\n" +
"  position: relative;\n" +
"  vertical-align: baseline; }\n" +
"\n" +
"sup {\n" +
"  top: -0.5em; }\n" +
"\n" +
"sub {\n" +
"  bottom: -0.25em; }\n" +
"\n" +
"/* Embedded content\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Remove border when inside `a` element in IE 8/9/10.\n" +
" */\n" +
"img {\n" +
"  border: 0; }\n" +
"\n" +
"/**\n" +
" * Correct overflow not hidden in IE 9/10/11.\n" +
" */\n" +
"svg:not(:root) {\n" +
"  overflow: hidden; }\n" +
"\n" +
"/* Grouping content\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Address margin not present in IE 8/9 and Safari.\n" +
" */\n" +
"figure {\n" +
"  margin: 1em 40px; }\n" +
"\n" +
"/**\n" +
" * Address differences between Firefox and other browsers.\n" +
" */\n" +
"hr {\n" +
"  -moz-box-sizing: content-box;\n" +
"  box-sizing: content-box;\n" +
"  height: 0; }\n" +
"\n" +
"/**\n" +
" * Contain overflow in all browsers.\n" +
" */\n" +
"pre {\n" +
"  overflow: auto; }\n" +
"\n" +
"/**\n" +
" * Address odd `em`-unit font size rendering in all browsers.\n" +
" */\n" +
"code,\n" +
"kbd,\n" +
"pre,\n" +
"samp {\n" +
"  font-family: monospace, monospace;\n" +
"  font-size: 1em; }\n" +
"\n" +
"/* Forms\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Known limitation: by default, Chrome and Safari on OS X allow very limited\n" +
" * styling of `select`, unless a `border` property is set.\n" +
" */\n" +
"/**\n" +
" * 1. Correct color not being inherited.\n" +
" *    Known issue: affects color of disabled elements.\n" +
" * 2. Correct font properties not being inherited.\n" +
" * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n" +
" */\n" +
"button,\n" +
"input,\n" +
"optgroup,\n" +
"select,\n" +
"textarea {\n" +
"  color: inherit;\n" +
"  /* 1 */\n" +
"  font: inherit;\n" +
"  /* 2 */\n" +
"  margin: 0;\n" +
"  /* 3 */ }\n" +
"\n" +
"/**\n" +
" * Address `overflow` set to `hidden` in IE 8/9/10/11.\n" +
" */\n" +
"button {\n" +
"  overflow: visible; }\n" +
"\n" +
"/**\n" +
" * Address inconsistent `text-transform` inheritance for `button` and `select`.\n" +
" * All other form control elements do not inherit `text-transform` values.\n" +
" * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n" +
" * Correct `select` style inheritance in Firefox.\n" +
" */\n" +
"button,\n" +
"select {\n" +
"  text-transform: none; }\n" +
"\n" +
"/**\n" +
" * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n" +
" *    and `video` controls.\n" +
" * 2. Correct inability to style clickable `input` types in iOS.\n" +
" * 3. Improve usability and consistency of cursor style between image-type\n" +
" *    `input` and others.\n" +
" */\n" +
"button,\n" +
"html input[type=\"button\"],\n" +
"input[type=\"reset\"],\n" +
"input[type=\"submit\"] {\n" +
"  -webkit-appearance: button;\n" +
"  /* 2 */\n" +
"  cursor: pointer;\n" +
"  /* 3 */ }\n" +
"\n" +
"/**\n" +
" * Re-set default cursor for disabled elements.\n" +
" */\n" +
"button[disabled],\n" +
"html input[disabled] {\n" +
"  cursor: default; }\n" +
"\n" +
"/**\n" +
" * Remove inner padding and border in Firefox 4+.\n" +
" */\n" +
"button::-moz-focus-inner,\n" +
"input::-moz-focus-inner {\n" +
"  border: 0;\n" +
"  padding: 0; }\n" +
"\n" +
"/**\n" +
" * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n" +
" * the UA stylesheet.\n" +
" */\n" +
"input {\n" +
"  line-height: normal; }\n" +
"\n" +
"/**\n" +
" * It's recommended that you don't attempt to style these elements.\n" +
" * Firefox's implementation doesn't respect box-sizing, padding, or width.\n" +
" *\n" +
" * 1. Address box sizing set to `content-box` in IE 8/9/10.\n" +
" * 2. Remove excess padding in IE 8/9/10.\n" +
" */\n" +
"input[type=\"checkbox\"],\n" +
"input[type=\"radio\"] {\n" +
"  box-sizing: border-box;\n" +
"  /* 1 */\n" +
"  padding: 0;\n" +
"  /* 2 */ }\n" +
"\n" +
"/**\n" +
" * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n" +
" * `font-size` values of the `input`, it causes the cursor style of the\n" +
" * decrement button to change from `default` to `text`.\n" +
" */\n" +
"input[type=\"number\"]::-webkit-inner-spin-button,\n" +
"input[type=\"number\"]::-webkit-outer-spin-button {\n" +
"  height: auto; }\n" +
"\n" +
"/**\n" +
" * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n" +
" * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\n" +
" *    (include `-moz` to future-proof).\n" +
" */\n" +
"input[type=\"search\"] {\n" +
"  -webkit-appearance: textfield;\n" +
"  /* 1 */\n" +
"  -moz-box-sizing: content-box;\n" +
"  -webkit-box-sizing: content-box;\n" +
"  /* 2 */\n" +
"  box-sizing: content-box; }\n" +
"\n" +
"/**\n" +
" * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n" +
" * Safari (but not Chrome) clips the cancel button when the search input has\n" +
" * padding (and `textfield` appearance).\n" +
" */\n" +
"input[type=\"search\"]::-webkit-search-cancel-button,\n" +
"input[type=\"search\"]::-webkit-search-decoration {\n" +
"  -webkit-appearance: none; }\n" +
"\n" +
"/**\n" +
" * Define consistent border, margin, and padding.\n" +
" */\n" +
"fieldset {\n" +
"  border: 1px solid #c0c0c0;\n" +
"  margin: 0 2px;\n" +
"  padding: 0.35em 0.625em 0.75em; }\n" +
"\n" +
"/**\n" +
" * 1. Correct `color` not being inherited in IE 8/9/10/11.\n" +
" * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n" +
" */\n" +
"legend {\n" +
"  border: 0;\n" +
"  /* 1 */\n" +
"  padding: 0;\n" +
"  /* 2 */ }\n" +
"\n" +
"/**\n" +
" * Remove default vertical scrollbar in IE 8/9/10/11.\n" +
" */\n" +
"textarea {\n" +
"  overflow: auto; }\n" +
"\n" +
"/**\n" +
" * Don't inherit the `font-weight` (applied by a rule above).\n" +
" * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n" +
" */\n" +
"optgroup {\n" +
"  font-weight: bold; }\n" +
"\n" +
"/* Tables\n" +
"   ========================================================================== */\n" +
"/**\n" +
" * Remove most spacing between table cells.\n" +
" */\n" +
"table {\n" +
"  border-collapse: collapse;\n" +
"  border-spacing: 0; }\n" +
"\n" +
"td,\n" +
"th {\n" +
"  padding: 0; }\n" +
"";
    // cssText end

    var styleEl = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText
        } catch(e) {
            styleEl.innerText = cssText;
        }
    }
}());
