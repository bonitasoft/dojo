module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'src/assets/angular/angular.js',
            'test/lib/angular-mocks.js',
            'src/common/directives/crud/crudButtons.js',
            'test/**/*Spec.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

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