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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('default', [ 'clean', 'sass', 'string-replace' ]);

};