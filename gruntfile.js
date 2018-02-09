'use strict';

module.exports = function (grunt) {
    // Load grunt tasks automatically
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-express-server');

    require('load-grunt-config')(grunt, {
        jitGrunt: {
        }
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.registerTask('test', [
        'clean:test',
        'tslint:default',
        'ts:test',
        'mochaTest:default',
    ]);

    grunt.registerTask('build', [
        'test',
        'clean:build',
        'ts:build',
        'webpack:build',
    ]);

    grunt.registerTask('build@dev', [
        'clean:dev',
        'ts:dev',
        'webpack:dev',
    ]);

    grunt.registerTask('server', [
        'build@dev',
        'express:dev',
        'watch:default'
    ]);

    grunt.registerTask('default', ['server']);

};
