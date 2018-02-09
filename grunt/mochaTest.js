module.exports = {
	default: {
		options: {
			reporter: 'spec',
			quiet: false, // Optionally suppress output to standard out (defaults to false)
			clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
		},
		src: [
			'.test/client/tests/**/*.js',
			'.test/server/tests/**/*.js',
		],
	},
};
