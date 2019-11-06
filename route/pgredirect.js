var checksum = require('../model/checksum');
module.exports = function (app) {
   app.get('/pgredirect', function(req,res){
        console.log("in pgdirect");
        res.render('pgredirect.ejs');
    });
};