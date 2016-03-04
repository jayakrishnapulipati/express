/**
 * Created by PRASAD on 20-Feb-16.
 */
 var getDbrecords = require('../app/controllers/dbCon');
 console.log(getDbrecords().db, 'ssssssssssssss');
module.exports = function(app, dbcon) {
    var data={
        'first':'raju',
        'email':'raju@email.com'
    };
    app.get('/create/account', function (req, res) {


                    res.send(data);
    });
    app.post('/create/account',function(req, res) {
        var data = req.body;


            // Get our form values. These rely on the "name" attributes
            var userName = req.body.firstname;
            var userEmail = req.body.pwdname;


            var result = getDbrecords().insertRecordIntoCollection("newAccount", req.body);
            console.log(result);
    });

};