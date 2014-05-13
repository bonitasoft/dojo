module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'src/assets/angular/angular.js',
            'src/assets/angular/angular-route.js',
            'test/lib/angular-mocks.js',
            'src/common/**/*.js',
            'src/app/**/*.js',
            'test/**/*.spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};