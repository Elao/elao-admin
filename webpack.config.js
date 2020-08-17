var Encore = require('@symfony/webpack-encore');
var HtmlWebpackPlugin = require('html-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath(Encore.isProduction() ? 'docs/build/' : 'public/build/')
    // public path used by the web server to access the output path
    .setPublicPath(Encore.isProduction() ? 'https://elao.github.io/elao-admin/build' : '/build')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('app', './assets/app.js')
    //.addStyleEntry('style', './assets/app.scss')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(false)

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    .copyFiles({
      from: './assets/images',
      to: 'images/[path][name].[ext]',
    })

    .configureDevServerOptions(options => {
        options.liveReload = true;
        options.writeToDisk = true;
    })

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')

    .addPlugin(new HtmlWebpackPlugin({
        template: `${__dirname}/assets/index.html`,
        filename: '../index.html',
    }))
;

module.exports = Encore.getWebpackConfig();
