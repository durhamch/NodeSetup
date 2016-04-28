var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 55433);

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());


app.get('/', function(req, res) {
    console.log('website accessed');
    res.render('home');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port'));
});

require('dns').lookup(require('os').hostname(), function(err, add, fam) {
    console.log('addr: ' + add);
})


