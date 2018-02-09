// Empties folders to start fresh
module.exports = {
	logs: [
		'./logs/*.log'
	],
    test: [
        './.test/*'
    ],
    dev: [
        './.build/*',
    ],
    build: [
        './build/*'
    ],
};
