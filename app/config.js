/**
 * Created by PRASAD on 20-Feb-16.
 */

MongoClient.connect('mongodb://raju:raju@ds031691.mongolab.com:31691/application', function(err, db) {
    if (err) {
        throw err;
    }
    db.collection('mammals').find().toArray(function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});
