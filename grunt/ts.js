module.exports = {
    test: {
        files: [
            {
                src: [
                    'sources/server/**/*.ts',
                    'sources/server/**/*.tsx',
                ],
                dest: '.test'
            },
        ],
        options: {
            // fast: 'never',
            module: 'commonjs',
            target: 'es2015',
            jsx: 'react',
            comments: false,
            declaration: false,
            sourceMap: false,
			newLine: 'LF'
        },
    },
    dev: {
        files: [
            {
                src: [
                    'sources/server/src/**/*.ts',
                    'sources/server/src/**/*.tsx',
                ],
                dest: '.build'
            },
        ],
        options: {
            // fast: 'never',
            module: 'commonjs',
            target: 'es2015',
            jsx: 'react',
            comments: false,
            declaration: false,
            sourceMap: false,
			newLine: 'LF'
        },
    },
    build: {
        files: [
            {
                src: [
                    'sources/server/src/**/*.ts',
                    'sources/server/src/**/*.tsx',
                ],
                dest: 'build'
            },
        ],
        options: {
            // fast: 'never',
            module: 'commonjs',
            target: 'es2015',
            jsx: 'react',
            comments: false,
            declaration: false,
            sourceMap: false,
			newLine: 'LF'
        },
    },
};
