
/*var mongoose = require('mongoose');*/

var MongoClient = require('mongodb').MongoClient;
var config = require('../../app/config.json');

 var modules = function () {
    var state  = {
        db: null
    }
    var dbCollection = function () {
        var connected =  state.db.collection("mynewcollection").find().toArray(function(err,res){
                                                            console.log(res);
                                                        });

      /* creating new collection in Database
      */
        state.db.createCollection('newAccount',function(err, collection){

            console.log("Created testCollection" + { firstName: String,
                                                     password: String,
                                                     email: String
                                                   });
       })
    }
    var startup = function (dbToUse) {

        // Connect mongoose and select db
        MongoClient.connect(dbToUse,function(req,database){
            state.db = database;
            console.log(dbToUse);
            dbCollection();
        });
    };

    var insertRecordIntoCollection = function (collectionName, object) {
        console.log(collectionName, object, state.db);
        if (!state.db) {
            MongoClient.connect(config.connection,function(req,database){
                state.db = database;
                state.db.collection(collectionName).insert(object, function (err, result) {
                    console.log('jjjjjjjjj', result);
                            if (err)
                                throw err;
                            return 'successfully inserted';
                        });
            });
        }

    }


    return {
        state: state,
        startup: startup,
        dbCollection: dbCollection,
        insertRecordIntoCollection: insertRecordIntoCollection
    }
 };
module.exports = modules;