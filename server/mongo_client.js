(function(){
    /* jshint node:true */
    'use strict';

    var client = require('mongodb').MongoClient,
        mongodb;

    module.exports =  {
        connect: function(dburl, callback) {
            client.connect(dburl,
                function(err, db){
                    console.log('Connected to MongoDB.');
                    mongodb = db;
                    if(callback) { callback(); }
                });
        },
        db: function(){
            return mongodb;
        },
        close: function() {
            mongodb.close();
        }
    };
})();
