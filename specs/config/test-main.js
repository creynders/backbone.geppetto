"use strict";

// Defer QUnit startup until dependencies have been loaded with RequireJS
QUnit.config.autostart = false;

// Allow QUnit to use global scope, which RequireJS needs to inject dependencies
QUnit.specify.globalApi = true;

require.config( {
    paths:{
        jquery:'../../dependencies/jquery-1.7.1.min',
        underscore:'../../dependencies/underscore',
        backbone:'../../dependencies/backbone',
        marionette:'../../dependencies/backbone.marionette',
        geppetto:'../../backbone.geppetto',
        text:'../../dependencies/text'
    }
} );

require(
        [
            // external libraries with AMD support

            "jquery",
            "underscore",
            "backbone",
            "marionette",
            "geppetto",
            "../geppetto-specs"

        ], function ( $, _, Backbone, Marionette, Geppetto, MyApp ) {

            $( function () {
                QUnit.start();
            });
        }
);
