module.exports = function(grunt) {

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'clean': [ 'dist/' ],

    'sass': {
      dist: {
        options: {
          loadPath: [ '/.scss' ],
          bundleExec: true
        },
        files: {
          'dist/assets/css/foundation.css': 'scss/foundation.scss',
          'dist/assets/css/normalize.css': 'scss/normalize.scss'
        }
      }
    },

    'copy': {
      dist: {
        files: [
          { 'expand': true, 'cwd': 'doc/assets/', 'src': ['**/*','!{scss}/**/*'], 'dest': 'dist/docs/assets/', 'filter': 'isFile' },
          { 'expand': true, 'cwd': 'scss/', 'src': '**/*.scss', 'dest': 'dist/assets/scss/', 'filter': 'isFile' }
        ]
      }
    },

    'string-replace': {
      dist: {
        files: {
          'dist/assets/css/':'dist/assets/css/*.css',
          'dist/assets/scss/foundation/components/':'dist/assets/scss/foundation/components/*.scss',
          'dist/docs/assets/css/':'dist/docs/assets/css/*.css'
        },
        options: {
          replacements: [
            { 'pattern': /{{\s*VERSION\s*}}/g, 'replacement': '<%= pkg.version %>' }
          ]
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jst');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('default', [ 'clean', 'sass', 'copy', 'string-replace' ]);

};