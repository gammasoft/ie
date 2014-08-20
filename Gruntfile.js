'use strict';

var fs = require('fs'),
    _ = require('underscore'),
    pkg = require('./package.json');

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: _.template(fs.readFileSync('./comentarioTemplate.html').toString())({
                    pkg: pkg,
                    today: grunt.template.today('dd/mm/yyyy')
                })
            },

            dist: {
                files: {
                    'ie.min.js': ['ie.js']
                }
            }
        },

        nodeunit : {
            all : ['testes/*.js']
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'ie.js',
                'testes/*.js',
                'lib/*.js'
            ],
            options: {
                node: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                bitwise: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                noempty: true,
                nonew: true,
                plusplus: false,
                quotmark: 'single',
                undef: true,
                unused: true,
                strict: true,
                trailing: true,
                maxparams: 4,
                maxdepth: 3
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('minify', ['uglify']);

    grunt.registerTask('test', [
        'jshint',
        'nodeunit'
    ]);
};