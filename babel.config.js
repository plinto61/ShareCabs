module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@assets': './assets',
						'@common': './src/components/common',
						'@screens': './src/screens',
					},
					extensions: ['.js', '.jsx'],
				},
			],
		],
	};
};
