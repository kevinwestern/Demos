/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    meta: {
      version: '0.1.0',
      banner: '/*! BuildingWithGrunt - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://buildingwithgrunt/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'Kevin; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'src/**/*.js', 'test/**/*.js'],
        dest: 'public/javascripts/TestBuildOne.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'public/javascripts/TestBuildOne.min.js'
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint concat'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        TestBuildOne: true
      }
    },
    uglify: {},
    jasmine: {
      specdir: './spec'
    }
  });

  // Default task.
  grunt.registerTask('build', 'lint concat min');
  grunt.registerTask('mocha', 'Runs mocha tests', function () {
    console.log('running mocha!');
    require('child_process').exec('mocha -r should spec/*.js', function() {
      console.log(arguments);
    });
  });
};