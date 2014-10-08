module.exports = function(grunt) {

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'clean': [ 'build/' ],

    'sass': {
      'dist': {
        'options': {
          'loadPath': [ '/.src' ],
          'bundleExec': true
        },
        'files': {
          'build/foundation.css': 'src/foundation.scss',
          'build/normalize.css': 'src/normalize.scss'
        }
      }
    },

    'string-replace': {
      'dist': {
        'files': {
          'build/':'build/*.css'
        },
        'options': {
          'replacements': [
            { 'pattern': /{{\s*VERSION\s*}}/g, 'replacement': '<%= pkg.version %>' }
          ]
        }
      }
    },

    'sandbox_css': {
      'foundation': {
        'options': {
          'prefix': '.foundation '
        },
        'files': {
          'build/foundation.sandboxed.css': 'build/foundation.css'
        }
      }
    },

    'csso': {
      'minify': {      
        'expand': true,
        'files': {
          'build/normalize.min.css': 'build/normalize.css',
          'build/foundation.min.css': 'build/foundation.css',
          'build/foundation.sandboxed.min.css': 'build/foundation.sandboxed.css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-css-prefix');
  grunt.loadNpmTasks('grunt-sandbox-css');
  grunt.loadNpmTasks('grunt-csso');

  grunt.registerTask('default', [ 'clean', 'sass', 'string-replace', 'sandbox_css', 'csso' ]);

};