(function () {
    // foundation.css
    var cssText = "" +
"meta.foundation-version {\n" +
"  font-family: \"/{{VERSION}}/\"; }\n" +
"\n" +
"meta.foundation-mq-small {\n" +
"  font-family: \"/only screen/\";\n" +
"  width: 0em; }\n" +
"\n" +
"meta.foundation-mq-medium {\n" +
"  font-family: \"/only screen and (min-width:40.063em)/\";\n" +
"  width: 40.063em; }\n" +
"\n" +
"meta.foundation-mq-large {\n" +
"  font-family: \"/only screen and (min-width:64.063em)/\";\n" +
"  width: 64.063em; }\n" +
"\n" +
"meta.foundation-mq-xlarge {\n" +
"  font-family: \"/only screen and (min-width:90.063em)/\";\n" +
"  width: 90.063em; }\n" +
"\n" +
"meta.foundation-mq-xxlarge {\n" +
"  font-family: \"/only screen and (min-width:120.063em)/\";\n" +
"  width: 120.063em; }\n" +
"\n" +
"meta.foundation-data-attribute-namespace {\n" +
"  font-family: false; }\n" +
"\n" +
"html, body {\n" +
"  height: 100%; }\n" +
"\n" +
"*,\n" +
"*:before,\n" +
"*:after {\n" +
"  -webkit-box-sizing: border-box;\n" +
"  -moz-box-sizing: border-box;\n" +
"  box-sizing: border-box; }\n" +
"\n" +
"html,\n" +
"body {\n" +
"  font-size: 100%; }\n" +
"\n" +
"body {\n" +
"  background: white;\n" +
"  color: #222222;\n" +
"  padding: 0;\n" +
"  margin: 0;\n" +
"  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  line-height: 1.5;\n" +
"  position: relative;\n" +
"  cursor: auto; }\n" +
"\n" +
"a:hover {\n" +
"  cursor: pointer; }\n" +
"\n" +
"img {\n" +
"  max-width: 100%;\n" +
"  height: auto; }\n" +
"\n" +
"img {\n" +
"  -ms-interpolation-mode: bicubic; }\n" +
"\n" +
"#map_canvas img,\n" +
"#map_canvas embed,\n" +
"#map_canvas object,\n" +
".map_canvas img,\n" +
".map_canvas embed,\n" +
".map_canvas object {\n" +
"  max-width: none !important; }\n" +
"\n" +
".left {\n" +
"  float: left !important; }\n" +
"\n" +
".right {\n" +
"  float: right !important; }\n" +
"\n" +
".clearfix:before, .clearfix:after {\n" +
"  content: \" \";\n" +
"  display: table; }\n" +
".clearfix:after {\n" +
"  clear: both; }\n" +
"\n" +
".hide {\n" +
"  display: none; }\n" +
"\n" +
".antialiased {\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"  -moz-osx-font-smoothing: grayscale; }\n" +
"\n" +
"img {\n" +
"  display: inline-block;\n" +
"  vertical-align: middle; }\n" +
"\n" +
"textarea {\n" +
"  height: auto;\n" +
"  min-height: 50px; }\n" +
"\n" +
"select {\n" +
"  width: 100%; }\n" +
"\n" +
".row {\n" +
"  width: 100%;\n" +
"  margin-left: auto;\n" +
"  margin-right: auto;\n" +
"  margin-top: 0;\n" +
"  margin-bottom: 0;\n" +
"  max-width: 100%; }\n" +
"  .row:before, .row:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .row:after {\n" +
"    clear: both; }\n" +
"  .row.collapse > .column,\n" +
"  .row.collapse > .columns {\n" +
"    padding-left: 0;\n" +
"    padding-right: 0; }\n" +
"  .row.collapse .row {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0; }\n" +
"  .row .row {\n" +
"    width: auto;\n" +
"    margin-left: -0.9375rem;\n" +
"    margin-right: -0.9375rem;\n" +
"    margin-top: 0;\n" +
"    margin-bottom: 0;\n" +
"    max-width: none; }\n" +
"    .row .row:before, .row .row:after {\n" +
"      content: \" \";\n" +
"      display: table; }\n" +
"    .row .row:after {\n" +
"      clear: both; }\n" +
"    .row .row.collapse {\n" +
"      width: auto;\n" +
"      margin: 0;\n" +
"      max-width: none; }\n" +
"      .row .row.collapse:before, .row .row.collapse:after {\n" +
"        content: \" \";\n" +
"        display: table; }\n" +
"      .row .row.collapse:after {\n" +
"        clear: both; }\n" +
"\n" +
".column,\n" +
".columns {\n" +
"  padding-left: 0.9375rem;\n" +
"  padding-right: 0.9375rem;\n" +
"  width: 100%;\n" +
"  float: left; }\n" +
"\n" +
"[class*=\"column\"] + [class*=\"column\"]:last-child {\n" +
"  float: right; }\n" +
"\n" +
"[class*=\"column\"] + [class*=\"column\"].end {\n" +
"  float: left; }\n" +
"\n" +
"@media only screen {\n" +
"  .small-push-0 {\n" +
"    position: relative;\n" +
"    left: 0%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-0 {\n" +
"    position: relative;\n" +
"    right: 0%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-1 {\n" +
"    position: relative;\n" +
"    left: 8.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-1 {\n" +
"    position: relative;\n" +
"    right: 8.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-2 {\n" +
"    position: relative;\n" +
"    left: 16.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-2 {\n" +
"    position: relative;\n" +
"    right: 16.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-3 {\n" +
"    position: relative;\n" +
"    left: 25%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-3 {\n" +
"    position: relative;\n" +
"    right: 25%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-4 {\n" +
"    position: relative;\n" +
"    left: 33.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-4 {\n" +
"    position: relative;\n" +
"    right: 33.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-5 {\n" +
"    position: relative;\n" +
"    left: 41.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-5 {\n" +
"    position: relative;\n" +
"    right: 41.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-6 {\n" +
"    position: relative;\n" +
"    left: 50%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-6 {\n" +
"    position: relative;\n" +
"    right: 50%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-7 {\n" +
"    position: relative;\n" +
"    left: 58.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-7 {\n" +
"    position: relative;\n" +
"    right: 58.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-8 {\n" +
"    position: relative;\n" +
"    left: 66.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-8 {\n" +
"    position: relative;\n" +
"    right: 66.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-9 {\n" +
"    position: relative;\n" +
"    left: 75%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-9 {\n" +
"    position: relative;\n" +
"    right: 75%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-10 {\n" +
"    position: relative;\n" +
"    left: 83.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-10 {\n" +
"    position: relative;\n" +
"    right: 83.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .small-push-11 {\n" +
"    position: relative;\n" +
"    left: 91.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .small-pull-11 {\n" +
"    position: relative;\n" +
"    right: 91.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .column,\n" +
"  .columns {\n" +
"    position: relative;\n" +
"    padding-left: 0.9375rem;\n" +
"    padding-right: 0.9375rem;\n" +
"    float: left; }\n" +
"\n" +
"  .small-1 {\n" +
"    width: 8.33333%; }\n" +
"\n" +
"  .small-2 {\n" +
"    width: 16.66667%; }\n" +
"\n" +
"  .small-3 {\n" +
"    width: 25%; }\n" +
"\n" +
"  .small-4 {\n" +
"    width: 33.33333%; }\n" +
"\n" +
"  .small-5 {\n" +
"    width: 41.66667%; }\n" +
"\n" +
"  .small-6 {\n" +
"    width: 50%; }\n" +
"\n" +
"  .small-7 {\n" +
"    width: 58.33333%; }\n" +
"\n" +
"  .small-8 {\n" +
"    width: 66.66667%; }\n" +
"\n" +
"  .small-9 {\n" +
"    width: 75%; }\n" +
"\n" +
"  .small-10 {\n" +
"    width: 83.33333%; }\n" +
"\n" +
"  .small-11 {\n" +
"    width: 91.66667%; }\n" +
"\n" +
"  .small-12 {\n" +
"    width: 100%; }\n" +
"\n" +
"  .small-offset-0 {\n" +
"    margin-left: 0% !important; }\n" +
"\n" +
"  .small-offset-1 {\n" +
"    margin-left: 8.33333% !important; }\n" +
"\n" +
"  .small-offset-2 {\n" +
"    margin-left: 16.66667% !important; }\n" +
"\n" +
"  .small-offset-3 {\n" +
"    margin-left: 25% !important; }\n" +
"\n" +
"  .small-offset-4 {\n" +
"    margin-left: 33.33333% !important; }\n" +
"\n" +
"  .small-offset-5 {\n" +
"    margin-left: 41.66667% !important; }\n" +
"\n" +
"  .small-offset-6 {\n" +
"    margin-left: 50% !important; }\n" +
"\n" +
"  .small-offset-7 {\n" +
"    margin-left: 58.33333% !important; }\n" +
"\n" +
"  .small-offset-8 {\n" +
"    margin-left: 66.66667% !important; }\n" +
"\n" +
"  .small-offset-9 {\n" +
"    margin-left: 75% !important; }\n" +
"\n" +
"  .small-offset-10 {\n" +
"    margin-left: 83.33333% !important; }\n" +
"\n" +
"  .small-offset-11 {\n" +
"    margin-left: 91.66667% !important; }\n" +
"\n" +
"  .small-reset-order {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0;\n" +
"    left: auto;\n" +
"    right: auto;\n" +
"    float: left; }\n" +
"\n" +
"  .column.small-centered,\n" +
"  .columns.small-centered {\n" +
"    margin-left: auto;\n" +
"    margin-right: auto;\n" +
"    float: none; }\n" +
"\n" +
"  .column.small-uncentered,\n" +
"  .columns.small-uncentered {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0;\n" +
"    float: left; }\n" +
"\n" +
"  .column.small-centered:last-child,\n" +
"  .columns.small-centered:last-child {\n" +
"    float: none; }\n" +
"\n" +
"  .column.small-uncentered:last-child,\n" +
"  .columns.small-uncentered:last-child {\n" +
"    float: left; }\n" +
"\n" +
"  .column.small-uncentered.opposite,\n" +
"  .columns.small-uncentered.opposite {\n" +
"    float: right; } }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .medium-push-0 {\n" +
"    position: relative;\n" +
"    left: 0%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-0 {\n" +
"    position: relative;\n" +
"    right: 0%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-1 {\n" +
"    position: relative;\n" +
"    left: 8.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-1 {\n" +
"    position: relative;\n" +
"    right: 8.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-2 {\n" +
"    position: relative;\n" +
"    left: 16.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-2 {\n" +
"    position: relative;\n" +
"    right: 16.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-3 {\n" +
"    position: relative;\n" +
"    left: 25%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-3 {\n" +
"    position: relative;\n" +
"    right: 25%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-4 {\n" +
"    position: relative;\n" +
"    left: 33.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-4 {\n" +
"    position: relative;\n" +
"    right: 33.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-5 {\n" +
"    position: relative;\n" +
"    left: 41.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-5 {\n" +
"    position: relative;\n" +
"    right: 41.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-6 {\n" +
"    position: relative;\n" +
"    left: 50%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-6 {\n" +
"    position: relative;\n" +
"    right: 50%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-7 {\n" +
"    position: relative;\n" +
"    left: 58.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-7 {\n" +
"    position: relative;\n" +
"    right: 58.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-8 {\n" +
"    position: relative;\n" +
"    left: 66.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-8 {\n" +
"    position: relative;\n" +
"    right: 66.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-9 {\n" +
"    position: relative;\n" +
"    left: 75%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-9 {\n" +
"    position: relative;\n" +
"    right: 75%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-10 {\n" +
"    position: relative;\n" +
"    left: 83.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-10 {\n" +
"    position: relative;\n" +
"    right: 83.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .medium-push-11 {\n" +
"    position: relative;\n" +
"    left: 91.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .medium-pull-11 {\n" +
"    position: relative;\n" +
"    right: 91.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .column,\n" +
"  .columns {\n" +
"    position: relative;\n" +
"    padding-left: 0.9375rem;\n" +
"    padding-right: 0.9375rem;\n" +
"    float: left; }\n" +
"\n" +
"  .medium-1 {\n" +
"    width: 8.33333%; }\n" +
"\n" +
"  .medium-2 {\n" +
"    width: 16.66667%; }\n" +
"\n" +
"  .medium-3 {\n" +
"    width: 25%; }\n" +
"\n" +
"  .medium-4 {\n" +
"    width: 33.33333%; }\n" +
"\n" +
"  .medium-5 {\n" +
"    width: 41.66667%; }\n" +
"\n" +
"  .medium-6 {\n" +
"    width: 50%; }\n" +
"\n" +
"  .medium-7 {\n" +
"    width: 58.33333%; }\n" +
"\n" +
"  .medium-8 {\n" +
"    width: 66.66667%; }\n" +
"\n" +
"  .medium-9 {\n" +
"    width: 75%; }\n" +
"\n" +
"  .medium-10 {\n" +
"    width: 83.33333%; }\n" +
"\n" +
"  .medium-11 {\n" +
"    width: 91.66667%; }\n" +
"\n" +
"  .medium-12 {\n" +
"    width: 100%; }\n" +
"\n" +
"  .medium-offset-0 {\n" +
"    margin-left: 0% !important; }\n" +
"\n" +
"  .medium-offset-1 {\n" +
"    margin-left: 8.33333% !important; }\n" +
"\n" +
"  .medium-offset-2 {\n" +
"    margin-left: 16.66667% !important; }\n" +
"\n" +
"  .medium-offset-3 {\n" +
"    margin-left: 25% !important; }\n" +
"\n" +
"  .medium-offset-4 {\n" +
"    margin-left: 33.33333% !important; }\n" +
"\n" +
"  .medium-offset-5 {\n" +
"    margin-left: 41.66667% !important; }\n" +
"\n" +
"  .medium-offset-6 {\n" +
"    margin-left: 50% !important; }\n" +
"\n" +
"  .medium-offset-7 {\n" +
"    margin-left: 58.33333% !important; }\n" +
"\n" +
"  .medium-offset-8 {\n" +
"    margin-left: 66.66667% !important; }\n" +
"\n" +
"  .medium-offset-9 {\n" +
"    margin-left: 75% !important; }\n" +
"\n" +
"  .medium-offset-10 {\n" +
"    margin-left: 83.33333% !important; }\n" +
"\n" +
"  .medium-offset-11 {\n" +
"    margin-left: 91.66667% !important; }\n" +
"\n" +
"  .medium-reset-order {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0;\n" +
"    left: auto;\n" +
"    right: auto;\n" +
"    float: left; }\n" +
"\n" +
"  .column.medium-centered,\n" +
"  .columns.medium-centered {\n" +
"    margin-left: auto;\n" +
"    margin-right: auto;\n" +
"    float: none; }\n" +
"\n" +
"  .column.medium-uncentered,\n" +
"  .columns.medium-uncentered {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0;\n" +
"    float: left; }\n" +
"\n" +
"  .column.medium-centered:last-child,\n" +
"  .columns.medium-centered:last-child {\n" +
"    float: none; }\n" +
"\n" +
"  .column.medium-uncentered:last-child,\n" +
"  .columns.medium-uncentered:last-child {\n" +
"    float: left; }\n" +
"\n" +
"  .column.medium-uncentered.opposite,\n" +
"  .columns.medium-uncentered.opposite {\n" +
"    float: right; }\n" +
"\n" +
"  .push-0 {\n" +
"    position: relative;\n" +
"    left: 0%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-0 {\n" +
"    position: relative;\n" +
"    right: 0%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-1 {\n" +
"    position: relative;\n" +
"    left: 8.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-1 {\n" +
"    position: relative;\n" +
"    right: 8.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-2 {\n" +
"    position: relative;\n" +
"    left: 16.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-2 {\n" +
"    position: relative;\n" +
"    right: 16.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-3 {\n" +
"    position: relative;\n" +
"    left: 25%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-3 {\n" +
"    position: relative;\n" +
"    right: 25%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-4 {\n" +
"    position: relative;\n" +
"    left: 33.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-4 {\n" +
"    position: relative;\n" +
"    right: 33.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-5 {\n" +
"    position: relative;\n" +
"    left: 41.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-5 {\n" +
"    position: relative;\n" +
"    right: 41.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-6 {\n" +
"    position: relative;\n" +
"    left: 50%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-6 {\n" +
"    position: relative;\n" +
"    right: 50%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-7 {\n" +
"    position: relative;\n" +
"    left: 58.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-7 {\n" +
"    position: relative;\n" +
"    right: 58.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-8 {\n" +
"    position: relative;\n" +
"    left: 66.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-8 {\n" +
"    position: relative;\n" +
"    right: 66.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-9 {\n" +
"    position: relative;\n" +
"    left: 75%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-9 {\n" +
"    position: relative;\n" +
"    right: 75%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-10 {\n" +
"    position: relative;\n" +
"    left: 83.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-10 {\n" +
"    position: relative;\n" +
"    right: 83.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-11 {\n" +
"    position: relative;\n" +
"    left: 91.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-11 {\n" +
"    position: relative;\n" +
"    right: 91.66667%;\n" +
"    left: auto; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .large-push-0 {\n" +
"    position: relative;\n" +
"    left: 0%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-0 {\n" +
"    position: relative;\n" +
"    right: 0%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-1 {\n" +
"    position: relative;\n" +
"    left: 8.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-1 {\n" +
"    position: relative;\n" +
"    right: 8.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-2 {\n" +
"    position: relative;\n" +
"    left: 16.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-2 {\n" +
"    position: relative;\n" +
"    right: 16.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-3 {\n" +
"    position: relative;\n" +
"    left: 25%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-3 {\n" +
"    position: relative;\n" +
"    right: 25%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-4 {\n" +
"    position: relative;\n" +
"    left: 33.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-4 {\n" +
"    position: relative;\n" +
"    right: 33.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-5 {\n" +
"    position: relative;\n" +
"    left: 41.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-5 {\n" +
"    position: relative;\n" +
"    right: 41.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-6 {\n" +
"    position: relative;\n" +
"    left: 50%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-6 {\n" +
"    position: relative;\n" +
"    right: 50%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-7 {\n" +
"    position: relative;\n" +
"    left: 58.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-7 {\n" +
"    position: relative;\n" +
"    right: 58.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-8 {\n" +
"    position: relative;\n" +
"    left: 66.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-8 {\n" +
"    position: relative;\n" +
"    right: 66.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-9 {\n" +
"    position: relative;\n" +
"    left: 75%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-9 {\n" +
"    position: relative;\n" +
"    right: 75%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-10 {\n" +
"    position: relative;\n" +
"    left: 83.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-10 {\n" +
"    position: relative;\n" +
"    right: 83.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .large-push-11 {\n" +
"    position: relative;\n" +
"    left: 91.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .large-pull-11 {\n" +
"    position: relative;\n" +
"    right: 91.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .column,\n" +
"  .columns {\n" +
"    position: relative;\n" +
"    padding-left: 0.9375rem;\n" +
"    padding-right: 0.9375rem;\n" +
"    float: left; }\n" +
"\n" +
"  .large-1 {\n" +
"    width: 8.33333%; }\n" +
"\n" +
"  .large-2 {\n" +
"    width: 16.66667%; }\n" +
"\n" +
"  .large-3 {\n" +
"    width: 25%; }\n" +
"\n" +
"  .large-4 {\n" +
"    width: 33.33333%; }\n" +
"\n" +
"  .large-5 {\n" +
"    width: 41.66667%; }\n" +
"\n" +
"  .large-6 {\n" +
"    width: 50%; }\n" +
"\n" +
"  .large-7 {\n" +
"    width: 58.33333%; }\n" +
"\n" +
"  .large-8 {\n" +
"    width: 66.66667%; }\n" +
"\n" +
"  .large-9 {\n" +
"    width: 75%; }\n" +
"\n" +
"  .large-10 {\n" +
"    width: 83.33333%; }\n" +
"\n" +
"  .large-11 {\n" +
"    width: 91.66667%; }\n" +
"\n" +
"  .large-12 {\n" +
"    width: 100%; }\n" +
"\n" +
"  .large-offset-0 {\n" +
"    margin-left: 0% !important; }\n" +
"\n" +
"  .large-offset-1 {\n" +
"    margin-left: 8.33333% !important; }\n" +
"\n" +
"  .large-offset-2 {\n" +
"    margin-left: 16.66667% !important; }\n" +
"\n" +
"  .large-offset-3 {\n" +
"    margin-left: 25% !important; }\n" +
"\n" +
"  .large-offset-4 {\n" +
"    margin-left: 33.33333% !important; }\n" +
"\n" +
"  .large-offset-5 {\n" +
"    margin-left: 41.66667% !important; }\n" +
"\n" +
"  .large-offset-6 {\n" +
"    margin-left: 50% !important; }\n" +
"\n" +
"  .large-offset-7 {\n" +
"    margin-left: 58.33333% !important; }\n" +
"\n" +
"  .large-offset-8 {\n" +
"    margin-left: 66.66667% !important; }\n" +
"\n" +
"  .large-offset-9 {\n" +
"    margin-left: 75% !important; }\n" +
"\n" +
"  .large-offset-10 {\n" +
"    margin-left: 83.33333% !important; }\n" +
"\n" +
"  .large-offset-11 {\n" +
"    margin-left: 91.66667% !important; }\n" +
"\n" +
"  .large-reset-order {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0;\n" +
"    left: auto;\n" +
"    right: auto;\n" +
"    float: left; }\n" +
"\n" +
"  .column.large-centered,\n" +
"  .columns.large-centered {\n" +
"    margin-left: auto;\n" +
"    margin-right: auto;\n" +
"    float: none; }\n" +
"\n" +
"  .column.large-uncentered,\n" +
"  .columns.large-uncentered {\n" +
"    margin-left: 0;\n" +
"    margin-right: 0;\n" +
"    float: left; }\n" +
"\n" +
"  .column.large-centered:last-child,\n" +
"  .columns.large-centered:last-child {\n" +
"    float: none; }\n" +
"\n" +
"  .column.large-uncentered:last-child,\n" +
"  .columns.large-uncentered:last-child {\n" +
"    float: left; }\n" +
"\n" +
"  .column.large-uncentered.opposite,\n" +
"  .columns.large-uncentered.opposite {\n" +
"    float: right; }\n" +
"\n" +
"  .push-0 {\n" +
"    position: relative;\n" +
"    left: 0%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-0 {\n" +
"    position: relative;\n" +
"    right: 0%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-1 {\n" +
"    position: relative;\n" +
"    left: 8.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-1 {\n" +
"    position: relative;\n" +
"    right: 8.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-2 {\n" +
"    position: relative;\n" +
"    left: 16.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-2 {\n" +
"    position: relative;\n" +
"    right: 16.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-3 {\n" +
"    position: relative;\n" +
"    left: 25%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-3 {\n" +
"    position: relative;\n" +
"    right: 25%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-4 {\n" +
"    position: relative;\n" +
"    left: 33.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-4 {\n" +
"    position: relative;\n" +
"    right: 33.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-5 {\n" +
"    position: relative;\n" +
"    left: 41.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-5 {\n" +
"    position: relative;\n" +
"    right: 41.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-6 {\n" +
"    position: relative;\n" +
"    left: 50%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-6 {\n" +
"    position: relative;\n" +
"    right: 50%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-7 {\n" +
"    position: relative;\n" +
"    left: 58.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-7 {\n" +
"    position: relative;\n" +
"    right: 58.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-8 {\n" +
"    position: relative;\n" +
"    left: 66.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-8 {\n" +
"    position: relative;\n" +
"    right: 66.66667%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-9 {\n" +
"    position: relative;\n" +
"    left: 75%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-9 {\n" +
"    position: relative;\n" +
"    right: 75%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-10 {\n" +
"    position: relative;\n" +
"    left: 83.33333%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-10 {\n" +
"    position: relative;\n" +
"    right: 83.33333%;\n" +
"    left: auto; }\n" +
"\n" +
"  .push-11 {\n" +
"    position: relative;\n" +
"    left: 91.66667%;\n" +
"    right: auto; }\n" +
"\n" +
"  .pull-11 {\n" +
"    position: relative;\n" +
"    right: 91.66667%;\n" +
"    left: auto; } }\n" +
".accordion {\n" +
"  margin-bottom: 0; }\n" +
"  .accordion:before, .accordion:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .accordion:after {\n" +
"    clear: both; }\n" +
"  .accordion .accordion-navigation, .accordion dd {\n" +
"    display: block;\n" +
"    margin-bottom: 0 !important; }\n" +
"    .accordion .accordion-navigation.active > a, .accordion dd.active > a {\n" +
"      background: #e8e8e8; }\n" +
"    .accordion .accordion-navigation > a, .accordion dd > a {\n" +
"      background: #efefef;\n" +
"      color: #222222;\n" +
"      padding: 1rem;\n" +
"      display: block;\n" +
"      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"      font-size: 1rem; }\n" +
"      .accordion .accordion-navigation > a:hover, .accordion dd > a:hover {\n" +
"        background: #e3e3e3; }\n" +
"    .accordion .accordion-navigation > .content, .accordion dd > .content {\n" +
"      display: none;\n" +
"      padding: 0.9375rem; }\n" +
"      .accordion .accordion-navigation > .content.active, .accordion dd > .content.active {\n" +
"        display: block;\n" +
"        background: white; }\n" +
"\n" +
".alert-box {\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  display: block;\n" +
"  font-weight: normal;\n" +
"  margin-bottom: 1.25rem;\n" +
"  position: relative;\n" +
"  padding: 0.875rem 1.5rem 0.875rem 0.875rem;\n" +
"  font-size: 0.8125rem;\n" +
"  transition: opacity 300ms ease-out;\n" +
"  background-color: #008cba;\n" +
"  border-color: #0078a0;\n" +
"  color: white; }\n" +
"  .alert-box .close {\n" +
"    font-size: 1.375rem;\n" +
"    padding: 9px 6px 4px;\n" +
"    line-height: 0;\n" +
"    position: absolute;\n" +
"    top: 50%;\n" +
"    margin-top: -0.6875rem;\n" +
"    right: 0.25rem;\n" +
"    color: #333333;\n" +
"    opacity: 0.3; }\n" +
"    .alert-box .close:hover, .alert-box .close:focus {\n" +
"      opacity: 0.5; }\n" +
"  .alert-box.radius {\n" +
"    border-radius: 3px; }\n" +
"  .alert-box.round {\n" +
"    border-radius: 1000px; }\n" +
"  .alert-box.success {\n" +
"    background-color: #43ac6a;\n" +
"    border-color: #3a945b;\n" +
"    color: white; }\n" +
"  .alert-box.alert {\n" +
"    background-color: #f04124;\n" +
"    border-color: #de2d0f;\n" +
"    color: white; }\n" +
"  .alert-box.secondary {\n" +
"    background-color: #e7e7e7;\n" +
"    border-color: #c7c7c7;\n" +
"    color: #4f4f4f; }\n" +
"  .alert-box.warning {\n" +
"    background-color: #f08a24;\n" +
"    border-color: #de770f;\n" +
"    color: white; }\n" +
"  .alert-box.info {\n" +
"    background-color: #a0d3e8;\n" +
"    border-color: #74bfdd;\n" +
"    color: #4f4f4f; }\n" +
"  .alert-box.alert-close {\n" +
"    opacity: 0; }\n" +
"\n" +
"[class*=\"block-grid-\"] {\n" +
"  display: block;\n" +
"  padding: 0;\n" +
"  margin: 0 -0.625rem; }\n" +
"  [class*=\"block-grid-\"]:before, [class*=\"block-grid-\"]:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  [class*=\"block-grid-\"]:after {\n" +
"    clear: both; }\n" +
"  [class*=\"block-grid-\"] > li {\n" +
"    display: block;\n" +
"    height: auto;\n" +
"    float: left;\n" +
"    padding: 0 0.625rem 1.25rem; }\n" +
"\n" +
"@media only screen {\n" +
"  .small-block-grid-1 > li {\n" +
"    width: 100%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-1 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-1 > li:nth-of-type(1n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-2 > li {\n" +
"    width: 50%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-2 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-2 > li:nth-of-type(2n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-3 > li {\n" +
"    width: 33.33333%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-3 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-3 > li:nth-of-type(3n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-4 > li {\n" +
"    width: 25%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-4 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-4 > li:nth-of-type(4n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-5 > li {\n" +
"    width: 20%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-5 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-5 > li:nth-of-type(5n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-6 > li {\n" +
"    width: 16.66667%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-6 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-6 > li:nth-of-type(6n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-7 > li {\n" +
"    width: 14.28571%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-7 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-7 > li:nth-of-type(7n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-8 > li {\n" +
"    width: 12.5%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-8 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-8 > li:nth-of-type(8n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-9 > li {\n" +
"    width: 11.11111%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-9 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-9 > li:nth-of-type(9n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-10 > li {\n" +
"    width: 10%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-10 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-10 > li:nth-of-type(10n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-11 > li {\n" +
"    width: 9.09091%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-11 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-11 > li:nth-of-type(11n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .small-block-grid-12 > li {\n" +
"    width: 8.33333%;\n" +
"    list-style: none; }\n" +
"    .small-block-grid-12 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .small-block-grid-12 > li:nth-of-type(12n+1) {\n" +
"      clear: both; } }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .medium-block-grid-1 > li {\n" +
"    width: 100%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-1 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-1 > li:nth-of-type(1n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-2 > li {\n" +
"    width: 50%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-2 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-2 > li:nth-of-type(2n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-3 > li {\n" +
"    width: 33.33333%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-3 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-3 > li:nth-of-type(3n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-4 > li {\n" +
"    width: 25%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-4 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-4 > li:nth-of-type(4n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-5 > li {\n" +
"    width: 20%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-5 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-5 > li:nth-of-type(5n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-6 > li {\n" +
"    width: 16.66667%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-6 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-6 > li:nth-of-type(6n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-7 > li {\n" +
"    width: 14.28571%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-7 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-7 > li:nth-of-type(7n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-8 > li {\n" +
"    width: 12.5%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-8 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-8 > li:nth-of-type(8n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-9 > li {\n" +
"    width: 11.11111%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-9 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-9 > li:nth-of-type(9n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-10 > li {\n" +
"    width: 10%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-10 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-10 > li:nth-of-type(10n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-11 > li {\n" +
"    width: 9.09091%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-11 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-11 > li:nth-of-type(11n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .medium-block-grid-12 > li {\n" +
"    width: 8.33333%;\n" +
"    list-style: none; }\n" +
"    .medium-block-grid-12 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .medium-block-grid-12 > li:nth-of-type(12n+1) {\n" +
"      clear: both; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .large-block-grid-1 > li {\n" +
"    width: 100%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-1 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-1 > li:nth-of-type(1n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-2 > li {\n" +
"    width: 50%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-2 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-2 > li:nth-of-type(2n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-3 > li {\n" +
"    width: 33.33333%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-3 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-3 > li:nth-of-type(3n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-4 > li {\n" +
"    width: 25%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-4 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-4 > li:nth-of-type(4n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-5 > li {\n" +
"    width: 20%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-5 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-5 > li:nth-of-type(5n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-6 > li {\n" +
"    width: 16.66667%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-6 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-6 > li:nth-of-type(6n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-7 > li {\n" +
"    width: 14.28571%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-7 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-7 > li:nth-of-type(7n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-8 > li {\n" +
"    width: 12.5%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-8 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-8 > li:nth-of-type(8n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-9 > li {\n" +
"    width: 11.11111%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-9 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-9 > li:nth-of-type(9n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-10 > li {\n" +
"    width: 10%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-10 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-10 > li:nth-of-type(10n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-11 > li {\n" +
"    width: 9.09091%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-11 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-11 > li:nth-of-type(11n+1) {\n" +
"      clear: both; }\n" +
"\n" +
"  .large-block-grid-12 > li {\n" +
"    width: 8.33333%;\n" +
"    list-style: none; }\n" +
"    .large-block-grid-12 > li:nth-of-type(1n) {\n" +
"      clear: none; }\n" +
"    .large-block-grid-12 > li:nth-of-type(12n+1) {\n" +
"      clear: both; } }\n" +
".breadcrumbs {\n" +
"  display: block;\n" +
"  padding: 0.5625rem 0.875rem 0.5625rem;\n" +
"  overflow: hidden;\n" +
"  margin-left: 0;\n" +
"  list-style: none;\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  background-color: #f4f4f4;\n" +
"  border-color: gainsboro;\n" +
"  border-radius: 3px; }\n" +
"  .breadcrumbs > * {\n" +
"    margin: 0;\n" +
"    float: left;\n" +
"    font-size: 0.6875rem;\n" +
"    line-height: 0.6875rem;\n" +
"    text-transform: uppercase;\n" +
"    color: #008cba; }\n" +
"    .breadcrumbs > *:hover a, .breadcrumbs > *:focus a {\n" +
"      text-decoration: underline; }\n" +
"    .breadcrumbs > * a {\n" +
"      color: #008cba; }\n" +
"    .breadcrumbs > *.current {\n" +
"      cursor: default;\n" +
"      color: #333333; }\n" +
"      .breadcrumbs > *.current a {\n" +
"        cursor: default;\n" +
"        color: #333333; }\n" +
"      .breadcrumbs > *.current:hover, .breadcrumbs > *.current:hover a, .breadcrumbs > *.current:focus, .breadcrumbs > *.current:focus a {\n" +
"        text-decoration: none; }\n" +
"    .breadcrumbs > *.unavailable {\n" +
"      color: #999999; }\n" +
"      .breadcrumbs > *.unavailable a {\n" +
"        color: #999999; }\n" +
"      .breadcrumbs > *.unavailable:hover, .breadcrumbs > *.unavailable:hover a, .breadcrumbs > *.unavailable:focus,\n" +
"      .breadcrumbs > *.unavailable a:focus {\n" +
"        text-decoration: none;\n" +
"        color: #999999;\n" +
"        cursor: default; }\n" +
"    .breadcrumbs > *:before {\n" +
"      content: \"/\";\n" +
"      color: #aaaaaa;\n" +
"      margin: 0 0.75rem;\n" +
"      position: relative;\n" +
"      top: 1px; }\n" +
"    .breadcrumbs > *:first-child:before {\n" +
"      content: \" \";\n" +
"      margin: 0; }\n" +
"\n" +
"/* Accessibility - hides the forward slash */\n" +
"[aria-label=\"breadcrumbs\"] [aria-hidden=\"true\"]:after {\n" +
"  content: \"/\"; }\n" +
"\n" +
"button, .button {\n" +
"  border-style: solid;\n" +
"  border-width: 0px;\n" +
"  cursor: pointer;\n" +
"  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"  font-weight: normal;\n" +
"  line-height: normal;\n" +
"  margin: 0 0 1.25rem;\n" +
"  position: relative;\n" +
"  text-decoration: none;\n" +
"  text-align: center;\n" +
"  -webkit-appearance: none;\n" +
"  -webkit-border-radius: 0;\n" +
"  display: inline-block;\n" +
"  padding-top: 1rem;\n" +
"  padding-right: 2rem;\n" +
"  padding-bottom: 1.0625rem;\n" +
"  padding-left: 2rem;\n" +
"  font-size: 1rem;\n" +
"  background-color: #008cba;\n" +
"  border-color: #007095;\n" +
"  color: white;\n" +
"  transition: background-color 300ms ease-out; }\n" +
"  button:hover, button:focus, .button:hover, .button:focus {\n" +
"    background-color: #007095; }\n" +
"  button:hover, button:focus, .button:hover, .button:focus {\n" +
"    color: white; }\n" +
"  button.secondary, .button.secondary {\n" +
"    background-color: #e7e7e7;\n" +
"    border-color: #b9b9b9;\n" +
"    color: #333333; }\n" +
"    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {\n" +
"      background-color: #b9b9b9; }\n" +
"    button.secondary:hover, button.secondary:focus, .button.secondary:hover, .button.secondary:focus {\n" +
"      color: #333333; }\n" +
"  button.success, .button.success {\n" +
"    background-color: #43ac6a;\n" +
"    border-color: #368a55;\n" +
"    color: white; }\n" +
"    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {\n" +
"      background-color: #368a55; }\n" +
"    button.success:hover, button.success:focus, .button.success:hover, .button.success:focus {\n" +
"      color: white; }\n" +
"  button.alert, .button.alert {\n" +
"    background-color: #f04124;\n" +
"    border-color: #cf2a0e;\n" +
"    color: white; }\n" +
"    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {\n" +
"      background-color: #cf2a0e; }\n" +
"    button.alert:hover, button.alert:focus, .button.alert:hover, .button.alert:focus {\n" +
"      color: white; }\n" +
"  button.warning, .button.warning {\n" +
"    background-color: #f08a24;\n" +
"    border-color: #cf6e0e;\n" +
"    color: white; }\n" +
"    button.warning:hover, button.warning:focus, .button.warning:hover, .button.warning:focus {\n" +
"      background-color: #cf6e0e; }\n" +
"    button.warning:hover, button.warning:focus, .button.warning:hover, .button.warning:focus {\n" +
"      color: white; }\n" +
"  button.info, .button.info {\n" +
"    background-color: #a0d3e8;\n" +
"    border-color: #61b6d9;\n" +
"    color: #333333; }\n" +
"    button.info:hover, button.info:focus, .button.info:hover, .button.info:focus {\n" +
"      background-color: #61b6d9; }\n" +
"    button.info:hover, button.info:focus, .button.info:hover, .button.info:focus {\n" +
"      color: white; }\n" +
"  button.large, .button.large {\n" +
"    padding-top: 1.125rem;\n" +
"    padding-right: 2.25rem;\n" +
"    padding-bottom: 1.1875rem;\n" +
"    padding-left: 2.25rem;\n" +
"    font-size: 1.25rem; }\n" +
"  button.small, .button.small {\n" +
"    padding-top: 0.875rem;\n" +
"    padding-right: 1.75rem;\n" +
"    padding-bottom: 0.9375rem;\n" +
"    padding-left: 1.75rem;\n" +
"    font-size: 0.8125rem; }\n" +
"  button.tiny, .button.tiny {\n" +
"    padding-top: 0.625rem;\n" +
"    padding-right: 1.25rem;\n" +
"    padding-bottom: 0.6875rem;\n" +
"    padding-left: 1.25rem;\n" +
"    font-size: 0.6875rem; }\n" +
"  button.expand, .button.expand {\n" +
"    padding-right: 0;\n" +
"    padding-left: 0;\n" +
"    width: 100%; }\n" +
"  button.left-align, .button.left-align {\n" +
"    text-align: left;\n" +
"    text-indent: 0.75rem; }\n" +
"  button.right-align, .button.right-align {\n" +
"    text-align: right;\n" +
"    padding-right: 0.75rem; }\n" +
"  button.radius, .button.radius {\n" +
"    border-radius: 3px; }\n" +
"  button.round, .button.round {\n" +
"    border-radius: 1000px; }\n" +
"  button.disabled, button[disabled], .button.disabled, .button[disabled] {\n" +
"    background-color: #008cba;\n" +
"    border-color: #007095;\n" +
"    color: white;\n" +
"    cursor: default;\n" +
"    opacity: 0.7;\n" +
"    box-shadow: none; }\n" +
"    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n" +
"      background-color: #007095; }\n" +
"    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n" +
"      color: white; }\n" +
"    button.disabled:hover, button.disabled:focus, button[disabled]:hover, button[disabled]:focus, .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n" +
"      background-color: #008cba; }\n" +
"    button.disabled.secondary, button[disabled].secondary, .button.disabled.secondary, .button[disabled].secondary {\n" +
"      background-color: #e7e7e7;\n" +
"      border-color: #b9b9b9;\n" +
"      color: #333333;\n" +
"      cursor: default;\n" +
"      opacity: 0.7;\n" +
"      box-shadow: none; }\n" +
"      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n" +
"        background-color: #b9b9b9; }\n" +
"      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n" +
"        color: #333333; }\n" +
"      button.disabled.secondary:hover, button.disabled.secondary:focus, button[disabled].secondary:hover, button[disabled].secondary:focus, .button.disabled.secondary:hover, .button.disabled.secondary:focus, .button[disabled].secondary:hover, .button[disabled].secondary:focus {\n" +
"        background-color: #e7e7e7; }\n" +
"    button.disabled.success, button[disabled].success, .button.disabled.success, .button[disabled].success {\n" +
"      background-color: #43ac6a;\n" +
"      border-color: #368a55;\n" +
"      color: white;\n" +
"      cursor: default;\n" +
"      opacity: 0.7;\n" +
"      box-shadow: none; }\n" +
"      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n" +
"        background-color: #368a55; }\n" +
"      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n" +
"        color: white; }\n" +
"      button.disabled.success:hover, button.disabled.success:focus, button[disabled].success:hover, button[disabled].success:focus, .button.disabled.success:hover, .button.disabled.success:focus, .button[disabled].success:hover, .button[disabled].success:focus {\n" +
"        background-color: #43ac6a; }\n" +
"    button.disabled.alert, button[disabled].alert, .button.disabled.alert, .button[disabled].alert {\n" +
"      background-color: #f04124;\n" +
"      border-color: #cf2a0e;\n" +
"      color: white;\n" +
"      cursor: default;\n" +
"      opacity: 0.7;\n" +
"      box-shadow: none; }\n" +
"      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n" +
"        background-color: #cf2a0e; }\n" +
"      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n" +
"        color: white; }\n" +
"      button.disabled.alert:hover, button.disabled.alert:focus, button[disabled].alert:hover, button[disabled].alert:focus, .button.disabled.alert:hover, .button.disabled.alert:focus, .button[disabled].alert:hover, .button[disabled].alert:focus {\n" +
"        background-color: #f04124; }\n" +
"    button.disabled.warning, button[disabled].warning, .button.disabled.warning, .button[disabled].warning {\n" +
"      background-color: #f08a24;\n" +
"      border-color: #cf6e0e;\n" +
"      color: white;\n" +
"      cursor: default;\n" +
"      opacity: 0.7;\n" +
"      box-shadow: none; }\n" +
"      button.disabled.warning:hover, button.disabled.warning:focus, button[disabled].warning:hover, button[disabled].warning:focus, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n" +
"        background-color: #cf6e0e; }\n" +
"      button.disabled.warning:hover, button.disabled.warning:focus, button[disabled].warning:hover, button[disabled].warning:focus, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n" +
"        color: white; }\n" +
"      button.disabled.warning:hover, button.disabled.warning:focus, button[disabled].warning:hover, button[disabled].warning:focus, .button.disabled.warning:hover, .button.disabled.warning:focus, .button[disabled].warning:hover, .button[disabled].warning:focus {\n" +
"        background-color: #f08a24; }\n" +
"    button.disabled.info, button[disabled].info, .button.disabled.info, .button[disabled].info {\n" +
"      background-color: #a0d3e8;\n" +
"      border-color: #61b6d9;\n" +
"      color: #333333;\n" +
"      cursor: default;\n" +
"      opacity: 0.7;\n" +
"      box-shadow: none; }\n" +
"      button.disabled.info:hover, button.disabled.info:focus, button[disabled].info:hover, button[disabled].info:focus, .button.disabled.info:hover, .button.disabled.info:focus, .button[disabled].info:hover, .button[disabled].info:focus {\n" +
"        background-color: #61b6d9; }\n" +
"      button.disabled.info:hover, button.disabled.info:focus, button[disabled].info:hover, button[disabled].info:focus, .button.disabled.info:hover, .button.disabled.info:focus, .button[disabled].info:hover, .button[disabled].info:focus {\n" +
"        color: white; }\n" +
"      button.disabled.info:hover, button.disabled.info:focus, button[disabled].info:hover, button[disabled].info:focus, .button.disabled.info:hover, .button.disabled.info:focus, .button[disabled].info:hover, .button[disabled].info:focus {\n" +
"        background-color: #a0d3e8; }\n" +
"\n" +
"button::-moz-focus-inner {\n" +
"  border: 0;\n" +
"  padding: 0; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  button, .button {\n" +
"    display: inline-block; } }\n" +
".button-group {\n" +
"  list-style: none;\n" +
"  margin: 0;\n" +
"  left: 0; }\n" +
"  .button-group:before, .button-group:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .button-group:after {\n" +
"    clear: both; }\n" +
"  .button-group > li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block; }\n" +
"    .button-group > li > button, .button-group > li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group > li:first-child button, .button-group > li:first-child .button {\n" +
"      border-left: 0; }\n" +
"  .button-group.stack > li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    display: block;\n" +
"    margin: 0;\n" +
"    float: none; }\n" +
"    .button-group.stack > li > button, .button-group.stack > li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.stack > li:first-child button, .button-group.stack > li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.stack > li > button, .button-group.stack > li .button {\n" +
"      border-top: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5);\n" +
"      border-left-width: 0px;\n" +
"      margin: 0;\n" +
"      display: block; }\n" +
"    .button-group.stack > li:first-child button, .button-group.stack > li:first-child .button {\n" +
"      border-top: 0; }\n" +
"  .button-group.stack-for-small > li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block; }\n" +
"    .button-group.stack-for-small > li > button, .button-group.stack-for-small > li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.stack-for-small > li:first-child button, .button-group.stack-for-small > li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    @media only screen and (max-width: 40em) {\n" +
"      .button-group.stack-for-small > li {\n" +
"        margin: 0 -2px;\n" +
"        float: left;\n" +
"        display: inline-block;\n" +
"        display: block;\n" +
"        margin: 0; }\n" +
"        .button-group.stack-for-small > li > button, .button-group.stack-for-small > li .button {\n" +
"          border-left: 1px solid;\n" +
"          border-color: rgba(255, 255, 255, 0.5); }\n" +
"        .button-group.stack-for-small > li:first-child button, .button-group.stack-for-small > li:first-child .button {\n" +
"          border-left: 0; }\n" +
"        .button-group.stack-for-small > li > button, .button-group.stack-for-small > li .button {\n" +
"          border-top: 1px solid;\n" +
"          border-color: rgba(255, 255, 255, 0.5);\n" +
"          border-left-width: 0px;\n" +
"          margin: 0;\n" +
"          display: block; }\n" +
"        .button-group.stack-for-small > li:first-child button, .button-group.stack-for-small > li:first-child .button {\n" +
"          border-top: 0; } }\n" +
"  .button-group.radius > * {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block; }\n" +
"    .button-group.radius > * > button, .button-group.radius > * .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.radius > *:first-child button, .button-group.radius > *:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.radius > *, .button-group.radius > * > a, .button-group.radius > * > button, .button-group.radius > * > .button {\n" +
"      border-radius: 0; }\n" +
"    .button-group.radius > *:first-child, .button-group.radius > *:first-child > a, .button-group.radius > *:first-child > button, .button-group.radius > *:first-child > .button {\n" +
"      -webkit-border-bottom-left-radius: 3px;\n" +
"      -webkit-border-top-left-radius: 3px;\n" +
"      border-bottom-left-radius: 3px;\n" +
"      border-top-left-radius: 3px; }\n" +
"    .button-group.radius > *:last-child, .button-group.radius > *:last-child > a, .button-group.radius > *:last-child > button, .button-group.radius > *:last-child > .button {\n" +
"      -webkit-border-bottom-right-radius: 3px;\n" +
"      -webkit-border-top-right-radius: 3px;\n" +
"      border-bottom-right-radius: 3px;\n" +
"      border-top-right-radius: 3px; }\n" +
"  .button-group.radius.stack > * {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    display: block;\n" +
"    margin: 0; }\n" +
"    .button-group.radius.stack > * > button, .button-group.radius.stack > * .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.radius.stack > *:first-child button, .button-group.radius.stack > *:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.radius.stack > * > button, .button-group.radius.stack > * .button {\n" +
"      border-top: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5);\n" +
"      border-left-width: 0px;\n" +
"      margin: 0;\n" +
"      display: block; }\n" +
"    .button-group.radius.stack > *:first-child button, .button-group.radius.stack > *:first-child .button {\n" +
"      border-top: 0; }\n" +
"    .button-group.radius.stack > *, .button-group.radius.stack > * > a, .button-group.radius.stack > * > button, .button-group.radius.stack > * > .button {\n" +
"      border-radius: 0; }\n" +
"    .button-group.radius.stack > *:first-child, .button-group.radius.stack > *:first-child > a, .button-group.radius.stack > *:first-child > button, .button-group.radius.stack > *:first-child > .button {\n" +
"      -webkit-top-left-radius: 3px;\n" +
"      -webkit-top-right-radius: 3px;\n" +
"      border-top-left-radius: 3px;\n" +
"      border-top-right-radius: 3px; }\n" +
"    .button-group.radius.stack > *:last-child, .button-group.radius.stack > *:last-child > a, .button-group.radius.stack > *:last-child > button, .button-group.radius.stack > *:last-child > .button {\n" +
"      -webkit-bottom-left-radius: 3px;\n" +
"      -webkit-bottom-right-radius: 3px;\n" +
"      border-bottom-left-radius: 3px;\n" +
"      border-bottom-right-radius: 3px; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .button-group.radius.stack-for-small > * {\n" +
"      margin: 0 -2px;\n" +
"      float: left;\n" +
"      display: inline-block; }\n" +
"      .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * .button {\n" +
"        border-left: 1px solid;\n" +
"        border-color: rgba(255, 255, 255, 0.5); }\n" +
"      .button-group.radius.stack-for-small > *:first-child button, .button-group.radius.stack-for-small > *:first-child .button {\n" +
"        border-left: 0; }\n" +
"      .button-group.radius.stack-for-small > *, .button-group.radius.stack-for-small > * > a, .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * > .button {\n" +
"        border-radius: 0; }\n" +
"      .button-group.radius.stack-for-small > *:first-child, .button-group.radius.stack-for-small > *:first-child > a, .button-group.radius.stack-for-small > *:first-child > button, .button-group.radius.stack-for-small > *:first-child > .button {\n" +
"        -webkit-border-bottom-left-radius: 3px;\n" +
"        -webkit-border-top-left-radius: 3px;\n" +
"        border-bottom-left-radius: 3px;\n" +
"        border-top-left-radius: 3px; }\n" +
"      .button-group.radius.stack-for-small > *:last-child, .button-group.radius.stack-for-small > *:last-child > a, .button-group.radius.stack-for-small > *:last-child > button, .button-group.radius.stack-for-small > *:last-child > .button {\n" +
"        -webkit-border-bottom-right-radius: 3px;\n" +
"        -webkit-border-top-right-radius: 3px;\n" +
"        border-bottom-right-radius: 3px;\n" +
"        border-top-right-radius: 3px; } }\n" +
"  @media only screen and (max-width: 40em) {\n" +
"    .button-group.radius.stack-for-small > * {\n" +
"      margin: 0 -2px;\n" +
"      float: left;\n" +
"      display: inline-block;\n" +
"      display: block;\n" +
"      margin: 0; }\n" +
"      .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * .button {\n" +
"        border-left: 1px solid;\n" +
"        border-color: rgba(255, 255, 255, 0.5); }\n" +
"      .button-group.radius.stack-for-small > *:first-child button, .button-group.radius.stack-for-small > *:first-child .button {\n" +
"        border-left: 0; }\n" +
"      .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * .button {\n" +
"        border-top: 1px solid;\n" +
"        border-color: rgba(255, 255, 255, 0.5);\n" +
"        border-left-width: 0px;\n" +
"        margin: 0;\n" +
"        display: block; }\n" +
"      .button-group.radius.stack-for-small > *:first-child button, .button-group.radius.stack-for-small > *:first-child .button {\n" +
"        border-top: 0; }\n" +
"      .button-group.radius.stack-for-small > *, .button-group.radius.stack-for-small > * > a, .button-group.radius.stack-for-small > * > button, .button-group.radius.stack-for-small > * > .button {\n" +
"        border-radius: 0; }\n" +
"      .button-group.radius.stack-for-small > *:first-child, .button-group.radius.stack-for-small > *:first-child > a, .button-group.radius.stack-for-small > *:first-child > button, .button-group.radius.stack-for-small > *:first-child > .button {\n" +
"        -webkit-top-left-radius: 3px;\n" +
"        -webkit-top-right-radius: 3px;\n" +
"        border-top-left-radius: 3px;\n" +
"        border-top-right-radius: 3px; }\n" +
"      .button-group.radius.stack-for-small > *:last-child, .button-group.radius.stack-for-small > *:last-child > a, .button-group.radius.stack-for-small > *:last-child > button, .button-group.radius.stack-for-small > *:last-child > .button {\n" +
"        -webkit-bottom-left-radius: 3px;\n" +
"        -webkit-bottom-right-radius: 3px;\n" +
"        border-bottom-left-radius: 3px;\n" +
"        border-bottom-right-radius: 3px; } }\n" +
"  .button-group.round > * {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block; }\n" +
"    .button-group.round > * > button, .button-group.round > * .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.round > *:first-child button, .button-group.round > *:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.round > *, .button-group.round > * > a, .button-group.round > * > button, .button-group.round > * > .button {\n" +
"      border-radius: 0; }\n" +
"    .button-group.round > *:first-child, .button-group.round > *:first-child > a, .button-group.round > *:first-child > button, .button-group.round > *:first-child > .button {\n" +
"      -webkit-border-bottom-left-radius: 1000px;\n" +
"      -webkit-border-top-left-radius: 1000px;\n" +
"      border-bottom-left-radius: 1000px;\n" +
"      border-top-left-radius: 1000px; }\n" +
"    .button-group.round > *:last-child, .button-group.round > *:last-child > a, .button-group.round > *:last-child > button, .button-group.round > *:last-child > .button {\n" +
"      -webkit-border-bottom-right-radius: 1000px;\n" +
"      -webkit-border-top-right-radius: 1000px;\n" +
"      border-bottom-right-radius: 1000px;\n" +
"      border-top-right-radius: 1000px; }\n" +
"  .button-group.round.stack > * {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    display: block;\n" +
"    margin: 0; }\n" +
"    .button-group.round.stack > * > button, .button-group.round.stack > * .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.round.stack > *:first-child button, .button-group.round.stack > *:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.round.stack > * > button, .button-group.round.stack > * .button {\n" +
"      border-top: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5);\n" +
"      border-left-width: 0px;\n" +
"      margin: 0;\n" +
"      display: block; }\n" +
"    .button-group.round.stack > *:first-child button, .button-group.round.stack > *:first-child .button {\n" +
"      border-top: 0; }\n" +
"    .button-group.round.stack > *, .button-group.round.stack > * > a, .button-group.round.stack > * > button, .button-group.round.stack > * > .button {\n" +
"      border-radius: 0; }\n" +
"    .button-group.round.stack > *:first-child, .button-group.round.stack > *:first-child > a, .button-group.round.stack > *:first-child > button, .button-group.round.stack > *:first-child > .button {\n" +
"      -webkit-top-left-radius: 1rem;\n" +
"      -webkit-top-right-radius: 1rem;\n" +
"      border-top-left-radius: 1rem;\n" +
"      border-top-right-radius: 1rem; }\n" +
"    .button-group.round.stack > *:last-child, .button-group.round.stack > *:last-child > a, .button-group.round.stack > *:last-child > button, .button-group.round.stack > *:last-child > .button {\n" +
"      -webkit-bottom-left-radius: 1rem;\n" +
"      -webkit-bottom-right-radius: 1rem;\n" +
"      border-bottom-left-radius: 1rem;\n" +
"      border-bottom-right-radius: 1rem; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .button-group.round.stack-for-small > * {\n" +
"      margin: 0 -2px;\n" +
"      float: left;\n" +
"      display: inline-block; }\n" +
"      .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * .button {\n" +
"        border-left: 1px solid;\n" +
"        border-color: rgba(255, 255, 255, 0.5); }\n" +
"      .button-group.round.stack-for-small > *:first-child button, .button-group.round.stack-for-small > *:first-child .button {\n" +
"        border-left: 0; }\n" +
"      .button-group.round.stack-for-small > *, .button-group.round.stack-for-small > * > a, .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * > .button {\n" +
"        border-radius: 0; }\n" +
"      .button-group.round.stack-for-small > *:first-child, .button-group.round.stack-for-small > *:first-child > a, .button-group.round.stack-for-small > *:first-child > button, .button-group.round.stack-for-small > *:first-child > .button {\n" +
"        -webkit-border-bottom-left-radius: 1000px;\n" +
"        -webkit-border-top-left-radius: 1000px;\n" +
"        border-bottom-left-radius: 1000px;\n" +
"        border-top-left-radius: 1000px; }\n" +
"      .button-group.round.stack-for-small > *:last-child, .button-group.round.stack-for-small > *:last-child > a, .button-group.round.stack-for-small > *:last-child > button, .button-group.round.stack-for-small > *:last-child > .button {\n" +
"        -webkit-border-bottom-right-radius: 1000px;\n" +
"        -webkit-border-top-right-radius: 1000px;\n" +
"        border-bottom-right-radius: 1000px;\n" +
"        border-top-right-radius: 1000px; } }\n" +
"  @media only screen and (max-width: 40em) {\n" +
"    .button-group.round.stack-for-small > * {\n" +
"      margin: 0 -2px;\n" +
"      float: left;\n" +
"      display: inline-block;\n" +
"      display: block;\n" +
"      margin: 0; }\n" +
"      .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * .button {\n" +
"        border-left: 1px solid;\n" +
"        border-color: rgba(255, 255, 255, 0.5); }\n" +
"      .button-group.round.stack-for-small > *:first-child button, .button-group.round.stack-for-small > *:first-child .button {\n" +
"        border-left: 0; }\n" +
"      .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * .button {\n" +
"        border-top: 1px solid;\n" +
"        border-color: rgba(255, 255, 255, 0.5);\n" +
"        border-left-width: 0px;\n" +
"        margin: 0;\n" +
"        display: block; }\n" +
"      .button-group.round.stack-for-small > *:first-child button, .button-group.round.stack-for-small > *:first-child .button {\n" +
"        border-top: 0; }\n" +
"      .button-group.round.stack-for-small > *, .button-group.round.stack-for-small > * > a, .button-group.round.stack-for-small > * > button, .button-group.round.stack-for-small > * > .button {\n" +
"        border-radius: 0; }\n" +
"      .button-group.round.stack-for-small > *:first-child, .button-group.round.stack-for-small > *:first-child > a, .button-group.round.stack-for-small > *:first-child > button, .button-group.round.stack-for-small > *:first-child > .button {\n" +
"        -webkit-top-left-radius: 1rem;\n" +
"        -webkit-top-right-radius: 1rem;\n" +
"        border-top-left-radius: 1rem;\n" +
"        border-top-right-radius: 1rem; }\n" +
"      .button-group.round.stack-for-small > *:last-child, .button-group.round.stack-for-small > *:last-child > a, .button-group.round.stack-for-small > *:last-child > button, .button-group.round.stack-for-small > *:last-child > .button {\n" +
"        -webkit-bottom-left-radius: 1rem;\n" +
"        -webkit-bottom-right-radius: 1rem;\n" +
"        border-bottom-left-radius: 1rem;\n" +
"        border-bottom-right-radius: 1rem; } }\n" +
"  .button-group.even-2 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 50%; }\n" +
"    .button-group.even-2 li > button, .button-group.even-2 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-2 li:first-child button, .button-group.even-2 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-2 li button, .button-group.even-2 li .button {\n" +
"      width: 100%; }\n" +
"  .button-group.even-3 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 33.33333%; }\n" +
"    .button-group.even-3 li > button, .button-group.even-3 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-3 li:first-child button, .button-group.even-3 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-3 li button, .button-group.even-3 li .button {\n" +
"      width: 100%; }\n" +
"  .button-group.even-4 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 25%; }\n" +
"    .button-group.even-4 li > button, .button-group.even-4 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-4 li:first-child button, .button-group.even-4 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-4 li button, .button-group.even-4 li .button {\n" +
"      width: 100%; }\n" +
"  .button-group.even-5 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 20%; }\n" +
"    .button-group.even-5 li > button, .button-group.even-5 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-5 li:first-child button, .button-group.even-5 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-5 li button, .button-group.even-5 li .button {\n" +
"      width: 100%; }\n" +
"  .button-group.even-6 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 16.66667%; }\n" +
"    .button-group.even-6 li > button, .button-group.even-6 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-6 li:first-child button, .button-group.even-6 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-6 li button, .button-group.even-6 li .button {\n" +
"      width: 100%; }\n" +
"  .button-group.even-7 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 14.28571%; }\n" +
"    .button-group.even-7 li > button, .button-group.even-7 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-7 li:first-child button, .button-group.even-7 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-7 li button, .button-group.even-7 li .button {\n" +
"      width: 100%; }\n" +
"  .button-group.even-8 li {\n" +
"    margin: 0 -2px;\n" +
"    float: left;\n" +
"    display: inline-block;\n" +
"    width: 12.5%; }\n" +
"    .button-group.even-8 li > button, .button-group.even-8 li .button {\n" +
"      border-left: 1px solid;\n" +
"      border-color: rgba(255, 255, 255, 0.5); }\n" +
"    .button-group.even-8 li:first-child button, .button-group.even-8 li:first-child .button {\n" +
"      border-left: 0; }\n" +
"    .button-group.even-8 li button, .button-group.even-8 li .button {\n" +
"      width: 100%; }\n" +
"\n" +
".button-bar:before, .button-bar:after {\n" +
"  content: \" \";\n" +
"  display: table; }\n" +
".button-bar:after {\n" +
"  clear: both; }\n" +
".button-bar .button-group {\n" +
"  float: left;\n" +
"  margin-right: 0.625rem; }\n" +
"  .button-bar .button-group div {\n" +
"    overflow: hidden; }\n" +
"\n" +
"/* Clearing Styles */\n" +
".clearing-thumbs, [data-clearing] {\n" +
"  margin-bottom: 0;\n" +
"  margin-left: 0;\n" +
"  list-style: none; }\n" +
"  .clearing-thumbs:before, .clearing-thumbs:after, [data-clearing]:before, [data-clearing]:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .clearing-thumbs:after, [data-clearing]:after {\n" +
"    clear: both; }\n" +
"  .clearing-thumbs li, [data-clearing] li {\n" +
"    float: left;\n" +
"    margin-right: 10px; }\n" +
"  .clearing-thumbs[class*=\"block-grid-\"] li, [data-clearing][class*=\"block-grid-\"] li {\n" +
"    margin-right: 0; }\n" +
"\n" +
".clearing-blackout {\n" +
"  background: #333333;\n" +
"  position: fixed;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  z-index: 998; }\n" +
"  .clearing-blackout .clearing-close {\n" +
"    display: block; }\n" +
"\n" +
".clearing-container {\n" +
"  position: relative;\n" +
"  z-index: 998;\n" +
"  height: 100%;\n" +
"  overflow: hidden;\n" +
"  margin: 0; }\n" +
"\n" +
".clearing-touch-label {\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  color: #aaaaaa;\n" +
"  font-size: 0.6em; }\n" +
"\n" +
".visible-img {\n" +
"  height: 95%;\n" +
"  position: relative; }\n" +
"  .visible-img img {\n" +
"    position: absolute;\n" +
"    left: 50%;\n" +
"    top: 50%;\n" +
"    margin-left: -50%;\n" +
"    max-height: 100%;\n" +
"    max-width: 100%; }\n" +
"\n" +
".clearing-caption {\n" +
"  color: #cccccc;\n" +
"  font-size: 0.875em;\n" +
"  line-height: 1.3;\n" +
"  margin-bottom: 0;\n" +
"  text-align: center;\n" +
"  bottom: 0;\n" +
"  background: #333333;\n" +
"  width: 100%;\n" +
"  padding: 10px 30px 20px;\n" +
"  position: absolute;\n" +
"  left: 0; }\n" +
"\n" +
".clearing-close {\n" +
"  z-index: 999;\n" +
"  padding-left: 20px;\n" +
"  padding-top: 10px;\n" +
"  font-size: 30px;\n" +
"  line-height: 1;\n" +
"  color: #cccccc;\n" +
"  display: none; }\n" +
"  .clearing-close:hover, .clearing-close:focus {\n" +
"    color: #cccccc; }\n" +
"\n" +
".clearing-assembled .clearing-container {\n" +
"  height: 100%; }\n" +
"  .clearing-assembled .clearing-container .carousel > ul {\n" +
"    display: none; }\n" +
"\n" +
".clearing-feature li {\n" +
"  display: none; }\n" +
"  .clearing-feature li.clearing-featured-img {\n" +
"    display: block; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .clearing-main-prev,\n" +
"  .clearing-main-next {\n" +
"    position: absolute;\n" +
"    height: 100%;\n" +
"    width: 40px;\n" +
"    top: 0; }\n" +
"    .clearing-main-prev > span,\n" +
"    .clearing-main-next > span {\n" +
"      position: absolute;\n" +
"      top: 50%;\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: solid 12px; }\n" +
"      .clearing-main-prev > span:hover,\n" +
"      .clearing-main-next > span:hover {\n" +
"        opacity: 0.8; }\n" +
"\n" +
"  .clearing-main-prev {\n" +
"    left: 0; }\n" +
"    .clearing-main-prev > span {\n" +
"      left: 5px;\n" +
"      border-color: transparent;\n" +
"      border-right-color: #cccccc; }\n" +
"\n" +
"  .clearing-main-next {\n" +
"    right: 0; }\n" +
"    .clearing-main-next > span {\n" +
"      border-color: transparent;\n" +
"      border-left-color: #cccccc; }\n" +
"\n" +
"  .clearing-main-prev.disabled,\n" +
"  .clearing-main-next.disabled {\n" +
"    opacity: 0.3; }\n" +
"\n" +
"  .clearing-assembled .clearing-container .carousel {\n" +
"    background: rgba(51, 51, 51, 0.8);\n" +
"    height: 120px;\n" +
"    margin-top: 10px;\n" +
"    text-align: center; }\n" +
"    .clearing-assembled .clearing-container .carousel > ul {\n" +
"      display: inline-block;\n" +
"      z-index: 999;\n" +
"      height: 100%;\n" +
"      position: relative;\n" +
"      float: none; }\n" +
"      .clearing-assembled .clearing-container .carousel > ul li {\n" +
"        display: block;\n" +
"        width: 120px;\n" +
"        min-height: inherit;\n" +
"        float: left;\n" +
"        overflow: hidden;\n" +
"        margin-right: 0;\n" +
"        padding: 0;\n" +
"        position: relative;\n" +
"        cursor: pointer;\n" +
"        opacity: 0.4;\n" +
"        clear: none; }\n" +
"        .clearing-assembled .clearing-container .carousel > ul li.fix-height img {\n" +
"          height: 100%;\n" +
"          max-width: none; }\n" +
"        .clearing-assembled .clearing-container .carousel > ul li a.th {\n" +
"          border: none;\n" +
"          box-shadow: none;\n" +
"          display: block; }\n" +
"        .clearing-assembled .clearing-container .carousel > ul li img {\n" +
"          cursor: pointer !important;\n" +
"          width: 100% !important; }\n" +
"        .clearing-assembled .clearing-container .carousel > ul li.visible {\n" +
"          opacity: 1; }\n" +
"        .clearing-assembled .clearing-container .carousel > ul li:hover {\n" +
"          opacity: 0.8; }\n" +
"  .clearing-assembled .clearing-container .visible-img {\n" +
"    background: #333333;\n" +
"    overflow: hidden;\n" +
"    height: 85%; }\n" +
"\n" +
"  .clearing-close {\n" +
"    position: absolute;\n" +
"    top: 10px;\n" +
"    right: 20px;\n" +
"    padding-left: 0;\n" +
"    padding-top: 0; } }\n" +
"/* Foundation Dropdowns */\n" +
".f-dropdown {\n" +
"  position: absolute;\n" +
"  left: -9999px;\n" +
"  list-style: none;\n" +
"  margin-left: 0;\n" +
"  width: 100%;\n" +
"  max-height: none;\n" +
"  height: auto;\n" +
"  background: white;\n" +
"  border: solid 1px #cccccc;\n" +
"  font-size: 0.875rem;\n" +
"  z-index: 89;\n" +
"  margin-top: 2px;\n" +
"  max-width: 200px; }\n" +
"  .f-dropdown > *:first-child {\n" +
"    margin-top: 0; }\n" +
"  .f-dropdown > *:last-child {\n" +
"    margin-bottom: 0; }\n" +
"  .f-dropdown:before {\n" +
"    content: \"\";\n" +
"    display: block;\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    border: inset 6px;\n" +
"    border-color: transparent transparent white transparent;\n" +
"    border-bottom-style: solid;\n" +
"    position: absolute;\n" +
"    top: -12px;\n" +
"    left: 10px;\n" +
"    z-index: 89; }\n" +
"  .f-dropdown:after {\n" +
"    content: \"\";\n" +
"    display: block;\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    border: inset 7px;\n" +
"    border-color: transparent transparent #cccccc transparent;\n" +
"    border-bottom-style: solid;\n" +
"    position: absolute;\n" +
"    top: -14px;\n" +
"    left: 9px;\n" +
"    z-index: 88; }\n" +
"  .f-dropdown.right:before {\n" +
"    left: auto;\n" +
"    right: 10px; }\n" +
"  .f-dropdown.right:after {\n" +
"    left: auto;\n" +
"    right: 9px; }\n" +
"  .f-dropdown.drop-right {\n" +
"    position: absolute;\n" +
"    left: -9999px;\n" +
"    list-style: none;\n" +
"    margin-left: 0;\n" +
"    width: 100%;\n" +
"    max-height: none;\n" +
"    height: auto;\n" +
"    background: white;\n" +
"    border: solid 1px #cccccc;\n" +
"    font-size: 0.875rem;\n" +
"    z-index: 89;\n" +
"    margin-top: 0;\n" +
"    margin-left: 2px;\n" +
"    max-width: 200px; }\n" +
"    .f-dropdown.drop-right > *:first-child {\n" +
"      margin-top: 0; }\n" +
"    .f-dropdown.drop-right > *:last-child {\n" +
"      margin-bottom: 0; }\n" +
"    .f-dropdown.drop-right:before {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 6px;\n" +
"      border-color: transparent white transparent transparent;\n" +
"      border-right-style: solid;\n" +
"      position: absolute;\n" +
"      top: 10px;\n" +
"      left: -12px;\n" +
"      z-index: 89; }\n" +
"    .f-dropdown.drop-right:after {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 7px;\n" +
"      border-color: transparent #cccccc transparent transparent;\n" +
"      border-right-style: solid;\n" +
"      position: absolute;\n" +
"      top: 9px;\n" +
"      left: -14px;\n" +
"      z-index: 88; }\n" +
"  .f-dropdown.drop-left {\n" +
"    position: absolute;\n" +
"    left: -9999px;\n" +
"    list-style: none;\n" +
"    margin-left: 0;\n" +
"    width: 100%;\n" +
"    max-height: none;\n" +
"    height: auto;\n" +
"    background: white;\n" +
"    border: solid 1px #cccccc;\n" +
"    font-size: 0.875rem;\n" +
"    z-index: 89;\n" +
"    margin-top: 0;\n" +
"    margin-left: -2px;\n" +
"    max-width: 200px; }\n" +
"    .f-dropdown.drop-left > *:first-child {\n" +
"      margin-top: 0; }\n" +
"    .f-dropdown.drop-left > *:last-child {\n" +
"      margin-bottom: 0; }\n" +
"    .f-dropdown.drop-left:before {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 6px;\n" +
"      border-color: transparent transparent transparent white;\n" +
"      border-left-style: solid;\n" +
"      position: absolute;\n" +
"      top: 10px;\n" +
"      right: -12px;\n" +
"      left: auto;\n" +
"      z-index: 89; }\n" +
"    .f-dropdown.drop-left:after {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 7px;\n" +
"      border-color: transparent transparent transparent #cccccc;\n" +
"      border-left-style: solid;\n" +
"      position: absolute;\n" +
"      top: 9px;\n" +
"      right: -14px;\n" +
"      left: auto;\n" +
"      z-index: 88; }\n" +
"  .f-dropdown.drop-top {\n" +
"    position: absolute;\n" +
"    left: -9999px;\n" +
"    list-style: none;\n" +
"    margin-left: 0;\n" +
"    width: 100%;\n" +
"    max-height: none;\n" +
"    height: auto;\n" +
"    background: white;\n" +
"    border: solid 1px #cccccc;\n" +
"    font-size: 0.875rem;\n" +
"    z-index: 89;\n" +
"    margin-top: -2px;\n" +
"    margin-left: 0;\n" +
"    max-width: 200px; }\n" +
"    .f-dropdown.drop-top > *:first-child {\n" +
"      margin-top: 0; }\n" +
"    .f-dropdown.drop-top > *:last-child {\n" +
"      margin-bottom: 0; }\n" +
"    .f-dropdown.drop-top:before {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 6px;\n" +
"      border-color: white transparent transparent transparent;\n" +
"      border-top-style: solid;\n" +
"      position: absolute;\n" +
"      top: auto;\n" +
"      bottom: -12px;\n" +
"      left: 10px;\n" +
"      right: auto;\n" +
"      z-index: 89; }\n" +
"    .f-dropdown.drop-top:after {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 7px;\n" +
"      border-color: #cccccc transparent transparent transparent;\n" +
"      border-top-style: solid;\n" +
"      position: absolute;\n" +
"      top: auto;\n" +
"      bottom: -14px;\n" +
"      left: 9px;\n" +
"      right: auto;\n" +
"      z-index: 88; }\n" +
"  .f-dropdown li {\n" +
"    font-size: 0.875rem;\n" +
"    cursor: pointer;\n" +
"    line-height: 1.125rem;\n" +
"    margin: 0; }\n" +
"    .f-dropdown li:hover, .f-dropdown li:focus {\n" +
"      background: #eeeeee; }\n" +
"    .f-dropdown li.radius {\n" +
"      border-radius: 3px; }\n" +
"    .f-dropdown li a {\n" +
"      display: block;\n" +
"      padding: 0.5rem;\n" +
"      color: #555555; }\n" +
"  .f-dropdown.content {\n" +
"    position: absolute;\n" +
"    left: -9999px;\n" +
"    list-style: none;\n" +
"    margin-left: 0;\n" +
"    padding: 1.25rem;\n" +
"    width: 100%;\n" +
"    height: auto;\n" +
"    max-height: none;\n" +
"    background: white;\n" +
"    border: solid 1px #cccccc;\n" +
"    font-size: 0.875rem;\n" +
"    z-index: 89;\n" +
"    max-width: 200px; }\n" +
"    .f-dropdown.content > *:first-child {\n" +
"      margin-top: 0; }\n" +
"    .f-dropdown.content > *:last-child {\n" +
"      margin-bottom: 0; }\n" +
"  .f-dropdown.tiny {\n" +
"    max-width: 200px; }\n" +
"  .f-dropdown.small {\n" +
"    max-width: 300px; }\n" +
"  .f-dropdown.medium {\n" +
"    max-width: 500px; }\n" +
"  .f-dropdown.large {\n" +
"    max-width: 800px; }\n" +
"  .f-dropdown.mega {\n" +
"    width: 100% !important;\n" +
"    max-width: 100% !important; }\n" +
"    .f-dropdown.mega.open {\n" +
"      left: 0 !important; }\n" +
"\n" +
".dropdown.button, button.dropdown {\n" +
"  position: relative;\n" +
"  padding-right: 3.5625rem; }\n" +
"  .dropdown.button:after, button.dropdown:after {\n" +
"    position: absolute;\n" +
"    content: \"\";\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    display: block;\n" +
"    border-style: solid;\n" +
"    border-color: white transparent transparent transparent;\n" +
"    top: 50%; }\n" +
"  .dropdown.button:after, button.dropdown:after {\n" +
"    border-width: 0.375rem;\n" +
"    right: 1.40625rem;\n" +
"    margin-top: -0.15625rem; }\n" +
"  .dropdown.button:after, button.dropdown:after {\n" +
"    border-color: white transparent transparent transparent; }\n" +
"  .dropdown.button.tiny, button.dropdown.tiny {\n" +
"    padding-right: 2.625rem; }\n" +
"    .dropdown.button.tiny:before, button.dropdown.tiny:before {\n" +
"      border-width: 0.375rem;\n" +
"      right: 1.125rem;\n" +
"      margin-top: -0.125rem; }\n" +
"    .dropdown.button.tiny:after, button.dropdown.tiny:after {\n" +
"      border-color: white transparent transparent transparent; }\n" +
"  .dropdown.button.small, button.dropdown.small {\n" +
"    padding-right: 3.0625rem; }\n" +
"    .dropdown.button.small:after, button.dropdown.small:after {\n" +
"      border-width: 0.4375rem;\n" +
"      right: 1.3125rem;\n" +
"      margin-top: -0.15625rem; }\n" +
"    .dropdown.button.small:after, button.dropdown.small:after {\n" +
"      border-color: white transparent transparent transparent; }\n" +
"  .dropdown.button.large, button.dropdown.large {\n" +
"    padding-right: 3.625rem; }\n" +
"    .dropdown.button.large:after, button.dropdown.large:after {\n" +
"      border-width: 0.3125rem;\n" +
"      right: 1.71875rem;\n" +
"      margin-top: -0.15625rem; }\n" +
"    .dropdown.button.large:after, button.dropdown.large:after {\n" +
"      border-color: white transparent transparent transparent; }\n" +
"  .dropdown.button.secondary:after, button.dropdown.secondary:after {\n" +
"    border-color: #333333 transparent transparent transparent; }\n" +
"\n" +
".flex-video {\n" +
"  position: relative;\n" +
"  padding-top: 1.5625rem;\n" +
"  padding-bottom: 67.5%;\n" +
"  height: 0;\n" +
"  margin-bottom: 1rem;\n" +
"  overflow: hidden; }\n" +
"  .flex-video.widescreen {\n" +
"    padding-bottom: 56.34%; }\n" +
"  .flex-video.vimeo {\n" +
"    padding-top: 0; }\n" +
"  .flex-video iframe,\n" +
"  .flex-video object,\n" +
"  .flex-video embed,\n" +
"  .flex-video video {\n" +
"    position: absolute;\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    width: 100%;\n" +
"    height: 100%; }\n" +
"\n" +
"/* Standard Forms */\n" +
"form {\n" +
"  margin: 0 0 1rem; }\n" +
"\n" +
"/* Using forms within rows, we need to set some defaults */\n" +
"form .row .row {\n" +
"  margin: 0 -0.5rem; }\n" +
"  form .row .row .column,\n" +
"  form .row .row .columns {\n" +
"    padding: 0 0.5rem; }\n" +
"  form .row .row.collapse {\n" +
"    margin: 0; }\n" +
"    form .row .row.collapse .column,\n" +
"    form .row .row.collapse .columns {\n" +
"      padding: 0; }\n" +
"    form .row .row.collapse input {\n" +
"      -webkit-border-bottom-right-radius: 0;\n" +
"      -webkit-border-top-right-radius: 0;\n" +
"      border-bottom-right-radius: 0;\n" +
"      border-top-right-radius: 0; }\n" +
"form .row input.column,\n" +
"form .row input.columns,\n" +
"form .row textarea.column,\n" +
"form .row textarea.columns {\n" +
"  padding-left: 0.5rem; }\n" +
"\n" +
"/* Label Styles */\n" +
"label {\n" +
"  font-size: 0.875rem;\n" +
"  color: #4d4d4d;\n" +
"  cursor: pointer;\n" +
"  display: block;\n" +
"  font-weight: normal;\n" +
"  line-height: 1.5;\n" +
"  margin-bottom: 0;\n" +
"  /* Styles for required inputs */ }\n" +
"  label.right {\n" +
"    float: none !important;\n" +
"    text-align: right; }\n" +
"  label.inline {\n" +
"    margin: 0 0 1rem 0;\n" +
"    padding: 0.5625rem 0; }\n" +
"  label small {\n" +
"    text-transform: capitalize;\n" +
"    color: #676767; }\n" +
"\n" +
"select::-ms-expand {\n" +
"  display: none; }\n" +
"\n" +
"/* Attach elements to the beginning or end of an input */\n" +
".prefix,\n" +
".postfix {\n" +
"  display: block;\n" +
"  position: relative;\n" +
"  z-index: 2;\n" +
"  text-align: center;\n" +
"  width: 100%;\n" +
"  padding-top: 0;\n" +
"  padding-bottom: 0;\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  overflow: hidden;\n" +
"  font-size: 0.875rem;\n" +
"  height: 2.3125rem;\n" +
"  line-height: 2.3125rem; }\n" +
"\n" +
"/* Adjust padding, alignment and radius if pre/post element is a button */\n" +
".postfix.button {\n" +
"  padding-left: 0;\n" +
"  padding-right: 0;\n" +
"  padding-top: 0;\n" +
"  padding-bottom: 0;\n" +
"  text-align: center;\n" +
"  line-height: 2.125rem;\n" +
"  border: none; }\n" +
"\n" +
".prefix.button {\n" +
"  padding-left: 0;\n" +
"  padding-right: 0;\n" +
"  padding-top: 0;\n" +
"  padding-bottom: 0;\n" +
"  text-align: center;\n" +
"  line-height: 2.125rem;\n" +
"  border: none; }\n" +
"\n" +
".prefix.button.radius {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-left-radius: 3px;\n" +
"  -webkit-border-top-left-radius: 3px;\n" +
"  border-bottom-left-radius: 3px;\n" +
"  border-top-left-radius: 3px; }\n" +
"\n" +
".postfix.button.radius {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-right-radius: 3px;\n" +
"  -webkit-border-top-right-radius: 3px;\n" +
"  border-bottom-right-radius: 3px;\n" +
"  border-top-right-radius: 3px; }\n" +
"\n" +
".prefix.button.round {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-left-radius: 1000px;\n" +
"  -webkit-border-top-left-radius: 1000px;\n" +
"  border-bottom-left-radius: 1000px;\n" +
"  border-top-left-radius: 1000px; }\n" +
"\n" +
".postfix.button.round {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-right-radius: 1000px;\n" +
"  -webkit-border-top-right-radius: 1000px;\n" +
"  border-bottom-right-radius: 1000px;\n" +
"  border-top-right-radius: 1000px; }\n" +
"\n" +
"/* Separate prefix and postfix styles when on span or label so buttons keep their own */\n" +
"span.prefix, label.prefix {\n" +
"  background: #f2f2f2;\n" +
"  border-right: none;\n" +
"  color: #333333;\n" +
"  border-color: #cccccc; }\n" +
"\n" +
"span.postfix, label.postfix {\n" +
"  background: #f2f2f2;\n" +
"  border-left: none;\n" +
"  color: #333333;\n" +
"  border-color: #cccccc; }\n" +
"\n" +
"/* We use this to get basic styling on all basic form elements */\n" +
"input[type=\"text\"],\n" +
"input[type=\"password\"],\n" +
"input[type=\"date\"],\n" +
"input[type=\"datetime\"],\n" +
"input[type=\"datetime-local\"],\n" +
"input[type=\"month\"],\n" +
"input[type=\"week\"],\n" +
"input[type=\"email\"],\n" +
"input[type=\"number\"],\n" +
"input[type=\"search\"],\n" +
"input[type=\"tel\"],\n" +
"input[type=\"time\"],\n" +
"input[type=\"url\"],\n" +
"input[type=\"color\"],\n" +
"textarea {\n" +
"  -webkit-appearance: none;\n" +
"  -webkit-border-radius: 0px;\n" +
"  background-color: white;\n" +
"  font-family: inherit;\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  border-color: #cccccc;\n" +
"  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n" +
"  color: rgba(0, 0, 0, 0.75);\n" +
"  display: block;\n" +
"  font-size: 0.875rem;\n" +
"  margin: 0 0 1rem 0;\n" +
"  padding: 0.5rem;\n" +
"  height: 2.3125rem;\n" +
"  width: 100%;\n" +
"  -webkit-box-sizing: border-box;\n" +
"  -moz-box-sizing: border-box;\n" +
"  box-sizing: border-box;\n" +
"  transition: box-shadow 0.45s, border-color 0.45s ease-in-out; }\n" +
"  input[type=\"text\"]:focus,\n" +
"  input[type=\"password\"]:focus,\n" +
"  input[type=\"date\"]:focus,\n" +
"  input[type=\"datetime\"]:focus,\n" +
"  input[type=\"datetime-local\"]:focus,\n" +
"  input[type=\"month\"]:focus,\n" +
"  input[type=\"week\"]:focus,\n" +
"  input[type=\"email\"]:focus,\n" +
"  input[type=\"number\"]:focus,\n" +
"  input[type=\"search\"]:focus,\n" +
"  input[type=\"tel\"]:focus,\n" +
"  input[type=\"time\"]:focus,\n" +
"  input[type=\"url\"]:focus,\n" +
"  input[type=\"color\"]:focus,\n" +
"  textarea:focus {\n" +
"    box-shadow: 0 0 5px #999999;\n" +
"    border-color: #999999; }\n" +
"  input[type=\"text\"]:focus,\n" +
"  input[type=\"password\"]:focus,\n" +
"  input[type=\"date\"]:focus,\n" +
"  input[type=\"datetime\"]:focus,\n" +
"  input[type=\"datetime-local\"]:focus,\n" +
"  input[type=\"month\"]:focus,\n" +
"  input[type=\"week\"]:focus,\n" +
"  input[type=\"email\"]:focus,\n" +
"  input[type=\"number\"]:focus,\n" +
"  input[type=\"search\"]:focus,\n" +
"  input[type=\"tel\"]:focus,\n" +
"  input[type=\"time\"]:focus,\n" +
"  input[type=\"url\"]:focus,\n" +
"  input[type=\"color\"]:focus,\n" +
"  textarea:focus {\n" +
"    background: #fafafa;\n" +
"    border-color: #999999;\n" +
"    outline: none; }\n" +
"  input[type=\"text\"]:disabled,\n" +
"  input[type=\"password\"]:disabled,\n" +
"  input[type=\"date\"]:disabled,\n" +
"  input[type=\"datetime\"]:disabled,\n" +
"  input[type=\"datetime-local\"]:disabled,\n" +
"  input[type=\"month\"]:disabled,\n" +
"  input[type=\"week\"]:disabled,\n" +
"  input[type=\"email\"]:disabled,\n" +
"  input[type=\"number\"]:disabled,\n" +
"  input[type=\"search\"]:disabled,\n" +
"  input[type=\"tel\"]:disabled,\n" +
"  input[type=\"time\"]:disabled,\n" +
"  input[type=\"url\"]:disabled,\n" +
"  input[type=\"color\"]:disabled,\n" +
"  textarea:disabled {\n" +
"    background-color: #dddddd;\n" +
"    cursor: default; }\n" +
"  input[type=\"text\"][disabled], input[type=\"text\"][readonly], fieldset[disabled] input[type=\"text\"],\n" +
"  input[type=\"password\"][disabled],\n" +
"  input[type=\"password\"][readonly], fieldset[disabled]\n" +
"  input[type=\"password\"],\n" +
"  input[type=\"date\"][disabled],\n" +
"  input[type=\"date\"][readonly], fieldset[disabled]\n" +
"  input[type=\"date\"],\n" +
"  input[type=\"datetime\"][disabled],\n" +
"  input[type=\"datetime\"][readonly], fieldset[disabled]\n" +
"  input[type=\"datetime\"],\n" +
"  input[type=\"datetime-local\"][disabled],\n" +
"  input[type=\"datetime-local\"][readonly], fieldset[disabled]\n" +
"  input[type=\"datetime-local\"],\n" +
"  input[type=\"month\"][disabled],\n" +
"  input[type=\"month\"][readonly], fieldset[disabled]\n" +
"  input[type=\"month\"],\n" +
"  input[type=\"week\"][disabled],\n" +
"  input[type=\"week\"][readonly], fieldset[disabled]\n" +
"  input[type=\"week\"],\n" +
"  input[type=\"email\"][disabled],\n" +
"  input[type=\"email\"][readonly], fieldset[disabled]\n" +
"  input[type=\"email\"],\n" +
"  input[type=\"number\"][disabled],\n" +
"  input[type=\"number\"][readonly], fieldset[disabled]\n" +
"  input[type=\"number\"],\n" +
"  input[type=\"search\"][disabled],\n" +
"  input[type=\"search\"][readonly], fieldset[disabled]\n" +
"  input[type=\"search\"],\n" +
"  input[type=\"tel\"][disabled],\n" +
"  input[type=\"tel\"][readonly], fieldset[disabled]\n" +
"  input[type=\"tel\"],\n" +
"  input[type=\"time\"][disabled],\n" +
"  input[type=\"time\"][readonly], fieldset[disabled]\n" +
"  input[type=\"time\"],\n" +
"  input[type=\"url\"][disabled],\n" +
"  input[type=\"url\"][readonly], fieldset[disabled]\n" +
"  input[type=\"url\"],\n" +
"  input[type=\"color\"][disabled],\n" +
"  input[type=\"color\"][readonly], fieldset[disabled]\n" +
"  input[type=\"color\"],\n" +
"  textarea[disabled],\n" +
"  textarea[readonly], fieldset[disabled]\n" +
"  textarea {\n" +
"    background-color: #dddddd;\n" +
"    cursor: default; }\n" +
"  input[type=\"text\"].radius,\n" +
"  input[type=\"password\"].radius,\n" +
"  input[type=\"date\"].radius,\n" +
"  input[type=\"datetime\"].radius,\n" +
"  input[type=\"datetime-local\"].radius,\n" +
"  input[type=\"month\"].radius,\n" +
"  input[type=\"week\"].radius,\n" +
"  input[type=\"email\"].radius,\n" +
"  input[type=\"number\"].radius,\n" +
"  input[type=\"search\"].radius,\n" +
"  input[type=\"tel\"].radius,\n" +
"  input[type=\"time\"].radius,\n" +
"  input[type=\"url\"].radius,\n" +
"  input[type=\"color\"].radius,\n" +
"  textarea.radius {\n" +
"    border-radius: 3px; }\n" +
"\n" +
"form .row .prefix-radius.row.collapse input,\n" +
"form .row .prefix-radius.row.collapse textarea,\n" +
"form .row .prefix-radius.row.collapse select {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-right-radius: 3px;\n" +
"  -webkit-border-top-right-radius: 3px;\n" +
"  border-bottom-right-radius: 3px;\n" +
"  border-top-right-radius: 3px; }\n" +
"form .row .prefix-radius.row.collapse .prefix {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-left-radius: 3px;\n" +
"  -webkit-border-top-left-radius: 3px;\n" +
"  border-bottom-left-radius: 3px;\n" +
"  border-top-left-radius: 3px; }\n" +
"form .row .postfix-radius.row.collapse input,\n" +
"form .row .postfix-radius.row.collapse textarea,\n" +
"form .row .postfix-radius.row.collapse select {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-left-radius: 3px;\n" +
"  -webkit-border-top-left-radius: 3px;\n" +
"  border-bottom-left-radius: 3px;\n" +
"  border-top-left-radius: 3px; }\n" +
"form .row .postfix-radius.row.collapse .postfix {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-right-radius: 3px;\n" +
"  -webkit-border-top-right-radius: 3px;\n" +
"  border-bottom-right-radius: 3px;\n" +
"  border-top-right-radius: 3px; }\n" +
"form .row .prefix-round.row.collapse input,\n" +
"form .row .prefix-round.row.collapse textarea,\n" +
"form .row .prefix-round.row.collapse select {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-right-radius: 1000px;\n" +
"  -webkit-border-top-right-radius: 1000px;\n" +
"  border-bottom-right-radius: 1000px;\n" +
"  border-top-right-radius: 1000px; }\n" +
"form .row .prefix-round.row.collapse .prefix {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-left-radius: 1000px;\n" +
"  -webkit-border-top-left-radius: 1000px;\n" +
"  border-bottom-left-radius: 1000px;\n" +
"  border-top-left-radius: 1000px; }\n" +
"form .row .postfix-round.row.collapse input,\n" +
"form .row .postfix-round.row.collapse textarea,\n" +
"form .row .postfix-round.row.collapse select {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-left-radius: 1000px;\n" +
"  -webkit-border-top-left-radius: 1000px;\n" +
"  border-bottom-left-radius: 1000px;\n" +
"  border-top-left-radius: 1000px; }\n" +
"form .row .postfix-round.row.collapse .postfix {\n" +
"  border-radius: 0;\n" +
"  -webkit-border-bottom-right-radius: 1000px;\n" +
"  -webkit-border-top-right-radius: 1000px;\n" +
"  border-bottom-right-radius: 1000px;\n" +
"  border-top-right-radius: 1000px; }\n" +
"\n" +
"input[type=\"submit\"] {\n" +
"  -webkit-appearance: none;\n" +
"  -webkit-border-radius: 0px; }\n" +
"\n" +
"/* Respect enforced amount of rows for textarea */\n" +
"textarea[rows] {\n" +
"  height: auto; }\n" +
"\n" +
"/* Not allow resize out of parent */\n" +
"textarea {\n" +
"  max-width: 100%; }\n" +
"\n" +
"/* Add height value for select elements to match text input height */\n" +
"select {\n" +
"  -webkit-appearance: none !important;\n" +
"  -webkit-border-radius: 0px;\n" +
"  background-color: #fafafa;\n" +
"  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMTJweCIgeT0iMHB4IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzcHgiIHZpZXdCb3g9IjAgMCA2IDMiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDYgMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gcG9pbnRzPSI1Ljk5MiwwIDIuOTkyLDMgLTAuMDA4LDAgIi8+PC9zdmc+);\n" +
"  background-position: 100% center;\n" +
"  background-repeat: no-repeat;\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  border-color: #cccccc;\n" +
"  padding: 0.5rem;\n" +
"  font-size: 0.875rem;\n" +
"  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"  color: rgba(0, 0, 0, 0.75);\n" +
"  line-height: normal;\n" +
"  border-radius: 0;\n" +
"  height: 2.3125rem; }\n" +
"  select.radius {\n" +
"    border-radius: 3px; }\n" +
"  select:hover {\n" +
"    background-color: #f3f3f3;\n" +
"    border-color: #999999; }\n" +
"  select:disabled {\n" +
"    background-color: #dddddd;\n" +
"    cursor: default; }\n" +
"\n" +
"/* Adjust margin for form elements below */\n" +
"input[type=\"file\"],\n" +
"input[type=\"checkbox\"],\n" +
"input[type=\"radio\"],\n" +
"select {\n" +
"  margin: 0 0 1rem 0; }\n" +
"\n" +
"input[type=\"checkbox\"] + label,\n" +
"input[type=\"radio\"] + label {\n" +
"  display: inline-block;\n" +
"  margin-left: 0.5rem;\n" +
"  margin-right: 1rem;\n" +
"  margin-bottom: 0;\n" +
"  vertical-align: baseline; }\n" +
"\n" +
"/* Normalize file input width */\n" +
"input[type=\"file\"] {\n" +
"  width: 100%; }\n" +
"\n" +
"/* HTML5 Number spinners settings */\n" +
"/* We add basic fieldset styling */\n" +
"fieldset {\n" +
"  border: 1px solid #dddddd;\n" +
"  padding: 1.25rem;\n" +
"  margin: 1.125rem 0; }\n" +
"  fieldset legend {\n" +
"    font-weight: bold;\n" +
"    background: white;\n" +
"    padding: 0 0.1875rem;\n" +
"    margin: 0;\n" +
"    margin-left: -0.1875rem; }\n" +
"\n" +
"/* Error Handling */\n" +
"[data-abide] .error small.error, [data-abide] .error span.error, [data-abide] span.error, [data-abide] small.error {\n" +
"  display: block;\n" +
"  padding: 0.375rem 0.5625rem 0.5625rem;\n" +
"  margin-top: -1px;\n" +
"  margin-bottom: 1rem;\n" +
"  font-size: 0.75rem;\n" +
"  font-weight: normal;\n" +
"  font-style: italic;\n" +
"  background: #f04124;\n" +
"  color: white; }\n" +
"[data-abide] span.error, [data-abide] small.error {\n" +
"  display: none; }\n" +
"\n" +
"span.error, small.error {\n" +
"  display: block;\n" +
"  padding: 0.375rem 0.5625rem 0.5625rem;\n" +
"  margin-top: -1px;\n" +
"  margin-bottom: 1rem;\n" +
"  font-size: 0.75rem;\n" +
"  font-weight: normal;\n" +
"  font-style: italic;\n" +
"  background: #f04124;\n" +
"  color: white; }\n" +
"\n" +
".error input,\n" +
".error textarea,\n" +
".error select {\n" +
"  margin-bottom: 0; }\n" +
".error input[type=\"checkbox\"],\n" +
".error input[type=\"radio\"] {\n" +
"  margin-bottom: 1rem; }\n" +
".error label,\n" +
".error label.error {\n" +
"  color: #f04124; }\n" +
".error small.error {\n" +
"  display: block;\n" +
"  padding: 0.375rem 0.5625rem 0.5625rem;\n" +
"  margin-top: -1px;\n" +
"  margin-bottom: 1rem;\n" +
"  font-size: 0.75rem;\n" +
"  font-weight: normal;\n" +
"  font-style: italic;\n" +
"  background: #f04124;\n" +
"  color: white; }\n" +
".error > label > small {\n" +
"  color: #676767;\n" +
"  background: transparent;\n" +
"  padding: 0;\n" +
"  text-transform: capitalize;\n" +
"  font-style: normal;\n" +
"  font-size: 60%;\n" +
"  margin: 0;\n" +
"  display: inline; }\n" +
".error span.error-message {\n" +
"  display: block; }\n" +
"\n" +
"input.error,\n" +
"textarea.error,\n" +
"select.error {\n" +
"  margin-bottom: 0; }\n" +
"\n" +
"label.error {\n" +
"  color: #f04124; }\n" +
"\n" +
".icon-bar {\n" +
"  width: 100%;\n" +
"  font-size: 0;\n" +
"  display: inline-block;\n" +
"  background: #333333; }\n" +
"  .icon-bar > * {\n" +
"    text-align: center;\n" +
"    font-size: 1rem;\n" +
"    width: 25%;\n" +
"    margin: 0 auto;\n" +
"    display: block;\n" +
"    padding: 1.25rem;\n" +
"    float: left; }\n" +
"    .icon-bar > * i, .icon-bar > * img {\n" +
"      display: block;\n" +
"      margin: 0 auto; }\n" +
"      .icon-bar > * i + label, .icon-bar > * img + label {\n" +
"        margin-top: .0625rem; }\n" +
"    .icon-bar > * i {\n" +
"      font-size: 1.875rem;\n" +
"      vertical-align: middle; }\n" +
"    .icon-bar > * img {\n" +
"      width: 1.875rem;\n" +
"      height: 1.875rem; }\n" +
"  .icon-bar.label-right > * i, .icon-bar.label-right > * img {\n" +
"    margin: 0 .0625rem 0 0;\n" +
"    display: inline-block; }\n" +
"    .icon-bar.label-right > * i + label, .icon-bar.label-right > * img + label {\n" +
"      margin-top: 0; }\n" +
"  .icon-bar.label-right > * label {\n" +
"    display: inline-block; }\n" +
"  .icon-bar.vertical.label-right > * {\n" +
"    text-align: left; }\n" +
"  .icon-bar.vertical, .icon-bar.small-vertical {\n" +
"    height: 100%;\n" +
"    width: auto; }\n" +
"    .icon-bar.vertical .item, .icon-bar.small-vertical .item {\n" +
"      width: auto;\n" +
"      margin: auto;\n" +
"      float: none; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .icon-bar.medium-vertical {\n" +
"      height: 100%;\n" +
"      width: auto; }\n" +
"      .icon-bar.medium-vertical .item {\n" +
"        width: auto;\n" +
"        margin: auto;\n" +
"        float: none; } }\n" +
"  @media only screen and (min-width: 64.063em) {\n" +
"    .icon-bar.large-vertical {\n" +
"      height: 100%;\n" +
"      width: auto; }\n" +
"      .icon-bar.large-vertical .item {\n" +
"        width: auto;\n" +
"        margin: auto;\n" +
"        float: none; } }\n" +
"  .icon-bar > * {\n" +
"    font-size: 1rem;\n" +
"    padding: 1.25rem; }\n" +
"    .icon-bar > * i + label, .icon-bar > * img + label {\n" +
"      margin-top: .0625rem; }\n" +
"    .icon-bar > * i {\n" +
"      font-size: 1.875rem; }\n" +
"    .icon-bar > * img {\n" +
"      width: 1.875rem;\n" +
"      height: 1.875rem; }\n" +
"  .icon-bar > *:hover {\n" +
"    background: #008cba; }\n" +
"  .icon-bar > * label {\n" +
"    color: white; }\n" +
"  .icon-bar > * i {\n" +
"    color: white; }\n" +
"\n" +
".icon-bar.two-up .item {\n" +
"  width: 50%; }\n" +
".icon-bar.two-up.vertical .item, .icon-bar.two-up.small-vertical .item {\n" +
"  width: auto; }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .icon-bar.two-up.medium-vertical .item {\n" +
"    width: auto; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .icon-bar.two-up.large-vertical .item {\n" +
"    width: auto; } }\n" +
".icon-bar.three-up .item {\n" +
"  width: 33.3333%; }\n" +
".icon-bar.three-up.vertical .item, .icon-bar.three-up.small-vertical .item {\n" +
"  width: auto; }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .icon-bar.three-up.medium-vertical .item {\n" +
"    width: auto; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .icon-bar.three-up.large-vertical .item {\n" +
"    width: auto; } }\n" +
".icon-bar.four-up .item {\n" +
"  width: 25%; }\n" +
".icon-bar.four-up.vertical .item, .icon-bar.four-up.small-vertical .item {\n" +
"  width: auto; }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .icon-bar.four-up.medium-vertical .item {\n" +
"    width: auto; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .icon-bar.four-up.large-vertical .item {\n" +
"    width: auto; } }\n" +
".icon-bar.five-up .item {\n" +
"  width: 20%; }\n" +
".icon-bar.five-up.vertical .item, .icon-bar.five-up.small-vertical .item {\n" +
"  width: auto; }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .icon-bar.five-up.medium-vertical .item {\n" +
"    width: auto; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .icon-bar.five-up.large-vertical .item {\n" +
"    width: auto; } }\n" +
".icon-bar.six-up .item {\n" +
"  width: 16.66667%; }\n" +
".icon-bar.six-up.vertical .item, .icon-bar.six-up.small-vertical .item {\n" +
"  width: auto; }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .icon-bar.six-up.medium-vertical .item {\n" +
"    width: auto; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .icon-bar.six-up.large-vertical .item {\n" +
"    width: auto; } }\n" +
"\n" +
".inline-list {\n" +
"  margin: 0 auto 1.0625rem auto;\n" +
"  margin-left: -1.375rem;\n" +
"  margin-right: 0;\n" +
"  padding: 0;\n" +
"  list-style: none;\n" +
"  overflow: hidden; }\n" +
"  .inline-list > li {\n" +
"    list-style: none;\n" +
"    float: left;\n" +
"    margin-left: 1.375rem;\n" +
"    display: block; }\n" +
"    .inline-list > li > * {\n" +
"      display: block; }\n" +
"\n" +
"/* Foundation Joyride */\n" +
".joyride-list {\n" +
"  display: none; }\n" +
"\n" +
"/* Default styles for the container */\n" +
".joyride-tip-guide {\n" +
"  display: none;\n" +
"  position: absolute;\n" +
"  background: #333333;\n" +
"  color: white;\n" +
"  z-index: 101;\n" +
"  top: 0;\n" +
"  left: 2.5%;\n" +
"  font-family: inherit;\n" +
"  font-weight: normal;\n" +
"  width: 95%; }\n" +
"\n" +
".lt-ie9 .joyride-tip-guide {\n" +
"  max-width: 800px;\n" +
"  left: 50%;\n" +
"  margin-left: -400px; }\n" +
"\n" +
".joyride-content-wrapper {\n" +
"  width: 100%;\n" +
"  padding: 1.125rem 1.25rem 1.5rem; }\n" +
"  .joyride-content-wrapper .button {\n" +
"    margin-bottom: 0 !important; }\n" +
"  .joyride-content-wrapper .joyride-prev-tip {\n" +
"    margin-right: 10px; }\n" +
"\n" +
"/* Add a little css triangle pip, older browser just miss out on the fanciness of it */\n" +
".joyride-tip-guide .joyride-nub {\n" +
"  display: block;\n" +
"  position: absolute;\n" +
"  left: 22px;\n" +
"  width: 0;\n" +
"  height: 0;\n" +
"  border: 10px solid #333333; }\n" +
"  .joyride-tip-guide .joyride-nub.top {\n" +
"    border-top-style: solid;\n" +
"    border-color: #333333;\n" +
"    border-top-color: transparent !important;\n" +
"    border-left-color: transparent !important;\n" +
"    border-right-color: transparent !important;\n" +
"    top: -20px; }\n" +
"  .joyride-tip-guide .joyride-nub.bottom {\n" +
"    border-bottom-style: solid;\n" +
"    border-color: #333333 !important;\n" +
"    border-bottom-color: transparent !important;\n" +
"    border-left-color: transparent !important;\n" +
"    border-right-color: transparent !important;\n" +
"    bottom: -20px; }\n" +
"  .joyride-tip-guide .joyride-nub.right {\n" +
"    right: -20px; }\n" +
"  .joyride-tip-guide .joyride-nub.left {\n" +
"    left: -20px; }\n" +
"\n" +
"/* Typography */\n" +
".joyride-tip-guide h1,\n" +
".joyride-tip-guide h2,\n" +
".joyride-tip-guide h3,\n" +
".joyride-tip-guide h4,\n" +
".joyride-tip-guide h5,\n" +
".joyride-tip-guide h6 {\n" +
"  line-height: 1.25;\n" +
"  margin: 0;\n" +
"  font-weight: bold;\n" +
"  color: white; }\n" +
"\n" +
".joyride-tip-guide p {\n" +
"  margin: 0 0 1.125rem 0;\n" +
"  font-size: 0.875rem;\n" +
"  line-height: 1.3; }\n" +
"\n" +
".joyride-timer-indicator-wrap {\n" +
"  width: 50px;\n" +
"  height: 3px;\n" +
"  border: solid 1px #555555;\n" +
"  position: absolute;\n" +
"  right: 1.0625rem;\n" +
"  bottom: 1rem; }\n" +
"\n" +
".joyride-timer-indicator {\n" +
"  display: block;\n" +
"  width: 0;\n" +
"  height: inherit;\n" +
"  background: #666666; }\n" +
"\n" +
".joyride-close-tip {\n" +
"  position: absolute;\n" +
"  right: 12px;\n" +
"  top: 10px;\n" +
"  color: #777777 !important;\n" +
"  text-decoration: none;\n" +
"  font-size: 24px;\n" +
"  font-weight: normal;\n" +
"  line-height: .5 !important; }\n" +
"  .joyride-close-tip:hover, .joyride-close-tip:focus {\n" +
"    color: #eeeeee !important; }\n" +
"\n" +
".joyride-modal-bg {\n" +
"  position: fixed;\n" +
"  height: 100%;\n" +
"  width: 100%;\n" +
"  background: transparent;\n" +
"  background: rgba(0, 0, 0, 0.5);\n" +
"  z-index: 100;\n" +
"  display: none;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  cursor: pointer; }\n" +
"\n" +
".joyride-expose-wrapper {\n" +
"  background-color: white;\n" +
"  position: absolute;\n" +
"  border-radius: 3px;\n" +
"  z-index: 102;\n" +
"  box-shadow: 0 0 15px white; }\n" +
"\n" +
".joyride-expose-cover {\n" +
"  background: transparent;\n" +
"  border-radius: 3px;\n" +
"  position: absolute;\n" +
"  z-index: 9999;\n" +
"  top: 0;\n" +
"  left: 0; }\n" +
"\n" +
"/* Styles for screens that are at least 768px; */\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .joyride-tip-guide {\n" +
"    width: 300px;\n" +
"    left: inherit; }\n" +
"    .joyride-tip-guide .joyride-nub.bottom {\n" +
"      border-color: #333333 !important;\n" +
"      border-bottom-color: transparent !important;\n" +
"      border-left-color: transparent !important;\n" +
"      border-right-color: transparent !important;\n" +
"      bottom: -20px; }\n" +
"    .joyride-tip-guide .joyride-nub.right {\n" +
"      border-color: #333333 !important;\n" +
"      border-top-color: transparent !important;\n" +
"      border-right-color: transparent !important;\n" +
"      border-bottom-color: transparent !important;\n" +
"      top: 22px;\n" +
"      left: auto;\n" +
"      right: -20px; }\n" +
"    .joyride-tip-guide .joyride-nub.left {\n" +
"      border-color: #333333 !important;\n" +
"      border-top-color: transparent !important;\n" +
"      border-left-color: transparent !important;\n" +
"      border-bottom-color: transparent !important;\n" +
"      top: 22px;\n" +
"      left: -20px;\n" +
"      right: auto; } }\n" +
".keystroke,\n" +
"kbd {\n" +
"  background-color: #ededed;\n" +
"  border-color: #dddddd;\n" +
"  color: #222222;\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  margin: 0;\n" +
"  font-family: \"Consolas\", \"Menlo\", \"Courier\", monospace;\n" +
"  font-size: inherit;\n" +
"  padding: 0.125rem 0.25rem 0;\n" +
"  border-radius: 3px; }\n" +
"\n" +
".label {\n" +
"  font-weight: normal;\n" +
"  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"  text-align: center;\n" +
"  text-decoration: none;\n" +
"  line-height: 1;\n" +
"  white-space: nowrap;\n" +
"  display: inline-block;\n" +
"  position: relative;\n" +
"  margin-bottom: inherit;\n" +
"  padding: 0.25rem 0.5rem 0.25rem;\n" +
"  font-size: 0.6875rem;\n" +
"  background-color: #008cba;\n" +
"  color: white; }\n" +
"  .label.radius {\n" +
"    border-radius: 3px; }\n" +
"  .label.round {\n" +
"    border-radius: 1000px; }\n" +
"  .label.alert {\n" +
"    background-color: #f04124;\n" +
"    color: white; }\n" +
"  .label.warning {\n" +
"    background-color: #f08a24;\n" +
"    color: white; }\n" +
"  .label.success {\n" +
"    background-color: #43ac6a;\n" +
"    color: white; }\n" +
"  .label.secondary {\n" +
"    background-color: #e7e7e7;\n" +
"    color: #333333; }\n" +
"  .label.info {\n" +
"    background-color: #a0d3e8;\n" +
"    color: #333333; }\n" +
"\n" +
"[data-magellan-expedition], [data-magellan-expedition-clone] {\n" +
"  background: white;\n" +
"  z-index: 50;\n" +
"  min-width: 100%;\n" +
"  padding: 10px; }\n" +
"  [data-magellan-expedition] .sub-nav, [data-magellan-expedition-clone] .sub-nav {\n" +
"    margin-bottom: 0; }\n" +
"    [data-magellan-expedition] .sub-nav dd, [data-magellan-expedition-clone] .sub-nav dd {\n" +
"      margin-bottom: 0; }\n" +
"    [data-magellan-expedition] .sub-nav a, [data-magellan-expedition-clone] .sub-nav a {\n" +
"      line-height: 1.8em; }\n" +
"\n" +
"@-webkit-keyframes rotate {\n" +
"  from {\n" +
"    -webkit-transform: rotate(0deg); }\n" +
"\n" +
"  to {\n" +
"    -webkit-transform: rotate(360deg); } }\n" +
"@-moz-keyframes rotate {\n" +
"  from {\n" +
"    -moz-transform: rotate(0deg); }\n" +
"\n" +
"  to {\n" +
"    -moz-transform: rotate(360deg); } }\n" +
"@-o-keyframes rotate {\n" +
"  from {\n" +
"    -o-transform: rotate(0deg); }\n" +
"\n" +
"  to {\n" +
"    -o-transform: rotate(360deg); } }\n" +
"@keyframes rotate {\n" +
"  from {\n" +
"    transform: rotate(0deg); }\n" +
"\n" +
"  to {\n" +
"    transform: rotate(360deg); } }\n" +
"/* Orbit Graceful Loading */\n" +
".slideshow-wrapper {\n" +
"  position: relative; }\n" +
"  .slideshow-wrapper ul {\n" +
"    list-style-type: none;\n" +
"    margin: 0; }\n" +
"    .slideshow-wrapper ul li,\n" +
"    .slideshow-wrapper ul li .orbit-caption {\n" +
"      display: none; }\n" +
"    .slideshow-wrapper ul li:first-child {\n" +
"      display: block; }\n" +
"  .slideshow-wrapper .orbit-container {\n" +
"    background-color: transparent; }\n" +
"    .slideshow-wrapper .orbit-container li {\n" +
"      display: block; }\n" +
"      .slideshow-wrapper .orbit-container li .orbit-caption {\n" +
"        display: block; }\n" +
"    .slideshow-wrapper .orbit-container .orbit-bullets li {\n" +
"      display: inline-block; }\n" +
"  .slideshow-wrapper .preloader {\n" +
"    display: block;\n" +
"    width: 40px;\n" +
"    height: 40px;\n" +
"    position: absolute;\n" +
"    top: 50%;\n" +
"    left: 50%;\n" +
"    margin-top: -20px;\n" +
"    margin-left: -20px;\n" +
"    border: solid 3px;\n" +
"    border-color: #555555 white;\n" +
"    border-radius: 1000px;\n" +
"    animation-name: rotate;\n" +
"    animation-duration: 1.5s;\n" +
"    animation-iteration-count: infinite;\n" +
"    animation-timing-function: linear; }\n" +
"\n" +
".orbit-container {\n" +
"  overflow: hidden;\n" +
"  width: 100%;\n" +
"  position: relative;\n" +
"  background: none; }\n" +
"  .orbit-container .orbit-slides-container {\n" +
"    list-style: none;\n" +
"    margin: 0;\n" +
"    padding: 0;\n" +
"    position: relative;\n" +
"    -webkit-transform: translateZ(0); }\n" +
"    .orbit-container .orbit-slides-container img {\n" +
"      display: block;\n" +
"      max-width: 100%; }\n" +
"    .orbit-container .orbit-slides-container > * {\n" +
"      position: absolute;\n" +
"      top: 0;\n" +
"      width: 100%;\n" +
"      margin-left: 100%; }\n" +
"      .orbit-container .orbit-slides-container > *:first-child {\n" +
"        margin-left: 0%; }\n" +
"      .orbit-container .orbit-slides-container > * .orbit-caption {\n" +
"        position: absolute;\n" +
"        bottom: 0;\n" +
"        background-color: rgba(51, 51, 51, 0.8);\n" +
"        color: white;\n" +
"        width: 100%;\n" +
"        padding: 0.625rem 0.875rem;\n" +
"        font-size: 0.875rem; }\n" +
"  .orbit-container .orbit-slide-number {\n" +
"    position: absolute;\n" +
"    top: 10px;\n" +
"    left: 10px;\n" +
"    font-size: 12px;\n" +
"    color: white;\n" +
"    background: transparent;\n" +
"    z-index: 10; }\n" +
"    .orbit-container .orbit-slide-number span {\n" +
"      font-weight: 700;\n" +
"      padding: 0.3125rem; }\n" +
"  .orbit-container .orbit-timer {\n" +
"    position: absolute;\n" +
"    top: 12px;\n" +
"    right: 10px;\n" +
"    height: 6px;\n" +
"    width: 100px;\n" +
"    z-index: 10; }\n" +
"    .orbit-container .orbit-timer .orbit-progress {\n" +
"      height: 3px;\n" +
"      background-color: rgba(255, 255, 255, 0.3);\n" +
"      display: block;\n" +
"      width: 0%;\n" +
"      position: relative;\n" +
"      right: 20px;\n" +
"      top: 5px; }\n" +
"    .orbit-container .orbit-timer > span {\n" +
"      display: none;\n" +
"      position: absolute;\n" +
"      top: 0px;\n" +
"      right: 0;\n" +
"      width: 11px;\n" +
"      height: 14px;\n" +
"      border: solid 4px white;\n" +
"      border-top: none;\n" +
"      border-bottom: none; }\n" +
"    .orbit-container .orbit-timer.paused > span {\n" +
"      right: -4px;\n" +
"      top: 0px;\n" +
"      width: 11px;\n" +
"      height: 14px;\n" +
"      border: inset 8px;\n" +
"      border-left-style: solid;\n" +
"      border-color: transparent;\n" +
"      border-left-color: white; }\n" +
"      .orbit-container .orbit-timer.paused > span.dark {\n" +
"        border-left-color: #333333; }\n" +
"  .orbit-container:hover .orbit-timer > span {\n" +
"    display: block; }\n" +
"  .orbit-container .orbit-prev,\n" +
"  .orbit-container .orbit-next {\n" +
"    position: absolute;\n" +
"    top: 45%;\n" +
"    margin-top: -25px;\n" +
"    width: 36px;\n" +
"    height: 60px;\n" +
"    line-height: 50px;\n" +
"    color: white;\n" +
"    background-color: transparent;\n" +
"    text-indent: -9999px !important;\n" +
"    z-index: 10; }\n" +
"    .orbit-container .orbit-prev:hover,\n" +
"    .orbit-container .orbit-next:hover {\n" +
"      background-color: rgba(0, 0, 0, 0.3); }\n" +
"    .orbit-container .orbit-prev > span,\n" +
"    .orbit-container .orbit-next > span {\n" +
"      position: absolute;\n" +
"      top: 50%;\n" +
"      margin-top: -10px;\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 10px; }\n" +
"  .orbit-container .orbit-prev {\n" +
"    left: 0; }\n" +
"    .orbit-container .orbit-prev > span {\n" +
"      border-right-style: solid;\n" +
"      border-color: transparent;\n" +
"      border-right-color: white; }\n" +
"    .orbit-container .orbit-prev:hover > span {\n" +
"      border-right-color: white; }\n" +
"  .orbit-container .orbit-next {\n" +
"    right: 0; }\n" +
"    .orbit-container .orbit-next > span {\n" +
"      border-color: transparent;\n" +
"      border-left-style: solid;\n" +
"      border-left-color: white;\n" +
"      left: 50%;\n" +
"      margin-left: -4px; }\n" +
"    .orbit-container .orbit-next:hover > span {\n" +
"      border-left-color: white; }\n" +
"\n" +
".orbit-bullets-container {\n" +
"  text-align: center; }\n" +
"\n" +
".orbit-bullets {\n" +
"  margin: 0 auto 30px auto;\n" +
"  overflow: hidden;\n" +
"  position: relative;\n" +
"  top: 10px;\n" +
"  float: none;\n" +
"  text-align: center;\n" +
"  display: block; }\n" +
"  .orbit-bullets li {\n" +
"    cursor: pointer;\n" +
"    display: inline-block;\n" +
"    width: 0.5625rem;\n" +
"    height: 0.5625rem;\n" +
"    background: #cccccc;\n" +
"    float: none;\n" +
"    margin-right: 6px;\n" +
"    border-radius: 1000px; }\n" +
"    .orbit-bullets li.active {\n" +
"      background: #999999; }\n" +
"    .orbit-bullets li:last-child {\n" +
"      margin-right: 0; }\n" +
"\n" +
".touch .orbit-container .orbit-prev,\n" +
".touch .orbit-container .orbit-next {\n" +
"  display: none; }\n" +
".touch .orbit-bullets {\n" +
"  display: none; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .touch .orbit-container .orbit-prev,\n" +
"  .touch .orbit-container .orbit-next {\n" +
"    display: inherit; }\n" +
"  .touch .orbit-bullets {\n" +
"    display: block; } }\n" +
"@media only screen and (max-width: 40em) {\n" +
"  .orbit-stack-on-small .orbit-slides-container {\n" +
"    height: auto !important; }\n" +
"  .orbit-stack-on-small .orbit-slides-container > * {\n" +
"    position: relative;\n" +
"    margin: 0% !important;\n" +
"    opacity: 1 !important; }\n" +
"  .orbit-stack-on-small .orbit-slide-number {\n" +
"    display: none; }\n" +
"\n" +
"  .orbit-timer {\n" +
"    display: none; }\n" +
"\n" +
"  .orbit-next, .orbit-prev {\n" +
"    display: none; }\n" +
"\n" +
"  .orbit-bullets {\n" +
"    display: none; } }\n" +
"ul.pagination {\n" +
"  display: block;\n" +
"  min-height: 1.5rem;\n" +
"  margin-left: -0.3125rem; }\n" +
"  ul.pagination li {\n" +
"    height: 1.5rem;\n" +
"    color: #222222;\n" +
"    font-size: 0.875rem;\n" +
"    margin-left: 0.3125rem; }\n" +
"    ul.pagination li a, ul.pagination li button {\n" +
"      display: block;\n" +
"      padding: 0.0625rem 0.625rem 0.0625rem;\n" +
"      color: #999999;\n" +
"      background: none;\n" +
"      border-radius: 3px;\n" +
"      font-weight: normal;\n" +
"      font-size: 1em;\n" +
"      line-height: inherit;\n" +
"      transition: background-color 300ms ease-out; }\n" +
"    ul.pagination li:hover a,\n" +
"    ul.pagination li a:focus, ul.pagination li:hover button,\n" +
"    ul.pagination li button:focus {\n" +
"      background: #e6e6e6; }\n" +
"    ul.pagination li.unavailable a, ul.pagination li.unavailable button {\n" +
"      cursor: default;\n" +
"      color: #999999; }\n" +
"    ul.pagination li.unavailable:hover a, ul.pagination li.unavailable a:focus, ul.pagination li.unavailable:hover button, ul.pagination li.unavailable button:focus {\n" +
"      background: transparent; }\n" +
"    ul.pagination li.current a, ul.pagination li.current button {\n" +
"      background: #008cba;\n" +
"      color: white;\n" +
"      font-weight: bold;\n" +
"      cursor: default; }\n" +
"      ul.pagination li.current a:hover, ul.pagination li.current a:focus, ul.pagination li.current button:hover, ul.pagination li.current button:focus {\n" +
"        background: #008cba; }\n" +
"  ul.pagination li {\n" +
"    float: left;\n" +
"    display: block; }\n" +
"\n" +
"/* Pagination centred wrapper */\n" +
".pagination-centered {\n" +
"  text-align: center; }\n" +
"  .pagination-centered ul.pagination li {\n" +
"    float: none;\n" +
"    display: inline-block; }\n" +
"\n" +
"/* Panels */\n" +
".panel {\n" +
"  border-style: solid;\n" +
"  border-width: 1px;\n" +
"  border-color: #d8d8d8;\n" +
"  margin-bottom: 1.25rem;\n" +
"  padding: 1.25rem;\n" +
"  background: #f2f2f2;\n" +
"  color: #333333; }\n" +
"  .panel > :first-child {\n" +
"    margin-top: 0; }\n" +
"  .panel > :last-child {\n" +
"    margin-bottom: 0; }\n" +
"  .panel h1, .panel h2, .panel h3, .panel h4, .panel h5, .panel h6, .panel p, .panel li, .panel dl {\n" +
"    color: #333333; }\n" +
"  .panel h1, .panel h2, .panel h3, .panel h4, .panel h5, .panel h6 {\n" +
"    line-height: 1;\n" +
"    margin-bottom: 0.625rem; }\n" +
"    .panel h1.subheader, .panel h2.subheader, .panel h3.subheader, .panel h4.subheader, .panel h5.subheader, .panel h6.subheader {\n" +
"      line-height: 1.4; }\n" +
"  .panel.callout {\n" +
"    border-style: solid;\n" +
"    border-width: 1px;\n" +
"    border-color: #b6edff;\n" +
"    margin-bottom: 1.25rem;\n" +
"    padding: 1.25rem;\n" +
"    background: #ecfaff;\n" +
"    color: #333333; }\n" +
"    .panel.callout > :first-child {\n" +
"      margin-top: 0; }\n" +
"    .panel.callout > :last-child {\n" +
"      margin-bottom: 0; }\n" +
"    .panel.callout h1, .panel.callout h2, .panel.callout h3, .panel.callout h4, .panel.callout h5, .panel.callout h6, .panel.callout p, .panel.callout li, .panel.callout dl {\n" +
"      color: #333333; }\n" +
"    .panel.callout h1, .panel.callout h2, .panel.callout h3, .panel.callout h4, .panel.callout h5, .panel.callout h6 {\n" +
"      line-height: 1;\n" +
"      margin-bottom: 0.625rem; }\n" +
"      .panel.callout h1.subheader, .panel.callout h2.subheader, .panel.callout h3.subheader, .panel.callout h4.subheader, .panel.callout h5.subheader, .panel.callout h6.subheader {\n" +
"        line-height: 1.4; }\n" +
"    .panel.callout a:not(.button) {\n" +
"      color: #008cba; }\n" +
"  .panel.radius {\n" +
"    border-radius: 3px; }\n" +
"\n" +
"/* Pricing Tables */\n" +
".pricing-table {\n" +
"  border: solid 1px #dddddd;\n" +
"  margin-left: 0;\n" +
"  margin-bottom: 1.25rem; }\n" +
"  .pricing-table * {\n" +
"    list-style: none;\n" +
"    line-height: 1; }\n" +
"  .pricing-table .title {\n" +
"    background-color: #333333;\n" +
"    padding: 0.9375rem 1.25rem;\n" +
"    text-align: center;\n" +
"    color: #eeeeee;\n" +
"    font-weight: normal;\n" +
"    font-size: 1rem;\n" +
"    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n" +
"  .pricing-table .price {\n" +
"    background-color: #f6f6f6;\n" +
"    padding: 0.9375rem 1.25rem;\n" +
"    text-align: center;\n" +
"    color: #333333;\n" +
"    font-weight: normal;\n" +
"    font-size: 2rem;\n" +
"    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n" +
"  .pricing-table .description {\n" +
"    background-color: white;\n" +
"    padding: 0.9375rem;\n" +
"    text-align: center;\n" +
"    color: #777777;\n" +
"    font-size: 0.75rem;\n" +
"    font-weight: normal;\n" +
"    line-height: 1.4;\n" +
"    border-bottom: dotted 1px #dddddd; }\n" +
"  .pricing-table .bullet-item {\n" +
"    background-color: white;\n" +
"    padding: 0.9375rem;\n" +
"    text-align: center;\n" +
"    color: #333333;\n" +
"    font-size: 0.875rem;\n" +
"    font-weight: normal;\n" +
"    border-bottom: dotted 1px #dddddd; }\n" +
"  .pricing-table .cta-button {\n" +
"    background-color: white;\n" +
"    text-align: center;\n" +
"    padding: 1.25rem 1.25rem 0; }\n" +
"\n" +
"/* Progress Bar */\n" +
".progress {\n" +
"  background-color: #f6f6f6;\n" +
"  height: 1.5625rem;\n" +
"  border: 1px solid white;\n" +
"  padding: 0.125rem;\n" +
"  margin-bottom: 0.625rem; }\n" +
"  .progress .meter {\n" +
"    background: #008cba;\n" +
"    height: 100%;\n" +
"    display: block; }\n" +
"  .progress.secondary .meter {\n" +
"    background: #e7e7e7;\n" +
"    height: 100%;\n" +
"    display: block; }\n" +
"  .progress.success .meter {\n" +
"    background: #43ac6a;\n" +
"    height: 100%;\n" +
"    display: block; }\n" +
"  .progress.alert .meter {\n" +
"    background: #f04124;\n" +
"    height: 100%;\n" +
"    display: block; }\n" +
"  .progress.radius {\n" +
"    border-radius: 3px; }\n" +
"    .progress.radius .meter {\n" +
"      border-radius: 2px; }\n" +
"  .progress.round {\n" +
"    border-radius: 1000px; }\n" +
"    .progress.round .meter {\n" +
"      border-radius: 999px; }\n" +
"\n" +
".range-slider {\n" +
"  display: block;\n" +
"  position: relative;\n" +
"  width: 100%;\n" +
"  height: 1rem;\n" +
"  border: 1px solid #dddddd;\n" +
"  margin: 1.25rem 0;\n" +
"  -ms-touch-action: none;\n" +
"  touch-action: none;\n" +
"  background: #fafafa; }\n" +
"  .range-slider.vertical-range {\n" +
"    display: block;\n" +
"    position: relative;\n" +
"    width: 100%;\n" +
"    height: 1rem;\n" +
"    border: 1px solid #dddddd;\n" +
"    margin: 1.25rem 0;\n" +
"    -ms-touch-action: none;\n" +
"    touch-action: none;\n" +
"    display: inline-block;\n" +
"    width: 1rem;\n" +
"    height: 12.5rem; }\n" +
"    .range-slider.vertical-range .range-slider-handle {\n" +
"      margin-top: 0;\n" +
"      margin-left: -0.5rem;\n" +
"      position: absolute;\n" +
"      bottom: -10.5rem; }\n" +
"    .range-slider.vertical-range .range-slider-active-segment {\n" +
"      width: 0.875rem;\n" +
"      height: auto;\n" +
"      bottom: 0; }\n" +
"  .range-slider.radius {\n" +
"    background: #fafafa;\n" +
"    border-radius: 3px; }\n" +
"    .range-slider.radius .range-slider-handle {\n" +
"      background: #008cba;\n" +
"      border-radius: 3px; }\n" +
"      .range-slider.radius .range-slider-handle:hover {\n" +
"        background: #007ba4; }\n" +
"  .range-slider.round {\n" +
"    background: #fafafa;\n" +
"    border-radius: 1000px; }\n" +
"    .range-slider.round .range-slider-handle {\n" +
"      background: #008cba;\n" +
"      border-radius: 1000px; }\n" +
"      .range-slider.round .range-slider-handle:hover {\n" +
"        background: #007ba4; }\n" +
"  .range-slider.disabled, .range-slider[disabled] {\n" +
"    background: #fafafa;\n" +
"    cursor: default;\n" +
"    opacity: 0.7; }\n" +
"    .range-slider.disabled .range-slider-handle, .range-slider[disabled] .range-slider-handle {\n" +
"      background: #008cba;\n" +
"      cursor: default;\n" +
"      opacity: 0.7; }\n" +
"      .range-slider.disabled .range-slider-handle:hover, .range-slider[disabled] .range-slider-handle:hover {\n" +
"        background: #007ba4; }\n" +
"\n" +
".range-slider-active-segment {\n" +
"  display: inline-block;\n" +
"  position: absolute;\n" +
"  height: 0.875rem;\n" +
"  background: #e5e5e5; }\n" +
"\n" +
".range-slider-handle {\n" +
"  display: inline-block;\n" +
"  position: absolute;\n" +
"  z-index: 1;\n" +
"  top: -0.3125rem;\n" +
"  width: 2rem;\n" +
"  height: 1.375rem;\n" +
"  border: 1px solid none;\n" +
"  cursor: pointer;\n" +
"  -ms-touch-action: manipulation;\n" +
"  touch-action: manipulation;\n" +
"  background: #008cba; }\n" +
"  .range-slider-handle:hover {\n" +
"    background: #007ba4; }\n" +
"\n" +
".reveal-modal-bg {\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  background: black;\n" +
"  background: rgba(0, 0, 0, 0.45);\n" +
"  z-index: 1004;\n" +
"  display: none;\n" +
"  left: 0; }\n" +
"\n" +
".reveal-modal, dialog {\n" +
"  visibility: hidden;\n" +
"  display: none;\n" +
"  position: absolute;\n" +
"  z-index: 1005;\n" +
"  width: 100vw;\n" +
"  top: 0;\n" +
"  border-radius: 3px;\n" +
"  left: 0;\n" +
"  background-color: white;\n" +
"  padding: 1.25rem;\n" +
"  border: solid 1px #666666;\n" +
"  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n" +
"  padding: 1.875rem; }\n" +
"  @media only screen and (max-width: 40em) {\n" +
"    .reveal-modal, dialog {\n" +
"      min-height: 100vh; } }\n" +
"  .reveal-modal .column, dialog .column, .reveal-modal .columns, dialog .columns {\n" +
"    min-width: 0; }\n" +
"  .reveal-modal > :first-child, dialog > :first-child {\n" +
"    margin-top: 0; }\n" +
"  .reveal-modal > :last-child, dialog > :last-child {\n" +
"    margin-bottom: 0; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal, dialog {\n" +
"      width: 80%;\n" +
"      max-width: 100%;\n" +
"      left: 0;\n" +
"      right: 0;\n" +
"      margin: 0 auto; } }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal, dialog {\n" +
"      top: 6.25rem; } }\n" +
"  .reveal-modal.radius, dialog.radius {\n" +
"    border-radius: 3px; }\n" +
"  .reveal-modal.round, dialog.round {\n" +
"    border-radius: 1000px; }\n" +
"  .reveal-modal.collapse, dialog.collapse {\n" +
"    padding: 0; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal.tiny, dialog.tiny {\n" +
"      width: 30%;\n" +
"      max-width: 100%;\n" +
"      left: 0;\n" +
"      right: 0;\n" +
"      margin: 0 auto; } }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal.small, dialog.small {\n" +
"      width: 40%;\n" +
"      max-width: 100%;\n" +
"      left: 0;\n" +
"      right: 0;\n" +
"      margin: 0 auto; } }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal.medium, dialog.medium {\n" +
"      width: 60%;\n" +
"      max-width: 100%;\n" +
"      left: 0;\n" +
"      right: 0;\n" +
"      margin: 0 auto; } }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal.large, dialog.large {\n" +
"      width: 70%;\n" +
"      max-width: 100%;\n" +
"      left: 0;\n" +
"      right: 0;\n" +
"      margin: 0 auto; } }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .reveal-modal.xlarge, dialog.xlarge {\n" +
"      width: 95%;\n" +
"      max-width: 100%;\n" +
"      left: 0;\n" +
"      right: 0;\n" +
"      margin: 0 auto; } }\n" +
"  .reveal-modal.full, dialog.full {\n" +
"    top: 0;\n" +
"    left: 0;\n" +
"    height: 100%;\n" +
"    height: 100vh;\n" +
"    min-height: 100vh;\n" +
"    margin-left: 0 !important; }\n" +
"    @media only screen and (min-width: 40.063em) {\n" +
"      .reveal-modal.full, dialog.full {\n" +
"        width: 100vw;\n" +
"        max-width: 100%;\n" +
"        left: 0;\n" +
"        right: 0;\n" +
"        margin: 0 auto; } }\n" +
"  .reveal-modal .close-reveal-modal, dialog .close-reveal-modal {\n" +
"    font-size: 2.5rem;\n" +
"    line-height: 1;\n" +
"    position: absolute;\n" +
"    top: 0.5rem;\n" +
"    right: 0.6875rem;\n" +
"    color: #aaaaaa;\n" +
"    font-weight: bold;\n" +
"    cursor: pointer; }\n" +
"\n" +
"dialog {\n" +
"  display: none; }\n" +
"  dialog::backdrop, dialog + .backdrop {\n" +
"    position: fixed;\n" +
"    top: 0;\n" +
"    bottom: 0;\n" +
"    left: 0;\n" +
"    right: 0;\n" +
"    background: black;\n" +
"    background: rgba(0, 0, 0, 0.45);\n" +
"    z-index: auto;\n" +
"    display: none;\n" +
"    left: 0; }\n" +
"  dialog[open] {\n" +
"    display: block; }\n" +
"\n" +
"@media print {\n" +
"  dialog, .reveal-modal, dialog {\n" +
"    display: none;\n" +
"    background: white !important; } }\n" +
".side-nav {\n" +
"  display: block;\n" +
"  margin: 0;\n" +
"  padding: 0.875rem 0;\n" +
"  list-style-type: none;\n" +
"  list-style-position: outside;\n" +
"  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n" +
"  .side-nav li {\n" +
"    margin: 0 0 0.4375rem 0;\n" +
"    font-size: 0.875rem;\n" +
"    font-weight: normal; }\n" +
"    .side-nav li a:not(.button) {\n" +
"      display: block;\n" +
"      color: #008cba;\n" +
"      margin: 0;\n" +
"      padding: 0.4375rem 0.875rem; }\n" +
"      .side-nav li a:not(.button):hover, .side-nav li a:not(.button):focus {\n" +
"        background: rgba(0, 0, 0, 0.025);\n" +
"        color: #1cc7ff; }\n" +
"    .side-nav li.active > a:first-child:not(.button) {\n" +
"      color: #1cc7ff;\n" +
"      font-weight: normal;\n" +
"      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif; }\n" +
"    .side-nav li.divider {\n" +
"      border-top: 1px solid;\n" +
"      height: 0;\n" +
"      padding: 0;\n" +
"      list-style: none;\n" +
"      border-top-color: white; }\n" +
"    .side-nav li.heading {\n" +
"      color: #008cba;\n" +
"      font-size: 0.875rem;\n" +
"      font-weight: bold;\n" +
"      text-transform: uppercase; }\n" +
"\n" +
".split.button {\n" +
"  position: relative;\n" +
"  padding-right: 5.0625rem; }\n" +
"  .split.button span {\n" +
"    display: block;\n" +
"    height: 100%;\n" +
"    position: absolute;\n" +
"    right: 0;\n" +
"    top: 0;\n" +
"    border-left: solid 1px; }\n" +
"    .split.button span:after {\n" +
"      position: absolute;\n" +
"      content: \"\";\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      display: block;\n" +
"      border-style: inset;\n" +
"      top: 50%;\n" +
"      left: 50%; }\n" +
"    .split.button span:active {\n" +
"      background-color: rgba(0, 0, 0, 0.1); }\n" +
"  .split.button span {\n" +
"    border-left-color: rgba(255, 255, 255, 0.5); }\n" +
"  .split.button span {\n" +
"    width: 3.09375rem; }\n" +
"    .split.button span:after {\n" +
"      border-top-style: solid;\n" +
"      border-width: 0.375rem;\n" +
"      top: 48%;\n" +
"      margin-left: -0.375rem; }\n" +
"  .split.button span:after {\n" +
"    border-color: white transparent transparent transparent; }\n" +
"  .split.button.secondary span {\n" +
"    border-left-color: rgba(255, 255, 255, 0.5); }\n" +
"  .split.button.secondary span:after {\n" +
"    border-color: white transparent transparent transparent; }\n" +
"  .split.button.alert span {\n" +
"    border-left-color: rgba(255, 255, 255, 0.5); }\n" +
"  .split.button.success span {\n" +
"    border-left-color: rgba(255, 255, 255, 0.5); }\n" +
"  .split.button.tiny {\n" +
"    padding-right: 3.75rem; }\n" +
"    .split.button.tiny span {\n" +
"      width: 2.25rem; }\n" +
"      .split.button.tiny span:after {\n" +
"        border-top-style: solid;\n" +
"        border-width: 0.375rem;\n" +
"        top: 48%;\n" +
"        margin-left: -0.375rem; }\n" +
"  .split.button.small {\n" +
"    padding-right: 4.375rem; }\n" +
"    .split.button.small span {\n" +
"      width: 2.625rem; }\n" +
"      .split.button.small span:after {\n" +
"        border-top-style: solid;\n" +
"        border-width: 0.4375rem;\n" +
"        top: 48%;\n" +
"        margin-left: -0.375rem; }\n" +
"  .split.button.large {\n" +
"    padding-right: 5.5rem; }\n" +
"    .split.button.large span {\n" +
"      width: 3.4375rem; }\n" +
"      .split.button.large span:after {\n" +
"        border-top-style: solid;\n" +
"        border-width: 0.3125rem;\n" +
"        top: 48%;\n" +
"        margin-left: -0.375rem; }\n" +
"  .split.button.expand {\n" +
"    padding-left: 2rem; }\n" +
"  .split.button.secondary span:after {\n" +
"    border-color: #333333 transparent transparent transparent; }\n" +
"  .split.button.radius span {\n" +
"    -webkit-border-bottom-right-radius: 3px;\n" +
"    -webkit-border-top-right-radius: 3px;\n" +
"    border-bottom-right-radius: 3px;\n" +
"    border-top-right-radius: 3px; }\n" +
"  .split.button.round span {\n" +
"    -webkit-border-bottom-right-radius: 1000px;\n" +
"    -webkit-border-top-right-radius: 1000px;\n" +
"    border-bottom-right-radius: 1000px;\n" +
"    border-top-right-radius: 1000px; }\n" +
"\n" +
".sub-nav {\n" +
"  display: block;\n" +
"  width: auto;\n" +
"  overflow: hidden;\n" +
"  margin: -0.25rem 0 1.125rem;\n" +
"  padding-top: 0.25rem;\n" +
"  margin-right: 0;\n" +
"  margin-left: -0.75rem; }\n" +
"  .sub-nav dt {\n" +
"    text-transform: uppercase; }\n" +
"  .sub-nav dt,\n" +
"  .sub-nav dd,\n" +
"  .sub-nav li {\n" +
"    float: left;\n" +
"    display: inline;\n" +
"    margin-left: 1rem;\n" +
"    margin-bottom: 0.625rem;\n" +
"    font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"    font-weight: normal;\n" +
"    font-size: 0.875rem;\n" +
"    color: #999999; }\n" +
"    .sub-nav dt a,\n" +
"    .sub-nav dd a,\n" +
"    .sub-nav li a {\n" +
"      text-decoration: none;\n" +
"      color: #999999;\n" +
"      padding: 0.1875rem 1rem; }\n" +
"      .sub-nav dt a:hover,\n" +
"      .sub-nav dd a:hover,\n" +
"      .sub-nav li a:hover {\n" +
"        color: #737373; }\n" +
"    .sub-nav dt.active a,\n" +
"    .sub-nav dd.active a,\n" +
"    .sub-nav li.active a {\n" +
"      border-radius: 3px;\n" +
"      font-weight: normal;\n" +
"      background: #008cba;\n" +
"      padding: 0.1875rem 1rem;\n" +
"      cursor: default;\n" +
"      color: white; }\n" +
"      .sub-nav dt.active a:hover,\n" +
"      .sub-nav dd.active a:hover,\n" +
"      .sub-nav li.active a:hover {\n" +
"        background: #0078a0; }\n" +
"\n" +
".switch {\n" +
"  padding: 0;\n" +
"  border: none;\n" +
"  position: relative; }\n" +
"  .switch label {\n" +
"    display: block;\n" +
"    margin-bottom: 1rem;\n" +
"    position: relative;\n" +
"    color: transparent;\n" +
"    background: #dddddd;\n" +
"    text-indent: 100%;\n" +
"    width: 4rem;\n" +
"    height: 2rem;\n" +
"    cursor: pointer;\n" +
"    transition: left 0.15s ease-out; }\n" +
"  .switch input {\n" +
"    opacity: 0;\n" +
"    position: absolute;\n" +
"    top: 9px;\n" +
"    left: 10px;\n" +
"    padding: 0; }\n" +
"    .switch input + label {\n" +
"      margin-left: 0;\n" +
"      margin-right: 0; }\n" +
"  .switch label:after {\n" +
"    content: \"\";\n" +
"    display: block;\n" +
"    background: white;\n" +
"    position: absolute;\n" +
"    top: .25rem;\n" +
"    left: .25rem;\n" +
"    width: 1.5rem;\n" +
"    height: 1.5rem;\n" +
"    -webkit-transition: left 0.15s ease-out;\n" +
"    -moz-transition: left 0.15s ease-out;\n" +
"    transition: left 0.15s ease-out;\n" +
"    -webkit-transform: translate3d(0, 0, 0);\n" +
"    -moz-transform: translate3d(0, 0, 0);\n" +
"    transform: translate3d(0, 0, 0); }\n" +
"  .switch input:checked + label {\n" +
"    background: #008cba; }\n" +
"  .switch input:checked + label:after {\n" +
"    left: 2.25rem; }\n" +
"  .switch label {\n" +
"    width: 4rem;\n" +
"    height: 2rem; }\n" +
"  .switch label:after {\n" +
"    width: 1.5rem;\n" +
"    height: 1.5rem; }\n" +
"  .switch input:checked + label:after {\n" +
"    left: 2.25rem; }\n" +
"  .switch label {\n" +
"    color: transparent;\n" +
"    background: #dddddd; }\n" +
"  .switch label:after {\n" +
"    background: white; }\n" +
"  .switch input:checked + label {\n" +
"    background: #008cba; }\n" +
"  .switch.large label {\n" +
"    width: 5rem;\n" +
"    height: 2.5rem; }\n" +
"  .switch.large label:after {\n" +
"    width: 2rem;\n" +
"    height: 2rem; }\n" +
"  .switch.large input:checked + label:after {\n" +
"    left: 2.75rem; }\n" +
"  .switch.small label {\n" +
"    width: 3.5rem;\n" +
"    height: 1.75rem; }\n" +
"  .switch.small label:after {\n" +
"    width: 1.25rem;\n" +
"    height: 1.25rem; }\n" +
"  .switch.small input:checked + label:after {\n" +
"    left: 2rem; }\n" +
"  .switch.tiny label {\n" +
"    width: 3rem;\n" +
"    height: 1.5rem; }\n" +
"  .switch.tiny label:after {\n" +
"    width: 1rem;\n" +
"    height: 1rem; }\n" +
"  .switch.tiny input:checked + label:after {\n" +
"    left: 1.75rem; }\n" +
"  .switch.radius label {\n" +
"    border-radius: 4px; }\n" +
"  .switch.radius label:after {\n" +
"    border-radius: 3px; }\n" +
"  .switch.round {\n" +
"    border-radius: 1000px; }\n" +
"    .switch.round label {\n" +
"      border-radius: 2rem; }\n" +
"    .switch.round label:after {\n" +
"      border-radius: 2rem; }\n" +
"\n" +
"table {\n" +
"  background: white;\n" +
"  margin-bottom: 1.25rem;\n" +
"  border: solid 1px #dddddd;\n" +
"  table-layout: auto; }\n" +
"  table caption {\n" +
"    background: transparent;\n" +
"    color: #222222;\n" +
"    font-size: 1rem;\n" +
"    font-weight: bold; }\n" +
"  table thead {\n" +
"    background: whitesmoke; }\n" +
"    table thead tr th,\n" +
"    table thead tr td {\n" +
"      padding: 0.5rem 0.625rem 0.625rem;\n" +
"      font-size: 0.875rem;\n" +
"      font-weight: bold;\n" +
"      color: #222222; }\n" +
"  table tfoot {\n" +
"    background: whitesmoke; }\n" +
"    table tfoot tr th,\n" +
"    table tfoot tr td {\n" +
"      padding: 0.5rem 0.625rem 0.625rem;\n" +
"      font-size: 0.875rem;\n" +
"      font-weight: bold;\n" +
"      color: #222222; }\n" +
"  table tr th,\n" +
"  table tr td {\n" +
"    padding: 0.5625rem 0.625rem;\n" +
"    font-size: 0.875rem;\n" +
"    color: #222222;\n" +
"    text-align: left; }\n" +
"  table tr.even, table tr.alt, table tr:nth-of-type(even) {\n" +
"    background: #f9f9f9; }\n" +
"  table thead tr th,\n" +
"  table tfoot tr th,\n" +
"  table tfoot tr td,\n" +
"  table tbody tr th,\n" +
"  table tbody tr td,\n" +
"  table tr td {\n" +
"    display: table-cell;\n" +
"    line-height: 1.125rem; }\n" +
"\n" +
".tabs {\n" +
"  margin-bottom: 0 !important;\n" +
"  margin-left: 0; }\n" +
"  .tabs:before, .tabs:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .tabs:after {\n" +
"    clear: both; }\n" +
"  .tabs dd, .tabs .tab-title {\n" +
"    position: relative;\n" +
"    margin-bottom: 0 !important;\n" +
"    list-style: none;\n" +
"    float: left; }\n" +
"    .tabs dd > a, .tabs .tab-title > a {\n" +
"      display: block;\n" +
"      background-color: #efefef;\n" +
"      color: #222222;\n" +
"      padding: 1rem 2rem;\n" +
"      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"      font-size: 1rem; }\n" +
"      .tabs dd > a:hover, .tabs .tab-title > a:hover {\n" +
"        background-color: #e1e1e1; }\n" +
"    .tabs dd.active a, .tabs .tab-title.active a {\n" +
"      background-color: white;\n" +
"      color: #222222; }\n" +
"  .tabs.radius dd:first-child a, .tabs.radius .tab:first-child a {\n" +
"    -webkit-border-bottom-left-radius: 3px;\n" +
"    -webkit-border-top-left-radius: 3px;\n" +
"    border-bottom-left-radius: 3px;\n" +
"    border-top-left-radius: 3px; }\n" +
"  .tabs.radius dd:last-child a, .tabs.radius .tab:last-child a {\n" +
"    -webkit-border-bottom-right-radius: 3px;\n" +
"    -webkit-border-top-right-radius: 3px;\n" +
"    border-bottom-right-radius: 3px;\n" +
"    border-top-right-radius: 3px; }\n" +
"  .tabs.vertical dd, .tabs.vertical .tab-title {\n" +
"    position: inherit;\n" +
"    float: none;\n" +
"    display: block;\n" +
"    top: auto; }\n" +
"\n" +
".tabs-content {\n" +
"  margin-bottom: 1.5rem;\n" +
"  width: 100%; }\n" +
"  .tabs-content:before, .tabs-content:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .tabs-content:after {\n" +
"    clear: both; }\n" +
"  .tabs-content > .content {\n" +
"    display: none;\n" +
"    float: left;\n" +
"    padding: 0.9375rem 0;\n" +
"    width: 100%; }\n" +
"    .tabs-content > .content.active {\n" +
"      display: block;\n" +
"      float: none; }\n" +
"    .tabs-content > .content.contained {\n" +
"      padding: 0.9375rem; }\n" +
"  .tabs-content.vertical {\n" +
"    display: block; }\n" +
"    .tabs-content.vertical > .content {\n" +
"      padding: 0 0.9375rem; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .tabs.vertical {\n" +
"    width: 20%;\n" +
"    max-width: 20%;\n" +
"    float: left;\n" +
"    margin: 0 0 1.25rem; }\n" +
"\n" +
"  .tabs-content.vertical {\n" +
"    width: 80%;\n" +
"    max-width: 80%;\n" +
"    float: left;\n" +
"    margin-left: -1px;\n" +
"    padding-left: 1rem; } }\n" +
".no-js .tabs-content > .content {\n" +
"  display: block;\n" +
"  float: none; }\n" +
"\n" +
"/* Image Thumbnails */\n" +
".th {\n" +
"  line-height: 0;\n" +
"  display: inline-block;\n" +
"  border: solid 4px white;\n" +
"  max-width: 100%;\n" +
"  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.2);\n" +
"  transition: all 200ms ease-out; }\n" +
"  .th:hover, .th:focus {\n" +
"    box-shadow: 0 0 6px 1px rgba(0, 140, 186, 0.5); }\n" +
"  .th.radius {\n" +
"    border-radius: 3px; }\n" +
"\n" +
"/* Tooltips */\n" +
".has-tip {\n" +
"  border-bottom: dotted 1px #cccccc;\n" +
"  cursor: help;\n" +
"  font-weight: bold;\n" +
"  color: #333333; }\n" +
"  .has-tip:hover, .has-tip:focus {\n" +
"    border-bottom: dotted 1px #003f54;\n" +
"    color: #008cba; }\n" +
"  .has-tip.tip-left, .has-tip.tip-right {\n" +
"    float: none !important; }\n" +
"\n" +
".tooltip {\n" +
"  display: none;\n" +
"  position: absolute;\n" +
"  z-index: 1006;\n" +
"  font-weight: normal;\n" +
"  font-size: 0.875rem;\n" +
"  line-height: 1.3;\n" +
"  padding: 0.75rem;\n" +
"  max-width: 300px;\n" +
"  left: 50%;\n" +
"  width: 100%;\n" +
"  color: white;\n" +
"  background: #333333; }\n" +
"  .tooltip > .nub {\n" +
"    display: block;\n" +
"    left: 5px;\n" +
"    position: absolute;\n" +
"    width: 0;\n" +
"    height: 0;\n" +
"    border: solid 5px;\n" +
"    border-color: transparent transparent #333333 transparent;\n" +
"    top: -10px;\n" +
"    pointer-events: none; }\n" +
"    .tooltip > .nub.rtl {\n" +
"      left: auto;\n" +
"      right: 5px; }\n" +
"  .tooltip.radius {\n" +
"    border-radius: 3px; }\n" +
"  .tooltip.round {\n" +
"    border-radius: 1000px; }\n" +
"    .tooltip.round > .nub {\n" +
"      left: 2rem; }\n" +
"  .tooltip.opened {\n" +
"    color: #008cba !important;\n" +
"    border-bottom: dotted 1px #003f54 !important; }\n" +
"\n" +
".tap-to-close {\n" +
"  display: block;\n" +
"  font-size: 0.625rem;\n" +
"  color: #777777;\n" +
"  font-weight: normal; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .tooltip > .nub {\n" +
"    border-color: transparent transparent #333333 transparent;\n" +
"    top: -10px; }\n" +
"  .tooltip.tip-top > .nub {\n" +
"    border-color: #333333 transparent transparent transparent;\n" +
"    top: auto;\n" +
"    bottom: -10px; }\n" +
"  .tooltip.tip-left, .tooltip.tip-right {\n" +
"    float: none !important; }\n" +
"  .tooltip.tip-left > .nub {\n" +
"    border-color: transparent transparent transparent #333333;\n" +
"    right: -10px;\n" +
"    left: auto;\n" +
"    top: 50%;\n" +
"    margin-top: -5px; }\n" +
"  .tooltip.tip-right > .nub {\n" +
"    border-color: transparent #333333 transparent transparent;\n" +
"    right: auto;\n" +
"    left: -10px;\n" +
"    top: 50%;\n" +
"    margin-top: -5px; } }\n" +
"meta.foundation-mq-topbar {\n" +
"  font-family: \"/only screen and (min-width:40.063em)/\";\n" +
"  width: 40.063em; }\n" +
"\n" +
"/* Wrapped around .top-bar to contain to grid width */\n" +
".contain-to-grid {\n" +
"  width: 100%;\n" +
"  background: #333333; }\n" +
"  .contain-to-grid .top-bar {\n" +
"    margin-bottom: 0; }\n" +
"\n" +
".fixed {\n" +
"  width: 100%;\n" +
"  left: 0;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  z-index: 99; }\n" +
"  .fixed.expanded:not(.top-bar) {\n" +
"    overflow-y: auto;\n" +
"    height: auto;\n" +
"    width: 100%;\n" +
"    max-height: 100%; }\n" +
"    .fixed.expanded:not(.top-bar) .title-area {\n" +
"      position: fixed;\n" +
"      width: 100%;\n" +
"      z-index: 99; }\n" +
"    .fixed.expanded:not(.top-bar) .top-bar-section {\n" +
"      z-index: 98;\n" +
"      margin-top: 45px; }\n" +
"\n" +
".top-bar {\n" +
"  overflow: hidden;\n" +
"  height: 45px;\n" +
"  line-height: 45px;\n" +
"  position: relative;\n" +
"  background: #333333;\n" +
"  margin-bottom: 0; }\n" +
"  .top-bar ul {\n" +
"    margin-bottom: 0;\n" +
"    list-style: none; }\n" +
"  .top-bar .row {\n" +
"    max-width: none; }\n" +
"  .top-bar form,\n" +
"  .top-bar input {\n" +
"    margin-bottom: 0; }\n" +
"  .top-bar input {\n" +
"    height: 1.8rem;\n" +
"    padding-top: .35rem;\n" +
"    padding-bottom: .35rem;\n" +
"    font-size: 0.75rem; }\n" +
"  .top-bar .button, .top-bar button {\n" +
"    padding-top: 0.4125rem;\n" +
"    padding-bottom: 0.4125rem;\n" +
"    margin-bottom: 0;\n" +
"    font-size: 0.75rem; }\n" +
"    @media only screen and (max-width: 40em) {\n" +
"      .top-bar .button, .top-bar button {\n" +
"        position: relative;\n" +
"        top: -1px; } }\n" +
"  .top-bar .title-area {\n" +
"    position: relative;\n" +
"    margin: 0; }\n" +
"  .top-bar .name {\n" +
"    height: 45px;\n" +
"    margin: 0;\n" +
"    font-size: 16px; }\n" +
"    .top-bar .name h1 {\n" +
"      line-height: 45px;\n" +
"      font-size: 1.0625rem;\n" +
"      margin: 0; }\n" +
"      .top-bar .name h1 a {\n" +
"        font-weight: normal;\n" +
"        color: white;\n" +
"        width: 75%;\n" +
"        display: block;\n" +
"        padding: 0 15px; }\n" +
"  .top-bar .toggle-topbar {\n" +
"    position: absolute;\n" +
"    right: 0;\n" +
"    top: 0; }\n" +
"    .top-bar .toggle-topbar a {\n" +
"      color: white;\n" +
"      text-transform: uppercase;\n" +
"      font-size: 0.8125rem;\n" +
"      font-weight: bold;\n" +
"      position: relative;\n" +
"      display: block;\n" +
"      padding: 0 15px;\n" +
"      height: 45px;\n" +
"      line-height: 45px; }\n" +
"    .top-bar .toggle-topbar.menu-icon {\n" +
"      top: 50%;\n" +
"      margin-top: -16px; }\n" +
"      .top-bar .toggle-topbar.menu-icon a {\n" +
"        height: 34px;\n" +
"        line-height: 33px;\n" +
"        padding: 0 40px 0 15px;\n" +
"        color: white;\n" +
"        position: relative; }\n" +
"        .top-bar .toggle-topbar.menu-icon a span::after {\n" +
"          content: \"\";\n" +
"          position: absolute;\n" +
"          display: block;\n" +
"          height: 0;\n" +
"          top: 50%;\n" +
"          margin-top: -8px;\n" +
"          right: 15px;\n" +
"          box-shadow: 0 0px 0 1px white, 0 7px 0 1px white, 0 14px 0 1px white;\n" +
"          width: 16px; }\n" +
"        .top-bar .toggle-topbar.menu-icon a span:hover:after {\n" +
"          box-shadow: 0 0px 0 1px \"\", 0 7px 0 1px \"\", 0 14px 0 1px \"\"; }\n" +
"  .top-bar.expanded {\n" +
"    height: auto;\n" +
"    background: transparent; }\n" +
"    .top-bar.expanded .title-area {\n" +
"      background: #333333; }\n" +
"    .top-bar.expanded .toggle-topbar a {\n" +
"      color: #888888; }\n" +
"      .top-bar.expanded .toggle-topbar a span::after {\n" +
"        box-shadow: 0 0px 0 1px #888888, 0 7px 0 1px #888888, 0 14px 0 1px #888888; }\n" +
"\n" +
".top-bar-section {\n" +
"  left: 0;\n" +
"  position: relative;\n" +
"  width: auto;\n" +
"  transition: left 300ms ease-out; }\n" +
"  .top-bar-section ul {\n" +
"    padding: 0;\n" +
"    width: 100%;\n" +
"    height: auto;\n" +
"    display: block;\n" +
"    font-size: 16px;\n" +
"    margin: 0; }\n" +
"  .top-bar-section .divider,\n" +
"  .top-bar-section [role=\"separator\"] {\n" +
"    border-top: solid 1px #1a1a1a;\n" +
"    clear: both;\n" +
"    height: 1px;\n" +
"    width: 100%; }\n" +
"  .top-bar-section ul li {\n" +
"    background: #333333; }\n" +
"    .top-bar-section ul li > a {\n" +
"      display: block;\n" +
"      width: 100%;\n" +
"      color: white;\n" +
"      padding: 12px 0 12px 0;\n" +
"      padding-left: 15px;\n" +
"      font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"      font-size: 0.8125rem;\n" +
"      font-weight: normal;\n" +
"      text-transform: none; }\n" +
"      .top-bar-section ul li > a.button {\n" +
"        font-size: 0.8125rem;\n" +
"        padding-right: 15px;\n" +
"        padding-left: 15px;\n" +
"        background-color: #008cba;\n" +
"        border-color: #007095;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > a.button:hover, .top-bar-section ul li > a.button:focus {\n" +
"          background-color: #007095; }\n" +
"        .top-bar-section ul li > a.button:hover, .top-bar-section ul li > a.button:focus {\n" +
"          color: white; }\n" +
"      .top-bar-section ul li > a.button.secondary {\n" +
"        background-color: #e7e7e7;\n" +
"        border-color: #b9b9b9;\n" +
"        color: #333333; }\n" +
"        .top-bar-section ul li > a.button.secondary:hover, .top-bar-section ul li > a.button.secondary:focus {\n" +
"          background-color: #b9b9b9; }\n" +
"        .top-bar-section ul li > a.button.secondary:hover, .top-bar-section ul li > a.button.secondary:focus {\n" +
"          color: #333333; }\n" +
"      .top-bar-section ul li > a.button.success {\n" +
"        background-color: #43ac6a;\n" +
"        border-color: #368a55;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > a.button.success:hover, .top-bar-section ul li > a.button.success:focus {\n" +
"          background-color: #368a55; }\n" +
"        .top-bar-section ul li > a.button.success:hover, .top-bar-section ul li > a.button.success:focus {\n" +
"          color: white; }\n" +
"      .top-bar-section ul li > a.button.alert {\n" +
"        background-color: #f04124;\n" +
"        border-color: #cf2a0e;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > a.button.alert:hover, .top-bar-section ul li > a.button.alert:focus {\n" +
"          background-color: #cf2a0e; }\n" +
"        .top-bar-section ul li > a.button.alert:hover, .top-bar-section ul li > a.button.alert:focus {\n" +
"          color: white; }\n" +
"      .top-bar-section ul li > a.button.warning {\n" +
"        background-color: #f08a24;\n" +
"        border-color: #cf6e0e;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > a.button.warning:hover, .top-bar-section ul li > a.button.warning:focus {\n" +
"          background-color: #cf6e0e; }\n" +
"        .top-bar-section ul li > a.button.warning:hover, .top-bar-section ul li > a.button.warning:focus {\n" +
"          color: white; }\n" +
"    .top-bar-section ul li > button {\n" +
"      font-size: 0.8125rem;\n" +
"      padding-right: 15px;\n" +
"      padding-left: 15px;\n" +
"      background-color: #008cba;\n" +
"      border-color: #007095;\n" +
"      color: white; }\n" +
"      .top-bar-section ul li > button:hover, .top-bar-section ul li > button:focus {\n" +
"        background-color: #007095; }\n" +
"      .top-bar-section ul li > button:hover, .top-bar-section ul li > button:focus {\n" +
"        color: white; }\n" +
"      .top-bar-section ul li > button.secondary {\n" +
"        background-color: #e7e7e7;\n" +
"        border-color: #b9b9b9;\n" +
"        color: #333333; }\n" +
"        .top-bar-section ul li > button.secondary:hover, .top-bar-section ul li > button.secondary:focus {\n" +
"          background-color: #b9b9b9; }\n" +
"        .top-bar-section ul li > button.secondary:hover, .top-bar-section ul li > button.secondary:focus {\n" +
"          color: #333333; }\n" +
"      .top-bar-section ul li > button.success {\n" +
"        background-color: #43ac6a;\n" +
"        border-color: #368a55;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > button.success:hover, .top-bar-section ul li > button.success:focus {\n" +
"          background-color: #368a55; }\n" +
"        .top-bar-section ul li > button.success:hover, .top-bar-section ul li > button.success:focus {\n" +
"          color: white; }\n" +
"      .top-bar-section ul li > button.alert {\n" +
"        background-color: #f04124;\n" +
"        border-color: #cf2a0e;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > button.alert:hover, .top-bar-section ul li > button.alert:focus {\n" +
"          background-color: #cf2a0e; }\n" +
"        .top-bar-section ul li > button.alert:hover, .top-bar-section ul li > button.alert:focus {\n" +
"          color: white; }\n" +
"      .top-bar-section ul li > button.warning {\n" +
"        background-color: #f08a24;\n" +
"        border-color: #cf6e0e;\n" +
"        color: white; }\n" +
"        .top-bar-section ul li > button.warning:hover, .top-bar-section ul li > button.warning:focus {\n" +
"          background-color: #cf6e0e; }\n" +
"        .top-bar-section ul li > button.warning:hover, .top-bar-section ul li > button.warning:focus {\n" +
"          color: white; }\n" +
"    .top-bar-section ul li:hover:not(.has-form) > a {\n" +
"      background-color: #555555;\n" +
"      background: #272727;\n" +
"      color: white; }\n" +
"    .top-bar-section ul li.active > a {\n" +
"      background: #008cba;\n" +
"      color: white; }\n" +
"      .top-bar-section ul li.active > a:hover {\n" +
"        background: #0078a0;\n" +
"        color: white; }\n" +
"  .top-bar-section .has-form {\n" +
"    padding: 15px; }\n" +
"  .top-bar-section .has-dropdown {\n" +
"    position: relative; }\n" +
"    .top-bar-section .has-dropdown > a:after {\n" +
"      content: \"\";\n" +
"      display: block;\n" +
"      width: 0;\n" +
"      height: 0;\n" +
"      border: inset 5px;\n" +
"      border-color: transparent transparent transparent rgba(255, 255, 255, 0.4);\n" +
"      border-left-style: solid;\n" +
"      margin-right: 15px;\n" +
"      margin-top: -4.5px;\n" +
"      position: absolute;\n" +
"      top: 50%;\n" +
"      right: 0; }\n" +
"    .top-bar-section .has-dropdown.moved {\n" +
"      position: static; }\n" +
"      .top-bar-section .has-dropdown.moved > .dropdown {\n" +
"        display: block;\n" +
"        position: static !important;\n" +
"        height: auto;\n" +
"        width: auto;\n" +
"        overflow: visible;\n" +
"        clip: auto;\n" +
"        position: absolute !important;\n" +
"        width: 100%; }\n" +
"      .top-bar-section .has-dropdown.moved > a:after {\n" +
"        display: none; }\n" +
"  .top-bar-section .dropdown {\n" +
"    padding: 0;\n" +
"    position: absolute;\n" +
"    left: 100%;\n" +
"    top: 0;\n" +
"    z-index: 99;\n" +
"    display: block;\n" +
"    position: absolute !important;\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    clip: rect(1px, 1px, 1px, 1px); }\n" +
"    .top-bar-section .dropdown li {\n" +
"      width: 100%;\n" +
"      height: auto; }\n" +
"      .top-bar-section .dropdown li a {\n" +
"        font-weight: normal;\n" +
"        padding: 8px 15px; }\n" +
"        .top-bar-section .dropdown li a.parent-link {\n" +
"          font-weight: normal; }\n" +
"      .top-bar-section .dropdown li.title h5, .top-bar-section .dropdown li.parent-link {\n" +
"        margin-bottom: 0;\n" +
"        margin-top: 0;\n" +
"        font-size: 1.125rem; }\n" +
"        .top-bar-section .dropdown li.title h5 a, .top-bar-section .dropdown li.parent-link a {\n" +
"          color: white;\n" +
"          display: block; }\n" +
"          .top-bar-section .dropdown li.title h5 a:hover, .top-bar-section .dropdown li.parent-link a:hover {\n" +
"            background: none; }\n" +
"      .top-bar-section .dropdown li.has-form {\n" +
"        padding: 8px 15px; }\n" +
"      .top-bar-section .dropdown li .button, .top-bar-section .dropdown li button {\n" +
"        top: auto; }\n" +
"    .top-bar-section .dropdown label {\n" +
"      padding: 8px 15px 2px;\n" +
"      margin-bottom: 0;\n" +
"      text-transform: uppercase;\n" +
"      color: #777777;\n" +
"      font-weight: bold;\n" +
"      font-size: 0.625rem; }\n" +
"\n" +
".js-generated {\n" +
"  display: block; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .top-bar {\n" +
"    background: #333333;\n" +
"    overflow: visible; }\n" +
"    .top-bar:before, .top-bar:after {\n" +
"      content: \" \";\n" +
"      display: table; }\n" +
"    .top-bar:after {\n" +
"      clear: both; }\n" +
"    .top-bar .toggle-topbar {\n" +
"      display: none; }\n" +
"    .top-bar .title-area {\n" +
"      float: left; }\n" +
"    .top-bar .name h1 a {\n" +
"      width: auto; }\n" +
"    .top-bar input,\n" +
"    .top-bar .button,\n" +
"    .top-bar button {\n" +
"      font-size: 0.875rem;\n" +
"      position: relative;\n" +
"      top: 7px; }\n" +
"    .top-bar.expanded {\n" +
"      background: #333333; }\n" +
"\n" +
"  .contain-to-grid .top-bar {\n" +
"    max-width: 100%;\n" +
"    margin: 0 auto;\n" +
"    margin-bottom: 0; }\n" +
"\n" +
"  .top-bar-section {\n" +
"    transition: none 0 0;\n" +
"    left: 0 !important; }\n" +
"    .top-bar-section ul {\n" +
"      width: auto;\n" +
"      height: auto !important;\n" +
"      display: inline; }\n" +
"      .top-bar-section ul li {\n" +
"        float: left; }\n" +
"        .top-bar-section ul li .js-generated {\n" +
"          display: none; }\n" +
"    .top-bar-section li.hover > a:not(.button) {\n" +
"      background-color: #555555;\n" +
"      background: #272727;\n" +
"      color: white; }\n" +
"    .top-bar-section li:not(.has-form) a:not(.button) {\n" +
"      padding: 0 15px;\n" +
"      line-height: 45px;\n" +
"      background: #333333; }\n" +
"      .top-bar-section li:not(.has-form) a:not(.button):hover {\n" +
"        background-color: #555555;\n" +
"        background: #272727; }\n" +
"    .top-bar-section li.active:not(.has-form) a:not(.button) {\n" +
"      padding: 0 15px;\n" +
"      line-height: 45px;\n" +
"      color: white;\n" +
"      background: #008cba; }\n" +
"      .top-bar-section li.active:not(.has-form) a:not(.button):hover {\n" +
"        background: #0078a0;\n" +
"        color: white; }\n" +
"    .top-bar-section .has-dropdown > a {\n" +
"      padding-right: 35px !important; }\n" +
"      .top-bar-section .has-dropdown > a:after {\n" +
"        content: \"\";\n" +
"        display: block;\n" +
"        width: 0;\n" +
"        height: 0;\n" +
"        border: inset 5px;\n" +
"        border-color: rgba(255, 255, 255, 0.4) transparent transparent transparent;\n" +
"        border-top-style: solid;\n" +
"        margin-top: -2.5px;\n" +
"        top: 22.5px; }\n" +
"    .top-bar-section .has-dropdown.moved {\n" +
"      position: relative; }\n" +
"      .top-bar-section .has-dropdown.moved > .dropdown {\n" +
"        display: block;\n" +
"        position: absolute !important;\n" +
"        height: 1px;\n" +
"        width: 1px;\n" +
"        overflow: hidden;\n" +
"        clip: rect(1px, 1px, 1px, 1px); }\n" +
"    .top-bar-section .has-dropdown.hover > .dropdown, .top-bar-section .has-dropdown.not-click:hover > .dropdown {\n" +
"      display: block;\n" +
"      position: static !important;\n" +
"      height: auto;\n" +
"      width: auto;\n" +
"      overflow: visible;\n" +
"      clip: auto;\n" +
"      position: absolute !important; }\n" +
"    .top-bar-section .has-dropdown > a:focus + .dropdown {\n" +
"      display: block;\n" +
"      position: static !important;\n" +
"      height: auto;\n" +
"      width: auto;\n" +
"      overflow: visible;\n" +
"      clip: auto;\n" +
"      position: absolute !important; }\n" +
"    .top-bar-section .has-dropdown .dropdown li.has-dropdown > a:after {\n" +
"      border: none;\n" +
"      content: \"\\00bb\";\n" +
"      top: 1rem;\n" +
"      margin-top: -1px;\n" +
"      right: 5px;\n" +
"      line-height: 1.2; }\n" +
"    .top-bar-section .dropdown {\n" +
"      left: 0;\n" +
"      top: auto;\n" +
"      background: transparent;\n" +
"      min-width: 100%; }\n" +
"      .top-bar-section .dropdown li a {\n" +
"        color: white;\n" +
"        line-height: 45px;\n" +
"        white-space: nowrap;\n" +
"        padding: 12px 15px;\n" +
"        background: #333333; }\n" +
"      .top-bar-section .dropdown li:not(.has-form):not(.active) > a:not(.button) {\n" +
"        color: white;\n" +
"        background: #333333; }\n" +
"      .top-bar-section .dropdown li:not(.has-form):not(.active):hover > a:not(.button) {\n" +
"        color: white;\n" +
"        background-color: #555555;\n" +
"        background: #272727; }\n" +
"      .top-bar-section .dropdown li label {\n" +
"        white-space: nowrap;\n" +
"        background: #333333; }\n" +
"      .top-bar-section .dropdown li .dropdown {\n" +
"        left: 100%;\n" +
"        top: 0; }\n" +
"    .top-bar-section > ul > .divider, .top-bar-section > ul > [role=\"separator\"] {\n" +
"      border-bottom: none;\n" +
"      border-top: none;\n" +
"      border-right: solid 1px #4e4e4e;\n" +
"      clear: none;\n" +
"      height: 45px;\n" +
"      width: 0; }\n" +
"    .top-bar-section .has-form {\n" +
"      background: #333333;\n" +
"      padding: 0 15px;\n" +
"      height: 45px; }\n" +
"    .top-bar-section .right li .dropdown {\n" +
"      left: auto;\n" +
"      right: 0; }\n" +
"      .top-bar-section .right li .dropdown li .dropdown {\n" +
"        right: 100%; }\n" +
"    .top-bar-section .left li .dropdown {\n" +
"      right: auto;\n" +
"      left: 0; }\n" +
"      .top-bar-section .left li .dropdown li .dropdown {\n" +
"        left: 100%; }\n" +
"\n" +
"  .no-js .top-bar-section ul li:hover > a {\n" +
"    background-color: #555555;\n" +
"    background: #272727;\n" +
"    color: white; }\n" +
"  .no-js .top-bar-section ul li:active > a {\n" +
"    background: #008cba;\n" +
"    color: white; }\n" +
"  .no-js .top-bar-section .has-dropdown:hover > .dropdown {\n" +
"    display: block;\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto;\n" +
"    position: absolute !important; }\n" +
"  .no-js .top-bar-section .has-dropdown > a:focus + .dropdown {\n" +
"    display: block;\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto;\n" +
"    position: absolute !important; } }\n" +
".text-left {\n" +
"  text-align: left !important; }\n" +
"\n" +
".text-right {\n" +
"  text-align: right !important; }\n" +
"\n" +
".text-center {\n" +
"  text-align: center !important; }\n" +
"\n" +
".text-justify {\n" +
"  text-align: justify !important; }\n" +
"\n" +
"@media only screen and (max-width: 40em) {\n" +
"  .small-only-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .small-only-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .small-only-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .small-only-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen {\n" +
"  .small-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .small-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .small-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .small-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 40.063em) and (max-width: 64em) {\n" +
"  .medium-only-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .medium-only-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .medium-only-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .medium-only-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .medium-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .medium-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .medium-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .medium-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 64.063em) and (max-width: 90em) {\n" +
"  .large-only-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .large-only-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .large-only-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .large-only-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .large-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .large-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .large-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .large-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 90.063em) and (max-width: 120em) {\n" +
"  .xlarge-only-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .xlarge-only-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .xlarge-only-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .xlarge-only-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 90.063em) {\n" +
"  .xlarge-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .xlarge-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .xlarge-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .xlarge-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 120.063em) and (max-width: 99999999em) {\n" +
"  .xxlarge-only-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .xxlarge-only-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .xxlarge-only-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .xxlarge-only-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"@media only screen and (min-width: 120.063em) {\n" +
"  .xxlarge-text-left {\n" +
"    text-align: left !important; }\n" +
"\n" +
"  .xxlarge-text-right {\n" +
"    text-align: right !important; }\n" +
"\n" +
"  .xxlarge-text-center {\n" +
"    text-align: center !important; }\n" +
"\n" +
"  .xxlarge-text-justify {\n" +
"    text-align: justify !important; } }\n" +
"/* Typography resets */\n" +
"div,\n" +
"dl,\n" +
"dt,\n" +
"dd,\n" +
"ul,\n" +
"ol,\n" +
"li,\n" +
"h1,\n" +
"h2,\n" +
"h3,\n" +
"h4,\n" +
"h5,\n" +
"h6,\n" +
"pre,\n" +
"form,\n" +
"p,\n" +
"blockquote,\n" +
"th,\n" +
"td {\n" +
"  margin: 0;\n" +
"  padding: 0; }\n" +
"\n" +
"/* Default Link Styles */\n" +
"a {\n" +
"  color: #008cba;\n" +
"  text-decoration: none;\n" +
"  line-height: inherit; }\n" +
"  a:hover, a:focus {\n" +
"    color: #0078a0; }\n" +
"  a img {\n" +
"    border: none; }\n" +
"\n" +
"/* Default paragraph styles */\n" +
"p {\n" +
"  font-family: inherit;\n" +
"  font-weight: normal;\n" +
"  font-size: 1rem;\n" +
"  line-height: 1.6;\n" +
"  margin-bottom: 1.25rem;\n" +
"  text-rendering: optimizeLegibility; }\n" +
"  p.lead {\n" +
"    font-size: 1.21875rem;\n" +
"    line-height: 1.6; }\n" +
"  p aside {\n" +
"    font-size: 0.875rem;\n" +
"    line-height: 1.35;\n" +
"    font-style: italic; }\n" +
"\n" +
"/* Default header styles */\n" +
"h1, h2, h3, h4, h5, h6 {\n" +
"  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  color: #222222;\n" +
"  text-rendering: optimizeLegibility;\n" +
"  margin-top: 0.2rem;\n" +
"  margin-bottom: 0.5rem;\n" +
"  line-height: 1.4; }\n" +
"  h1 small, h2 small, h3 small, h4 small, h5 small, h6 small {\n" +
"    font-size: 60%;\n" +
"    color: #6f6f6f;\n" +
"    line-height: 0; }\n" +
"\n" +
"h1 {\n" +
"  font-size: 2.125rem; }\n" +
"\n" +
"h2 {\n" +
"  font-size: 1.6875rem; }\n" +
"\n" +
"h3 {\n" +
"  font-size: 1.375rem; }\n" +
"\n" +
"h4 {\n" +
"  font-size: 1.125rem; }\n" +
"\n" +
"h5 {\n" +
"  font-size: 1.125rem; }\n" +
"\n" +
"h6 {\n" +
"  font-size: 1rem; }\n" +
"\n" +
".subheader {\n" +
"  line-height: 1.4;\n" +
"  color: #6f6f6f;\n" +
"  font-weight: normal;\n" +
"  margin-top: 0.2rem;\n" +
"  margin-bottom: 0.5rem; }\n" +
"\n" +
"hr {\n" +
"  border: solid #dddddd;\n" +
"  border-width: 1px 0 0;\n" +
"  clear: both;\n" +
"  margin: 1.25rem 0 1.1875rem;\n" +
"  height: 0; }\n" +
"\n" +
"/* Helpful Typography Defaults */\n" +
"em,\n" +
"i {\n" +
"  font-style: italic;\n" +
"  line-height: inherit; }\n" +
"\n" +
"strong,\n" +
"b {\n" +
"  font-weight: bold;\n" +
"  line-height: inherit; }\n" +
"\n" +
"small {\n" +
"  font-size: 60%;\n" +
"  line-height: inherit; }\n" +
"\n" +
"code {\n" +
"  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n" +
"  font-weight: normal;\n" +
"  color: #333333;\n" +
"  background-color: #f8f8f8;\n" +
"  border-width: 1px;\n" +
"  border-style: solid;\n" +
"  border-color: #dfdfdf;\n" +
"  padding: 0.125rem 0.3125rem 0.0625rem; }\n" +
"\n" +
"/* Lists */\n" +
"ul,\n" +
"ol,\n" +
"dl {\n" +
"  font-size: 1rem;\n" +
"  line-height: 1.6;\n" +
"  margin-bottom: 1.25rem;\n" +
"  list-style-position: outside;\n" +
"  font-family: inherit; }\n" +
"\n" +
"ul {\n" +
"  margin-left: 1.1rem; }\n" +
"  ul.no-bullet {\n" +
"    margin-left: 0; }\n" +
"    ul.no-bullet li ul,\n" +
"    ul.no-bullet li ol {\n" +
"      margin-left: 1.25rem;\n" +
"      margin-bottom: 0;\n" +
"      list-style: none; }\n" +
"\n" +
"/* Unordered Lists */\n" +
"ul li ul,\n" +
"ul li ol {\n" +
"  margin-left: 1.25rem;\n" +
"  margin-bottom: 0; }\n" +
"ul.square li ul, ul.circle li ul, ul.disc li ul {\n" +
"  list-style: inherit; }\n" +
"ul.square {\n" +
"  list-style-type: square;\n" +
"  margin-left: 1.1rem; }\n" +
"ul.circle {\n" +
"  list-style-type: circle;\n" +
"  margin-left: 1.1rem; }\n" +
"ul.disc {\n" +
"  list-style-type: disc;\n" +
"  margin-left: 1.1rem; }\n" +
"ul.no-bullet {\n" +
"  list-style: none; }\n" +
"\n" +
"/* Ordered Lists */\n" +
"ol {\n" +
"  margin-left: 1.4rem; }\n" +
"  ol li ul,\n" +
"  ol li ol {\n" +
"    margin-left: 1.25rem;\n" +
"    margin-bottom: 0; }\n" +
"\n" +
"/* Definition Lists */\n" +
"dl dt {\n" +
"  margin-bottom: 0.3rem;\n" +
"  font-weight: bold; }\n" +
"dl dd {\n" +
"  margin-bottom: 0.75rem; }\n" +
"\n" +
"/* Abbreviations */\n" +
"abbr,\n" +
"acronym {\n" +
"  text-transform: uppercase;\n" +
"  font-size: 90%;\n" +
"  color: #222222;\n" +
"  cursor: help; }\n" +
"\n" +
"abbr {\n" +
"  text-transform: none; }\n" +
"  abbr[title] {\n" +
"    border-bottom: 1px dotted #dddddd; }\n" +
"\n" +
"/* Blockquotes */\n" +
"blockquote {\n" +
"  margin: 0 0 1.25rem;\n" +
"  padding: 0.5625rem 1.25rem 0 1.1875rem;\n" +
"  border-left: 1px solid #dddddd; }\n" +
"  blockquote cite {\n" +
"    display: block;\n" +
"    font-size: 0.8125rem;\n" +
"    color: #555555; }\n" +
"    blockquote cite:before {\n" +
"      content: \"\\2014 \\0020\"; }\n" +
"    blockquote cite a,\n" +
"    blockquote cite a:visited {\n" +
"      color: #555555; }\n" +
"\n" +
"blockquote,\n" +
"blockquote p {\n" +
"  line-height: 1.6;\n" +
"  color: #6f6f6f; }\n" +
"\n" +
"/* Microformats */\n" +
".vcard {\n" +
"  display: inline-block;\n" +
"  margin: 0 0 1.25rem 0;\n" +
"  border: 1px solid #dddddd;\n" +
"  padding: 0.625rem 0.75rem; }\n" +
"  .vcard li {\n" +
"    margin: 0;\n" +
"    display: block; }\n" +
"  .vcard .fn {\n" +
"    font-weight: bold;\n" +
"    font-size: 0.9375rem; }\n" +
"\n" +
".vevent .summary {\n" +
"  font-weight: bold; }\n" +
".vevent abbr {\n" +
"  cursor: default;\n" +
"  text-decoration: none;\n" +
"  font-weight: bold;\n" +
"  border: none;\n" +
"  padding: 0 0.0625rem; }\n" +
"\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  h1, h2, h3, h4, h5, h6 {\n" +
"    line-height: 1.4; }\n" +
"\n" +
"  h1 {\n" +
"    font-size: 2.75rem; }\n" +
"\n" +
"  h2 {\n" +
"    font-size: 2.3125rem; }\n" +
"\n" +
"  h3 {\n" +
"    font-size: 1.6875rem; }\n" +
"\n" +
"  h4 {\n" +
"    font-size: 1.4375rem; }\n" +
"\n" +
"  h5 {\n" +
"    font-size: 1.125rem; }\n" +
"\n" +
"  h6 {\n" +
"    font-size: 1rem; } }\n" +
"/*\n" +
" * Print styles.\n" +
" *\n" +
" * Inlined to avoid required HTTP connection: www.phpied.com/delay-loading-your-print-css/\n" +
" * Credit to Paul Irish and HTML5 Boilerplate (html5boilerplate.com)\n" +
"*/\n" +
".print-only {\n" +
"  display: none !important; }\n" +
"\n" +
"@media print {\n" +
"  * {\n" +
"    background: transparent !important;\n" +
"    color: black !important;\n" +
"    /* Black prints faster: h5bp.com/s */\n" +
"    box-shadow: none !important;\n" +
"    text-shadow: none !important; }\n" +
"\n" +
"  a,\n" +
"  a:visited {\n" +
"    text-decoration: underline; }\n" +
"\n" +
"  a[href]:after {\n" +
"    content: \" (\" attr(href) \")\"; }\n" +
"\n" +
"  abbr[title]:after {\n" +
"    content: \" (\" attr(title) \")\"; }\n" +
"\n" +
"  .ir a:after,\n" +
"  a[href^=\"javascript:\"]:after,\n" +
"  a[href^=\"#\"]:after {\n" +
"    content: \"\"; }\n" +
"\n" +
"  pre,\n" +
"  blockquote {\n" +
"    border: 1px solid #999999;\n" +
"    page-break-inside: avoid; }\n" +
"\n" +
"  thead {\n" +
"    display: table-header-group;\n" +
"    /* h5bp.com/t */ }\n" +
"\n" +
"  tr,\n" +
"  img {\n" +
"    page-break-inside: avoid; }\n" +
"\n" +
"  img {\n" +
"    max-width: 100% !important; }\n" +
"\n" +
"  @page {\n" +
"    margin: 0.5cm; }\n" +
"  p,\n" +
"  h2,\n" +
"  h3 {\n" +
"    orphans: 3;\n" +
"    widows: 3; }\n" +
"\n" +
"  h2,\n" +
"  h3 {\n" +
"    page-break-after: avoid; }\n" +
"\n" +
"  .hide-on-print {\n" +
"    display: none !important; }\n" +
"\n" +
"  .print-only {\n" +
"    display: block !important; }\n" +
"\n" +
"  .hide-for-print {\n" +
"    display: none !important; }\n" +
"\n" +
"  .show-for-print {\n" +
"    display: inherit !important; } }\n" +
".off-canvas-wrap {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  position: relative;\n" +
"  width: 100%;\n" +
"  overflow: hidden; }\n" +
"  .off-canvas-wrap.move-right, .off-canvas-wrap.move-left {\n" +
"    min-height: 100%;\n" +
"    -webkit-overflow-scrolling: touch; }\n" +
"\n" +
".inner-wrap {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  position: relative;\n" +
"  width: 100%;\n" +
"  -webkit-transition: -webkit-transform 500ms ease;\n" +
"  -moz-transition: -moz-transform 500ms ease;\n" +
"  -ms-transition: -ms-transform 500ms ease;\n" +
"  -o-transition: -o-transform 500ms ease;\n" +
"  transition: transform 500ms ease; }\n" +
"  .inner-wrap:before, .inner-wrap:after {\n" +
"    content: \" \";\n" +
"    display: table; }\n" +
"  .inner-wrap:after {\n" +
"    clear: both; }\n" +
"\n" +
".tab-bar {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  background: #333333;\n" +
"  color: white;\n" +
"  height: 2.8125rem;\n" +
"  line-height: 2.8125rem;\n" +
"  position: relative; }\n" +
"  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4, .tab-bar h5, .tab-bar h6 {\n" +
"    color: white;\n" +
"    font-weight: bold;\n" +
"    line-height: 2.8125rem;\n" +
"    margin: 0; }\n" +
"  .tab-bar h1, .tab-bar h2, .tab-bar h3, .tab-bar h4 {\n" +
"    font-size: 1.125rem; }\n" +
"\n" +
".left-small {\n" +
"  width: 2.8125rem;\n" +
"  height: 2.8125rem;\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  border-right: solid 1px #1a1a1a;\n" +
"  left: 0; }\n" +
"\n" +
".right-small {\n" +
"  width: 2.8125rem;\n" +
"  height: 2.8125rem;\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  border-left: solid 1px #1a1a1a;\n" +
"  right: 0; }\n" +
"\n" +
".tab-bar-section {\n" +
"  padding: 0 0.625rem;\n" +
"  position: absolute;\n" +
"  text-align: center;\n" +
"  height: 2.8125rem;\n" +
"  top: 0; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .tab-bar-section.left, .tab-bar-section.right {\n" +
"      text-align: left; } }\n" +
"  .tab-bar-section.left {\n" +
"    left: 0;\n" +
"    right: 2.8125rem; }\n" +
"  .tab-bar-section.right {\n" +
"    left: 2.8125rem;\n" +
"    right: 0; }\n" +
"  .tab-bar-section.middle {\n" +
"    left: 2.8125rem;\n" +
"    right: 2.8125rem; }\n" +
"\n" +
".tab-bar .menu-icon {\n" +
"  text-indent: 2.1875rem;\n" +
"  width: 2.8125rem;\n" +
"  height: 2.8125rem;\n" +
"  display: block;\n" +
"  padding: 0;\n" +
"  color: white;\n" +
"  position: relative;\n" +
"  transform: translate3d(0, 0, 0); }\n" +
"  .tab-bar .menu-icon span::after {\n" +
"    content: \"\";\n" +
"    position: absolute;\n" +
"    display: block;\n" +
"    height: 0;\n" +
"    top: 50%;\n" +
"    margin-top: -0.5rem;\n" +
"    left: 0.90625rem;\n" +
"    box-shadow: 0 0px 0 1px white, 0 7px 0 1px white, 0 14px 0 1px white;\n" +
"    width: 1rem; }\n" +
"  .tab-bar .menu-icon span:hover:after {\n" +
"    box-shadow: 0 0px 0 1px #b3b3b3, 0 7px 0 1px #b3b3b3, 0 14px 0 1px #b3b3b3; }\n" +
"\n" +
".left-off-canvas-menu {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  width: 15.625rem;\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  position: absolute;\n" +
"  overflow-x: hidden;\n" +
"  overflow-y: auto;\n" +
"  background: #333333;\n" +
"  z-index: 1001;\n" +
"  box-sizing: content-box;\n" +
"  transition: transform 500ms ease 0s;\n" +
"  -webkit-overflow-scrolling: touch;\n" +
"  -ms-overflow-style: -ms-autohiding-scrollbar;\n" +
"  -ms-transform: translate(-100.5%, 0);\n" +
"  -webkit-transform: translate3d(-100.5%, 0, 0);\n" +
"  -moz-transform: translate3d(-100.5%, 0, 0);\n" +
"  -ms-transform: translate3d(-100.5%, 0, 0);\n" +
"  -o-transform: translate3d(-100.5%, 0, 0);\n" +
"  transform: translate3d(-100.5%, 0, 0);\n" +
"  left: 0; }\n" +
"  .left-off-canvas-menu * {\n" +
"    -webkit-backface-visibility: hidden; }\n" +
"\n" +
".right-off-canvas-menu {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  width: 15.625rem;\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  position: absolute;\n" +
"  overflow-x: hidden;\n" +
"  overflow-y: auto;\n" +
"  background: #333333;\n" +
"  z-index: 1001;\n" +
"  box-sizing: content-box;\n" +
"  transition: transform 500ms ease 0s;\n" +
"  -webkit-overflow-scrolling: touch;\n" +
"  -ms-overflow-style: -ms-autohiding-scrollbar;\n" +
"  -ms-transform: translate(100.5%, 0);\n" +
"  -webkit-transform: translate3d(100.5%, 0, 0);\n" +
"  -moz-transform: translate3d(100.5%, 0, 0);\n" +
"  -ms-transform: translate3d(100.5%, 0, 0);\n" +
"  -o-transform: translate3d(100.5%, 0, 0);\n" +
"  transform: translate3d(100.5%, 0, 0);\n" +
"  right: 0; }\n" +
"  .right-off-canvas-menu * {\n" +
"    -webkit-backface-visibility: hidden; }\n" +
"\n" +
"ul.off-canvas-list {\n" +
"  list-style-type: none;\n" +
"  padding: 0;\n" +
"  margin: 0; }\n" +
"  ul.off-canvas-list li label {\n" +
"    display: block;\n" +
"    padding: 0.3rem 0.9375rem;\n" +
"    color: #999999;\n" +
"    text-transform: uppercase;\n" +
"    font-size: 0.75rem;\n" +
"    font-weight: bold;\n" +
"    background: #444444;\n" +
"    border-top: 1px solid #5e5e5e;\n" +
"    border-bottom: none;\n" +
"    margin: 0; }\n" +
"  ul.off-canvas-list li a {\n" +
"    display: block;\n" +
"    padding: 0.66667rem;\n" +
"    color: rgba(255, 255, 255, 0.7);\n" +
"    border-bottom: 1px solid #262626;\n" +
"    transition: background 300ms ease; }\n" +
"    ul.off-canvas-list li a:hover {\n" +
"      background: #242424; }\n" +
"\n" +
".move-right > .inner-wrap {\n" +
"  -ms-transform: translate(15.625rem, 0);\n" +
"  -webkit-transform: translate3d(15.625rem, 0, 0);\n" +
"  -moz-transform: translate3d(15.625rem, 0, 0);\n" +
"  -ms-transform: translate3d(15.625rem, 0, 0);\n" +
"  -o-transform: translate3d(15.625rem, 0, 0);\n" +
"  transform: translate3d(15.625rem, 0, 0); }\n" +
".move-right .exit-off-canvas {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  transition: background 300ms ease;\n" +
"  cursor: pointer;\n" +
"  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n" +
"  display: block;\n" +
"  position: absolute;\n" +
"  background: rgba(255, 255, 255, 0.2);\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  z-index: 1002;\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .move-right .exit-off-canvas:hover {\n" +
"      background: rgba(255, 255, 255, 0.05); } }\n" +
"\n" +
".move-left > .inner-wrap {\n" +
"  -ms-transform: translate(-15.625rem, 0);\n" +
"  -webkit-transform: translate3d(-15.625rem, 0, 0);\n" +
"  -moz-transform: translate3d(-15.625rem, 0, 0);\n" +
"  -ms-transform: translate3d(-15.625rem, 0, 0);\n" +
"  -o-transform: translate3d(-15.625rem, 0, 0);\n" +
"  transform: translate3d(-15.625rem, 0, 0); }\n" +
".move-left .exit-off-canvas {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  transition: background 300ms ease;\n" +
"  cursor: pointer;\n" +
"  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n" +
"  display: block;\n" +
"  position: absolute;\n" +
"  background: rgba(255, 255, 255, 0.2);\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  z-index: 1002;\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .move-left .exit-off-canvas:hover {\n" +
"      background: rgba(255, 255, 255, 0.05); } }\n" +
"\n" +
".offcanvas-overlap .left-off-canvas-menu, .offcanvas-overlap .right-off-canvas-menu {\n" +
"  -ms-transform: none;\n" +
"  -webkit-transform: none;\n" +
"  -moz-transform: none;\n" +
"  -o-transform: none;\n" +
"  transform: none;\n" +
"  z-index: 1003; }\n" +
".offcanvas-overlap .exit-off-canvas {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  transition: background 300ms ease;\n" +
"  cursor: pointer;\n" +
"  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n" +
"  display: block;\n" +
"  position: absolute;\n" +
"  background: rgba(255, 255, 255, 0.2);\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  z-index: 1002;\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .offcanvas-overlap .exit-off-canvas:hover {\n" +
"      background: rgba(255, 255, 255, 0.05); } }\n" +
"\n" +
".offcanvas-overlap-left .right-off-canvas-menu {\n" +
"  -ms-transform: none;\n" +
"  -webkit-transform: none;\n" +
"  -moz-transform: none;\n" +
"  -o-transform: none;\n" +
"  transform: none;\n" +
"  z-index: 1003; }\n" +
".offcanvas-overlap-left .exit-off-canvas {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  transition: background 300ms ease;\n" +
"  cursor: pointer;\n" +
"  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n" +
"  display: block;\n" +
"  position: absolute;\n" +
"  background: rgba(255, 255, 255, 0.2);\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  z-index: 1002;\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .offcanvas-overlap-left .exit-off-canvas:hover {\n" +
"      background: rgba(255, 255, 255, 0.05); } }\n" +
"\n" +
".offcanvas-overlap-right .left-off-canvas-menu {\n" +
"  -ms-transform: none;\n" +
"  -webkit-transform: none;\n" +
"  -moz-transform: none;\n" +
"  -o-transform: none;\n" +
"  transform: none;\n" +
"  z-index: 1003; }\n" +
".offcanvas-overlap-right .exit-off-canvas {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  transition: background 300ms ease;\n" +
"  cursor: pointer;\n" +
"  box-shadow: -4px 0 4px rgba(0, 0, 0, 0.5), 4px 0 4px rgba(0, 0, 0, 0.5);\n" +
"  display: block;\n" +
"  position: absolute;\n" +
"  background: rgba(255, 255, 255, 0.2);\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  z-index: 1002;\n" +
"  -webkit-tap-highlight-color: transparent; }\n" +
"  @media only screen and (min-width: 40.063em) {\n" +
"    .offcanvas-overlap-right .exit-off-canvas:hover {\n" +
"      background: rgba(255, 255, 255, 0.05); } }\n" +
"\n" +
".no-csstransforms .left-off-canvas-menu {\n" +
"  left: -15.625rem; }\n" +
".no-csstransforms .right-off-canvas-menu {\n" +
"  right: -15.625rem; }\n" +
".no-csstransforms .move-left > .inner-wrap {\n" +
"  right: 15.625rem; }\n" +
".no-csstransforms .move-right > .inner-wrap {\n" +
"  left: 15.625rem; }\n" +
"\n" +
".left-submenu {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  width: 15.625rem;\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  position: absolute;\n" +
"  margin: 0;\n" +
"  overflow-x: hidden;\n" +
"  overflow-y: auto;\n" +
"  background: #333333;\n" +
"  z-index: 1002;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-overflow-scrolling: touch;\n" +
"  -ms-transform: translate(-100%, 0);\n" +
"  -webkit-transform: translate3d(-100%, 0, 0);\n" +
"  -moz-transform: translate3d(-100%, 0, 0);\n" +
"  -ms-transform: translate3d(-100%, 0, 0);\n" +
"  -o-transform: translate3d(-100%, 0, 0);\n" +
"  transform: translate3d(-100%, 0, 0);\n" +
"  left: 0;\n" +
"  -webkit-transition: -webkit-transform 500ms ease;\n" +
"  -moz-transition: -moz-transform 500ms ease;\n" +
"  -ms-transition: -ms-transform 500ms ease;\n" +
"  -o-transition: -o-transform 500ms ease;\n" +
"  transition: transform 500ms ease; }\n" +
"  .left-submenu * {\n" +
"    -webkit-backface-visibility: hidden; }\n" +
"  .left-submenu .back > a {\n" +
"    padding: 0.3rem 0.9375rem;\n" +
"    color: #999999;\n" +
"    text-transform: uppercase;\n" +
"    font-weight: bold;\n" +
"    background: #444444;\n" +
"    border-top: 1px solid #5e5e5e;\n" +
"    border-bottom: none;\n" +
"    margin: 0; }\n" +
"    .left-submenu .back > a:hover {\n" +
"      background: #303030;\n" +
"      border-top: 1px solid #5e5e5e;\n" +
"      border-bottom: none; }\n" +
"    .left-submenu .back > a:before {\n" +
"      content: \"\\AB\";\n" +
"      margin-right: 0.5rem;\n" +
"      display: inline; }\n" +
"  .left-submenu.move-right {\n" +
"    -ms-transform: translate(0%, 0);\n" +
"    -webkit-transform: translate3d(0%, 0, 0);\n" +
"    -moz-transform: translate3d(0%, 0, 0);\n" +
"    -ms-transform: translate3d(0%, 0, 0);\n" +
"    -o-transform: translate3d(0%, 0, 0);\n" +
"    transform: translate3d(0%, 0, 0); }\n" +
"\n" +
".right-submenu {\n" +
"  -webkit-backface-visibility: hidden;\n" +
"  width: 15.625rem;\n" +
"  top: 0;\n" +
"  bottom: 0;\n" +
"  position: absolute;\n" +
"  margin: 0;\n" +
"  overflow-x: hidden;\n" +
"  overflow-y: auto;\n" +
"  background: #333333;\n" +
"  z-index: 1002;\n" +
"  box-sizing: content-box;\n" +
"  -webkit-overflow-scrolling: touch;\n" +
"  -ms-transform: translate(100%, 0);\n" +
"  -webkit-transform: translate3d(100%, 0, 0);\n" +
"  -moz-transform: translate3d(100%, 0, 0);\n" +
"  -ms-transform: translate3d(100%, 0, 0);\n" +
"  -o-transform: translate3d(100%, 0, 0);\n" +
"  transform: translate3d(100%, 0, 0);\n" +
"  right: 0;\n" +
"  -webkit-transition: -webkit-transform 500ms ease;\n" +
"  -moz-transition: -moz-transform 500ms ease;\n" +
"  -ms-transition: -ms-transform 500ms ease;\n" +
"  -o-transition: -o-transform 500ms ease;\n" +
"  transition: transform 500ms ease; }\n" +
"  .right-submenu * {\n" +
"    -webkit-backface-visibility: hidden; }\n" +
"  .right-submenu .back > a {\n" +
"    padding: 0.3rem 0.9375rem;\n" +
"    color: #999999;\n" +
"    text-transform: uppercase;\n" +
"    font-weight: bold;\n" +
"    background: #444444;\n" +
"    border-top: 1px solid #5e5e5e;\n" +
"    border-bottom: none;\n" +
"    margin: 0; }\n" +
"    .right-submenu .back > a:hover {\n" +
"      background: #303030;\n" +
"      border-top: 1px solid #5e5e5e;\n" +
"      border-bottom: none; }\n" +
"    .right-submenu .back > a:after {\n" +
"      content: \"\\BB\";\n" +
"      margin-left: 0.5rem;\n" +
"      display: inline; }\n" +
"  .right-submenu.move-left {\n" +
"    -ms-transform: translate(0%, 0);\n" +
"    -webkit-transform: translate3d(0%, 0, 0);\n" +
"    -moz-transform: translate3d(0%, 0, 0);\n" +
"    -ms-transform: translate3d(0%, 0, 0);\n" +
"    -o-transform: translate3d(0%, 0, 0);\n" +
"    transform: translate3d(0%, 0, 0); }\n" +
"\n" +
".left-off-canvas-menu ul.off-canvas-list li.has-submenu > a:after {\n" +
"  content: \"\\BB\";\n" +
"  margin-left: 0.5rem;\n" +
"  display: inline; }\n" +
"\n" +
".right-off-canvas-menu ul.off-canvas-list li.has-submenu > a:before {\n" +
"  content: \"\\AB\";\n" +
"  margin-right: 0.5rem;\n" +
"  display: inline; }\n" +
"\n" +
"/* small displays */\n" +
"@media only screen {\n" +
"  .show-for-small-only, .show-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .hide-for-small-only, .hide-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {\n" +
"    display: none !important; }\n" +
"\n" +
"  .visible-for-small-only, .visible-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto; }\n" +
"\n" +
"  .hidden-for-small-only, .hidden-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {\n" +
"    position: absolute !important;\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    clip: rect(1px, 1px, 1px, 1px); }\n" +
"\n" +
"  table.show-for-small-only, table.show-for-small-up, table.show-for-small, table.show-for-small-down, table.hide-for-medium-only, table.hide-for-medium-up, table.hide-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.show-for-small-only, thead.show-for-small-up, thead.show-for-small, thead.show-for-small-down, thead.hide-for-medium-only, thead.hide-for-medium-up, thead.hide-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.show-for-small-only, tbody.show-for-small-up, tbody.show-for-small, tbody.show-for-small-down, tbody.hide-for-medium-only, tbody.hide-for-medium-up, tbody.hide-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.show-for-small-only, tr.show-for-small-up, tr.show-for-small, tr.show-for-small-down, tr.hide-for-medium-only, tr.hide-for-medium-up, tr.hide-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  th.show-for-small-only, td.show-for-small-only, th.show-for-small-up, td.show-for-small-up, th.show-for-small, td.show-for-small, th.show-for-small-down, td.show-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.hide-for-medium-up, td.hide-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {\n" +
"    display: table-cell !important; } }\n" +
"/* medium displays */\n" +
"@media only screen and (min-width: 40.063em) {\n" +
"  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .show-for-medium-only, .show-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .hide-for-medium-only, .hide-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {\n" +
"    display: none !important; }\n" +
"\n" +
"  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .visible-for-medium-only, .visible-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto; }\n" +
"\n" +
"  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .hidden-for-medium-only, .hidden-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {\n" +
"    position: absolute !important;\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    clip: rect(1px, 1px, 1px, 1px); }\n" +
"\n" +
"  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.show-for-medium-only, table.show-for-medium-up, table.show-for-medium, table.show-for-medium-down, table.hide-for-large-only, table.hide-for-large-up, table.hide-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.show-for-medium-only, thead.show-for-medium-up, thead.show-for-medium, thead.show-for-medium-down, thead.hide-for-large-only, thead.hide-for-large-up, thead.hide-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.show-for-medium-only, tbody.show-for-medium-up, tbody.show-for-medium, tbody.show-for-medium-down, tbody.hide-for-large-only, tbody.hide-for-large-up, tbody.hide-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.show-for-medium-only, tr.show-for-medium-up, tr.show-for-medium, tr.show-for-medium-down, tr.hide-for-large-only, tr.hide-for-large-up, tr.hide-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.show-for-medium-only, td.show-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.show-for-medium, td.show-for-medium, th.show-for-medium-down, td.show-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.hide-for-large-up, td.hide-for-large-up, th.hide-for-large, td.hide-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {\n" +
"    display: table-cell !important; } }\n" +
"/* large displays */\n" +
"@media only screen and (min-width: 64.063em) {\n" +
"  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .show-for-large-only, .show-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .hide-for-large-only, .hide-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {\n" +
"    display: none !important; }\n" +
"\n" +
"  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .visible-for-large-only, .visible-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto; }\n" +
"\n" +
"  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .hidden-for-large-only, .hidden-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {\n" +
"    position: absolute !important;\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    clip: rect(1px, 1px, 1px, 1px); }\n" +
"\n" +
"  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.show-for-large-only, table.show-for-large-up, table.show-for-large, table.show-for-large-down, table.hide-for-xlarge-only, table.hide-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.show-for-large-only, thead.show-for-large-up, thead.show-for-large, thead.show-for-large-down, thead.hide-for-xlarge-only, thead.hide-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.show-for-large-only, tbody.show-for-large-up, tbody.show-for-large, tbody.show-for-large-down, tbody.hide-for-xlarge-only, tbody.hide-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.show-for-large-only, tr.show-for-large-up, tr.show-for-large, tr.show-for-large-down, tr.hide-for-xlarge-only, tr.hide-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.show-for-large-only, td.show-for-large-only, th.show-for-large-up, td.show-for-large-up, th.show-for-large, td.show-for-large, th.show-for-large-down, td.show-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.hide-for-xlarge-up, td.hide-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {\n" +
"    display: table-cell !important; } }\n" +
"/* xlarge displays */\n" +
"@media only screen and (min-width: 90.063em) {\n" +
"  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .show-for-xlarge-only, .show-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .hide-for-xlarge-only, .hide-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {\n" +
"    display: none !important; }\n" +
"\n" +
"  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .visible-for-xlarge-only, .visible-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto; }\n" +
"\n" +
"  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .hidden-for-xlarge-only, .hidden-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {\n" +
"    position: absolute !important;\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    clip: rect(1px, 1px, 1px, 1px); }\n" +
"\n" +
"  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.show-for-xlarge-only, table.show-for-xlarge-up, table.hide-for-xxlarge-only, table.hide-for-xxlarge-up {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.show-for-xlarge-only, thead.show-for-xlarge-up, thead.hide-for-xxlarge-only, thead.hide-for-xxlarge-up {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.show-for-xlarge-only, tbody.show-for-xlarge-up, tbody.hide-for-xxlarge-only, tbody.hide-for-xxlarge-up {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.show-for-xlarge-only, tr.show-for-xlarge-up, tr.hide-for-xxlarge-only, tr.hide-for-xxlarge-up {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.show-for-xlarge-only, td.show-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.hide-for-xxlarge-only, td.hide-for-xxlarge-only, th.hide-for-xxlarge-up, td.hide-for-xxlarge-up {\n" +
"    display: table-cell !important; } }\n" +
"/* xxlarge displays */\n" +
"@media only screen and (min-width: 120.063em) {\n" +
"  .hide-for-small-only, .show-for-small-up, .hide-for-small, .hide-for-small-down, .hide-for-medium-only, .show-for-medium-up, .hide-for-medium, .hide-for-medium-down, .hide-for-large-only, .show-for-large-up, .hide-for-large, .hide-for-large-down, .hide-for-xlarge-only, .show-for-xlarge-up, .show-for-xxlarge-only, .show-for-xxlarge-up {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .show-for-small-only, .hide-for-small-up, .show-for-small, .show-for-small-down, .show-for-medium-only, .hide-for-medium-up, .show-for-medium, .show-for-medium-down, .show-for-large-only, .hide-for-large-up, .show-for-large, .show-for-large-down, .show-for-xlarge-only, .hide-for-xlarge-up, .hide-for-xxlarge-only, .hide-for-xxlarge-up {\n" +
"    display: none !important; }\n" +
"\n" +
"  .hidden-for-small-only, .visible-for-small-up, .hidden-for-small, .hidden-for-small-down, .hidden-for-medium-only, .visible-for-medium-up, .hidden-for-medium, .hidden-for-medium-down, .hidden-for-large-only, .visible-for-large-up, .hidden-for-large, .hidden-for-large-down, .hidden-for-xlarge-only, .visible-for-xlarge-up, .visible-for-xxlarge-only, .visible-for-xxlarge-up {\n" +
"    position: static !important;\n" +
"    height: auto;\n" +
"    width: auto;\n" +
"    overflow: visible;\n" +
"    clip: auto; }\n" +
"\n" +
"  .visible-for-small-only, .hidden-for-small-up, .visible-for-small, .visible-for-small-down, .visible-for-medium-only, .hidden-for-medium-up, .visible-for-medium, .visible-for-medium-down, .visible-for-large-only, .hidden-for-large-up, .visible-for-large, .visible-for-large-down, .visible-for-xlarge-only, .hidden-for-xlarge-up, .hidden-for-xxlarge-only, .hidden-for-xxlarge-up {\n" +
"    position: absolute !important;\n" +
"    height: 1px;\n" +
"    width: 1px;\n" +
"    overflow: hidden;\n" +
"    clip: rect(1px, 1px, 1px, 1px); }\n" +
"\n" +
"  table.hide-for-small-only, table.show-for-small-up, table.hide-for-small, table.hide-for-small-down, table.hide-for-medium-only, table.show-for-medium-up, table.hide-for-medium, table.hide-for-medium-down, table.hide-for-large-only, table.show-for-large-up, table.hide-for-large, table.hide-for-large-down, table.hide-for-xlarge-only, table.show-for-xlarge-up, table.show-for-xxlarge-only, table.show-for-xxlarge-up {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.hide-for-small-only, thead.show-for-small-up, thead.hide-for-small, thead.hide-for-small-down, thead.hide-for-medium-only, thead.show-for-medium-up, thead.hide-for-medium, thead.hide-for-medium-down, thead.hide-for-large-only, thead.show-for-large-up, thead.hide-for-large, thead.hide-for-large-down, thead.hide-for-xlarge-only, thead.show-for-xlarge-up, thead.show-for-xxlarge-only, thead.show-for-xxlarge-up {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.hide-for-small-only, tbody.show-for-small-up, tbody.hide-for-small, tbody.hide-for-small-down, tbody.hide-for-medium-only, tbody.show-for-medium-up, tbody.hide-for-medium, tbody.hide-for-medium-down, tbody.hide-for-large-only, tbody.show-for-large-up, tbody.hide-for-large, tbody.hide-for-large-down, tbody.hide-for-xlarge-only, tbody.show-for-xlarge-up, tbody.show-for-xxlarge-only, tbody.show-for-xxlarge-up {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.hide-for-small-only, tr.show-for-small-up, tr.hide-for-small, tr.hide-for-small-down, tr.hide-for-medium-only, tr.show-for-medium-up, tr.hide-for-medium, tr.hide-for-medium-down, tr.hide-for-large-only, tr.show-for-large-up, tr.hide-for-large, tr.hide-for-large-down, tr.hide-for-xlarge-only, tr.show-for-xlarge-up, tr.show-for-xxlarge-only, tr.show-for-xxlarge-up {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  th.hide-for-small-only, td.hide-for-small-only, th.show-for-small-up, td.show-for-small-up, th.hide-for-small, td.hide-for-small, th.hide-for-small-down, td.hide-for-small-down, th.hide-for-medium-only, td.hide-for-medium-only, th.show-for-medium-up, td.show-for-medium-up, th.hide-for-medium, td.hide-for-medium, th.hide-for-medium-down, td.hide-for-medium-down, th.hide-for-large-only, td.hide-for-large-only, th.show-for-large-up, td.show-for-large-up, th.hide-for-large, td.hide-for-large, th.hide-for-large-down, td.hide-for-large-down, th.hide-for-xlarge-only, td.hide-for-xlarge-only, th.show-for-xlarge-up, td.show-for-xlarge-up, th.show-for-xxlarge-only, td.show-for-xxlarge-only, th.show-for-xxlarge-up, td.show-for-xxlarge-up {\n" +
"    display: table-cell !important; } }\n" +
"/* Orientation targeting */\n" +
".show-for-landscape,\n" +
".hide-for-portrait {\n" +
"  display: inherit !important; }\n" +
"\n" +
".hide-for-landscape,\n" +
".show-for-portrait {\n" +
"  display: none !important; }\n" +
"\n" +
"/* Specific visibility for tables */\n" +
"table.hide-for-landscape, table.show-for-portrait {\n" +
"  display: table !important; }\n" +
"\n" +
"thead.hide-for-landscape, thead.show-for-portrait {\n" +
"  display: table-header-group !important; }\n" +
"\n" +
"tbody.hide-for-landscape, tbody.show-for-portrait {\n" +
"  display: table-row-group !important; }\n" +
"\n" +
"tr.hide-for-landscape, tr.show-for-portrait {\n" +
"  display: table-row !important; }\n" +
"\n" +
"td.hide-for-landscape, td.show-for-portrait,\n" +
"th.hide-for-landscape,\n" +
"th.show-for-portrait {\n" +
"  display: table-cell !important; }\n" +
"\n" +
"@media only screen and (orientation: landscape) {\n" +
"  .show-for-landscape,\n" +
"  .hide-for-portrait {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .hide-for-landscape,\n" +
"  .show-for-portrait {\n" +
"    display: none !important; }\n" +
"\n" +
"  /* Specific visibility for tables */\n" +
"  table.show-for-landscape, table.hide-for-portrait {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.show-for-landscape, thead.hide-for-portrait {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.show-for-landscape, tbody.hide-for-portrait {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.show-for-landscape, tr.hide-for-portrait {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  td.show-for-landscape, td.hide-for-portrait,\n" +
"  th.show-for-landscape,\n" +
"  th.hide-for-portrait {\n" +
"    display: table-cell !important; } }\n" +
"@media only screen and (orientation: portrait) {\n" +
"  .show-for-portrait,\n" +
"  .hide-for-landscape {\n" +
"    display: inherit !important; }\n" +
"\n" +
"  .hide-for-portrait,\n" +
"  .show-for-landscape {\n" +
"    display: none !important; }\n" +
"\n" +
"  /* Specific visibility for tables */\n" +
"  table.show-for-portrait, table.hide-for-landscape {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.show-for-portrait, thead.hide-for-landscape {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.show-for-portrait, tbody.hide-for-landscape {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.show-for-portrait, tr.hide-for-landscape {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  td.show-for-portrait, td.hide-for-landscape,\n" +
"  th.show-for-portrait,\n" +
"  th.hide-for-landscape {\n" +
"    display: table-cell !important; } }\n" +
"/* Touch-enabled device targeting */\n" +
".show-for-touch {\n" +
"  display: none !important; }\n" +
"\n" +
".hide-for-touch {\n" +
"  display: inherit !important; }\n" +
"\n" +
".touch .show-for-touch {\n" +
"  display: inherit !important; }\n" +
"\n" +
".touch .hide-for-touch {\n" +
"  display: none !important; }\n" +
"\n" +
"/* Specific visibility for tables */\n" +
"table.hide-for-touch {\n" +
"  display: table !important; }\n" +
"\n" +
".touch table.show-for-touch {\n" +
"  display: table !important; }\n" +
"\n" +
"thead.hide-for-touch {\n" +
"  display: table-header-group !important; }\n" +
"\n" +
".touch thead.show-for-touch {\n" +
"  display: table-header-group !important; }\n" +
"\n" +
"tbody.hide-for-touch {\n" +
"  display: table-row-group !important; }\n" +
"\n" +
".touch tbody.show-for-touch {\n" +
"  display: table-row-group !important; }\n" +
"\n" +
"tr.hide-for-touch {\n" +
"  display: table-row !important; }\n" +
"\n" +
".touch tr.show-for-touch {\n" +
"  display: table-row !important; }\n" +
"\n" +
"td.hide-for-touch {\n" +
"  display: table-cell !important; }\n" +
"\n" +
".touch td.show-for-touch {\n" +
"  display: table-cell !important; }\n" +
"\n" +
"th.hide-for-touch {\n" +
"  display: table-cell !important; }\n" +
"\n" +
".touch th.show-for-touch {\n" +
"  display: table-cell !important; }\n" +
"\n" +
"/* Print visibility */\n" +
"@media print {\n" +
"  .show-for-print {\n" +
"    display: block; }\n" +
"\n" +
"  .hide-for-print {\n" +
"    display: none; }\n" +
"\n" +
"  table.show-for-print {\n" +
"    display: table !important; }\n" +
"\n" +
"  thead.show-for-print {\n" +
"    display: table-header-group !important; }\n" +
"\n" +
"  tbody.show-for-print {\n" +
"    display: table-row-group !important; }\n" +
"\n" +
"  tr.show-for-print {\n" +
"    display: table-row !important; }\n" +
"\n" +
"  td.show-for-print {\n" +
"    display: table-cell !important; }\n" +
"\n" +
"  th.show-for-print {\n" +
"    display: table-cell !important; } }\n" +
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
