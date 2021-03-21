module.exports = {
	assetPrefix: "",
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			test: /\.(jpe?g|png|svg|gif|eot|ttf|woff|woff2)$/,
			use: [
				{
					loader: "file-loader",
					options: {
						publicPath: "/_next/static/images/",
						outputPath: "static/images/",
						name: "[name]-[hash].[ext]",
					},
				},
			],
		});

		// Important: return the modified config
		return config;
	},
};
