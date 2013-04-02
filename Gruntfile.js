'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function(connect, dir) {
    return connect.static(require('path').resolve(dir));
};


module.exports = function(grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        watch: {
            compass: {
                files: ['app/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            jade: {
                files: ['app/{,*/}*.jade', 'app/{,*/}*.html'],
                tasks: ['jade:debug']
            },
            copy: {
                files: ['app/scripts/{,*/}*.js', 'app/images/{,*/}*.{png,jpg,jpeg,webp}'],
                tasks: ['copy:debug']
            },
            livereload: {
                files: [
                    '{.tmp,app}/styles/{,*/}*.css',
                    '{.tmp,app}/scripts/{,*/}*.js',
                    '{.tmp,app}/images/{,*/}*.{png,jpg,jpeg,webp}'],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                        lrSnippet,
                        mountFolder(connect, '.tmp'),
                        mountFolder(connect, 'app')];
                    }
                }
            },
            debug: {
                options: {
                    middleware: function(connect) {
                        return [
                        mountFolder(connect, '.tmp'),
                        mountFolder(connect, 'app')];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function(connect) {
                        return [
                        mountFolder(connect, 'dist')];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            debug: '.tmp',
            dist: ['.tmp', 'dist/*'],
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'app/scripts/{,*/}*.js']
        },
        compass: {
            debug: {
                options: {
                    sassDir: 'app/styles',
                    cssDir: '.tmp/styles',
                    imagesDir: 'app/images'
                }
            },
            dist: {
                options: {
                    sassDir: 'app/styles',
                    cssDir: 'dist/styles',
                    imagesDir: 'app/images',
                    environment: 'production'
                }
            }
        },
        jade: {
            debug: {
                options: {
                    data: {
                        debug: true
                    },
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.jade'],
                    dest: '.tmp/',
                    ext: '.html'
                }]
            },
            dist: {
                options: {
                    data: {
                        debug: true
                    },
                    pretty: true
                },
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.jade'],
                    dest: 'dist/',
                    ext: '.html'
                }]
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/scripts/main.js': [
                        'app/scripts/{,*/}*.js'],
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'dist/images'
                }]
            }
        },
        copy: {
            debug: {
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**'],
                    dest: '.tmp/images'
                }, // makes all src relative to cwd
                {
                    expand: true,
                    cwd: 'app/scripts/',
                    src: ['**'],
                    dest: '.tmp/scripts'
                } // flattens
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images/',
                    src: ['**'],
                    dest: 'dist/images'
                }, // makes all src relative to cwd
                {
                    expand: true,
                    cwd: 'app/scripts/',
                    src: ['**'],
                    dest: 'dist/scripts'
                } // flattens
                ]
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('server', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:dist',
            'compass:debug',
            'jade:debug',
            'livereload-start',
            'connect:livereload',
            'copy:debug',
            'open',
            'jshint',
            'watch']);
    });


    grunt.registerTask('build', [
        'clean:debug',
        'clean:dist',
        'compass:dist',
        'jade:dist',
        'imagemin',
        'uglify',
        'copy:dist']);

    grunt.registerTask('default', [
        'server']);
};