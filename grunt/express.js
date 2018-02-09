module.exports = {
	dev: {
		options: {
			script: '.build/index.js',
			node_env: 'development',
			output: ".+",
		}
	},
	prod: {
		options: {
			script: 'build/index.js',
			node_env: 'production',
			output: ".+",
		}
	}
};
