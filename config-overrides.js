// 
//  config-overrides.js
//  <project>
//  add or update webpack config
//  Created by licheng09 on 2017-09-04.
//  Copyright 2017 licheng09. All rights reserved.
//  https://ant.design/docs/react/use-with-create-react-app-cn
// 
const paths = require('./paths');
const {
	injectBabelPlugin
} = require('react-app-rewired');
const autoprefixer = require('autoprefixer');
module.exports = function override(config, env) {
	config.module.rules[1].oneOf[config.module.rules[1].oneOf.length-1].exclude.push(/\.scss/);
	config.module.rules.push({
            test: /\.scss$/,
            use: [
                require.resolve('style-loader'),
                {
                    loader: require.resolve('css-loader'),
                    options: {
                        importLoaders: 2,
                    },
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        // Necessary for external CSS imports to work
                        // https://github.com/facebookincubator/create-react-app/issues/2677
                        ident: 'postcss',
                        plugins: () => [
                            require('postcss-flexbugs-fixes'),
                            autoprefixer({
                                browsers: [
                                    '>1%',
                                    'last 0 versions',
                                    'Firefox ESR',
                                    'not ie < 9', // React doesn't support IE8 anyway
                                ]
                            }),
                        ],
                    },
                },
                {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["src/"]
                    }
                }
            ]
	});

	return config;
};