var https = require('https'),
    verify = require('browserid-verify')();

/*
 * GET home page.
 */

exports.index = function(req, resp){
  resp.render('index', { title: 'Release Management Checklist', user: req.session.email, csrf: req.session._csrf, version: req.session.ver, qa_sign : req.session.qa_signoff});
  //if (version) {
 // req.session.version = version;
 // resp.render('index', {version: req.session.version});
 // }
};

exports.version_declare = function(req, resp) {
  if (req.body.ff_version) {
    req.session.ver = req.body.ff_version;
    //database(req, resp);
    console.log( "Setting version to: " + req.body.ff_version);
    return resp.redirect('/');
  }

  else {
    console.log("error error");
    console.log(req.body.ff_version);
  }

  function database(req, res){
    var version=req.body.ff_version;
/*The second parameter phone is the id we are explicitly specifying*/
console.log("I made it here!!!");
  db.insert({version:version,qa_sign:false},version,function(err, body) {
    if (err) {
  if(err.message === 'no_db_file') {
            // create database and retry
           return nano.db.create("versions", function () {
            insert_version(req,res);
            console.log("ARLOOO");
          });
         }
  console.log("Error creating version or version already exists");
console.log (err.message);
return;
}
console.log("Version was created sucessfully %s %s", version);
});

}
};

