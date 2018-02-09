'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

var share = {
    entryPoints: {
        common: path.join(__dirname, '/../sources/client/src/index.scss'),
        index: path.join(__dirname, '/../sources/client/src/index'),
    },
    outputPath: path.join(__dirname, '/../.build/public/js'),
    publicPath: '/public/',
    sassIncludePaths: path.join(__dirname, '/../sources/client/src')
};

module.exports = {
    dev: {
        entry: share.entryPoints,
        output: {
            path: path.join(__dirname, '/../.build/public/js'),
            publicPath: share.publicPath,
            filename: '[name].js',
        },
        progress: true,
        performance: {
            hints: false,
            maxEntrypointSize: 90000000,
            maxAssetSize: 90000000,
        },
        stats: {
            children: false,
            colors: true,
            // modules: true,
            reasons: true,
            timings: true,
        },
        devtool: 'cheap-module-source-map',
        watch: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 400,
            ignored: /node_modules/
        },
        cache: true,
        keepalive: false,
        plugins: [
            new webpack.ProvidePlugin({
                "Promise": "bluebird"
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('development')
				}
            }),
            new TsConfigPathsPlugin(),
            new ExtractTextPlugin({
                filename: '[name].css',
                allChunks: true,
                ignoreOrder: true,
                disable: false,
            })
        ],
        externals: {
            // 'react': 'React',
            // 'react-dom': 'ReactDOM',
        },
        resolve: {
            modules: [
                'node_modules'
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    // exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader'
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', 'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    // exclude: /(node_modules)/,
                    use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true,
                                    }
                                },
                                {
                                    loader: 'resolve-url-loader'
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true,
                                        includePaths: [share.sassIncludePaths]
                                    }
                                }
                            ],
                        }
                    )
                },
                {
                    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                    use: ['url-loader?name=../resources/fonts/[name].[ext]&limit=100']
                },
                {
                    test: /\.(jpeg|jpg|png|gif)$/i,
                    use: ['url-loader?name=../resources/images/[name].[ext]&limit=100']
                }
            ]
        }


    },
    build: {
        entry: share.entryPoints,
        output: {
            path: path.join(__dirname, '/../build/public/js'),
            publicPath: share.publicPath,
            filename: '[name].js',
        },
        progress: true,
        performance: {
            hints: false,
            maxEntrypointSize: 90000000,
            maxAssetSize: 90000000,
        },
        stats: {
            children: false,
            colors: true,
            reasons: true,
            timings: true,
        },
        watch: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 400,
            ignored: /node_modules/
        },
        cache: true,
        keepalive: false,
        plugins: [
            new webpack.ProvidePlugin({
                "Promise": "bluebird"
            }),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify('production')
				}
            }),
            new TsConfigPathsPlugin(),
            new ExtractTextPlugin({
                filename: '[name].css',
                allChunks: true,
                ignoreOrder: false,
                disable: false,
            }),
			new webpack.LoaderOptionsPlugin({
				minimize: true,
				debug: false
			}),
			new webpack.optimize.UglifyJsPlugin({
				beautify: false,
				// mangle: {
				// 	screw_ie8: true,
				// 	keep_fnames: true
				// },
				// compress: {
				// 	screw_ie8: true
				// },
				comments: false
			}),
			new webpack.optimize.CommonsChunkPlugin({
				children: true,
				async: true,
			}),
			new webpack.optimize.OccurrenceOrderPlugin()
        ],
        externals: {
            // 'react': 'React',
            // 'react-dom': 'ReactDOM',
        },
        resolve: {
            modules: [
                'node_modules'
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    // exclude: /(node_modules)/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader'
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader', 'css-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    // exclude: /(node_modules)/,
                    use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                {
                                    loader: 'css-loader',
                                    options: {
                                        sourceMap: true,
                                    }
                                },
                                {
                                    loader: 'resolve-url-loader'
                                },
                                {
                                    loader: 'sass-loader',
                                    options: {
                                        sourceMap: true,
                                        includePaths: [share.sassIncludePaths]
                                    }
                                }
                            ],
                        }
                    )
                },
                {
                    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.otf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                    use: ['url-loader?name=../resources/fonts/[name].[ext]&limit=100']
                },
                {
                    test: /\.(jpeg|jpg|png|gif)$/i,
                    use: ['url-loader?name=../resources/images/[name].[ext]&limit=100']
                }
            ]
        }
    },
    share: share
};
