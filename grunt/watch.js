module.exports = {
    default: {
        files: [
            'sources/server/src/**/*.ts',
            'sources/server/src/**/*.tsx'
        ],
        tasks: [
            'ts:dev',
            'express:dev',
        ],
        options: {
            livereload: false,
            spawn: false,
        }
    }
};
