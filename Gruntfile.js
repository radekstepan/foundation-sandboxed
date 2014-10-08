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
          'build/css/foundation.css': 'src/foundation.scss',
          'build/css/normalize.css': 'src/normalize.scss'
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
          'build/css/foundation.sandboxed.css': 'build/css/foundation.css'
        }
      }
    },

    'csso': {
      'minify': {      
        'expand': true,
        'files': {
          'build/css/normalize.min.css': 'build/css/normalize.css',
          'build/css/foundation.min.css': 'build/css/foundation.css',
          'build/css/foundation.sandboxed.min.css': 'build/css/foundation.sandboxed.css'
        }
      }
    },

    'css2js': {
      'default': {
        'files': {
          'build/js/foundation.js': 'build/css/foundation.css',
          'build/js/foundation.sandboxed.js': 'build/css/foundation.sandboxed.css',
          'build/js/normalize.js': 'build/css/normalize.css',
          'build/js/foundation.min.js': 'build/css/foundation.min.css',
          'build/js/foundation.sandboxed.min.js': 'build/css/foundation.sandboxed.min.css',
          'build/js/normalize.min.js': 'build/css/normalize.min.css'
        }
      }
    },

    'wrap': {
      'exports': {
        'files': {
          'build/commonjs/foundation.js': 'build/js/foundation.js',
          'build/commonjs/foundation.sandboxed.js': 'build/js/foundation.sandboxed.js',
          'build/commonjs/normalize.js': 'build/js/normalize.js',
          'build/commonjs/foundation.min.js': 'build/js/foundation.min.js',
          'build/commonjs/foundation.sandboxed.min.js': 'build/js/foundation.sandboxed.min.js',
          'build/commonjs/normalize.min.js': 'build/js/normalize.min.js'
        },
        'options': {
          'wrapper': [ 'module.exports = \n' ]
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
  grunt.loadNpmTasks('grunt-css2js');
  grunt.loadNpmTasks('grunt-wrap');

  grunt.registerTask('default', [ 'clean', 'sass', 'string-replace', 'sandbox_css', 'csso', 'css2js', 'wrap' ]);

};