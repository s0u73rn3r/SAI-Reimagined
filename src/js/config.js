//const { default: mongoose } = require("mongoose");

requirejs.config({
    baseUrl: "js",
    paths: {
        jquery: [
            '//code.jquery.com/jquery-3.3.1',
            '//ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min'
        ]
    },
    nodeRequire: require
});

define(['mongoose'], function(mongoose) {
    Schema = mongoose.Schema;
}); 
/*
define(['require', 'mongoose'], function (require) {
    const mongoose = require('mongoose');

    return function () {};
});


define(function (require) {
    const mongoose = requirejs('mongoose');
    document.write('mongoose loaded');
});

requirejs(['mongoose'], function( mongoose) {
    Schema = mongoose.Schema;
    document.write( "mongoose loaded");
});
/*
define(function (require) {
    const mongoose = require('mongoose');
    document.write('mongoose loaded');
});*/
