module.exports = function() {
    // browsersync css injection does not work with './src... for windows
    var client = 'src/client/';
    var clientApp = client + 'app/';
    var root = './';
    var server = './src/server/';
    var temp = 'tmp/';

    var config = {
        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        build: './build/',
        client: client,
        css: temp + 'styles.css',
        fonts: './vendor/font-awesome/fonts/**/*.*',
        html: clientApp + '**/*.html',
        htmltemplates: clientApp + '**/*.html',
        images: client + 'images/**/*.*',
        index: client + 'index.html',
        js: [
//            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
//            '!' + clientApp + '**/*.spec.js'
        ],
        less: client + 'styles/styles.less',
        root: root,
        server: server,
        temp: temp,

        /**
         * optimized files
         */
        optimized: {
            lib: 'lib.js',
            app: 'app.js'
        },

        /**
         * browser sync
         */
        browserReloadDelay: 1000,

        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './vendor/',
            ignorePath: '../..'
        },

        packages: [
            './package.json',
            './bower.json'
        ],


        /**
         * Node settings
         */
        defaultPort: 7203,
        nodeServer: './src/server/app.js'

    };

    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
