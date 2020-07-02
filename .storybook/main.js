module.exports = {
    stories: ['../**/*.stories.tsx'],
    webpackFinal: async config => {
        config.resolve.extensions.push('.ts', '.tsx');
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
        });

        return config;
    },
};
