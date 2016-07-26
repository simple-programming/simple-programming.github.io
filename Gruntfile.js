// Expecting
//    bower install jquery
//    bower install angular

module.exports = function(grunt) {

  grunt.initConfig({

    uglify: {
      my_target : {
        files : {
          'js/main.min.js' : [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/angular/angular.min.js',
            'bower_components/angular-cookies/angular-cookies.min.js',
            'js/ui.js',
            'js/simple.js'
          ]
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ["uglify"]);

}
