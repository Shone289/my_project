const express = require('express');
const app = express();


//setting template engine (handlebars)
const handlebars = require('express3-handlebars').create({
  defaultLayout: 'main',
  helpers: {
    section: function(name, options){
      if(!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    }
  }
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3030);

//enable public folder for use in app
app.use(express.static(__dirname+'/public/'));
console.log("DIR_NAME: " + __dirname);

//set partials
//enabling views to use some dinamic data
app.use(function(req, res, next){
  if(!res.locals.partials) res.locals.partials = {};
  //res.locals.partials.myData = JSON.parse(myData);
  next();
});
/*
*   ROUTING
* 
*/
app.get('/', function(req, res){
  res.render('initial');
});
app.get('/test', function(req, res){
  res.render('404');
})
//
// ERROR ROUTING HANDLING


//
//  SET APP LISTENING

app.listen(app.get('port'), function(){
  console.log('Press Ctrl-c to terminate app.');
});