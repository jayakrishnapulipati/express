/**
 * Created by PRASAD on 20-Feb-16.
 */
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

            // Set our collection
             var thor = new Movie({
               title: 'Thor'
             , rating: 'PG-13'
             , releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
             , hasCreditCookie: true
             });

             thor.save(function(err, thor) {
               if (err) return console.error(err);
               console.dir(thor);
             });
    });

};