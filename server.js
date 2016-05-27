var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var http = require('http');
var functions = require('./functions');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views/layouts'));

var sampleResponse = {
	"root":"http://web.engr.oregonstate.edu/~sakamosa/htmlgenerator/",
	"links":15,
	"http://web.engr.oregonstate.edu/~sakamosa/htmlgenerator/":["https://basecamp.com/","https://github.com/basecamp/trix","http://www.dirtymarkup.com/"],
	"https://basecamp.com/":["https://basecamp.com/3/features","https://basecamp.com/3/pricing","https://basecamp.com/support","https://basecamp.com/3/clientside","https://basecamp.com/about","https://basecamp.com/signup","https://3.basecamp.com/hello","https://basecamp.com/3/new","mailto:jason@basecamp.com","https://thedistance.com/","https://signalvnoise.com/"],
	"https://basecamp.com/3/features":[],
	"https://basecamp.com/3/pricing":[],
	"https://basecamp.com/support":[],
	"https://basecamp.com/3/clientside":[],
	"https://basecamp.com/about":[],
	"https://basecamp.com/signup":[],
	"https://3.basecamp.com/hello":[],
	"https://basecamp.com/3/new":[],
	"mailto:jason@basecamp.com":[],
	"https://thedistance.com/":[],
	"https://signalvnoise.com/":[],
	"https://github.com/basecamp/trix":[],
	"http://www.dirtymarkup.com/":[]
}

app.get('/', function(req, res, next) {
	res.render('home');
});

/*
 * Requests are sent to the api through uri http://capstone-crawler.appspot.com/crawler?
 * pages = pagesToCrawl
 * depth = crawlDepth
 * start = webCrawlURL
 */
app.post('/', function(req, res, next) {
	var crawlURL 			= req.body.webCrawlURL;
	var crawlDepth  		= req.body.crawlDepth;
	var pageNum 			= req.body.pagesToCrawl; 
	var getDateTime			= functions.getDateTime();

	if(functions.validateUrl(crawlURL)) {
		console.log("Valid url." + crawlURL);
	}
	else {
		console.log("Invalid url." + crawlURL);
	}
	
	// make our GET request
	var optionsget = {
		host: 'capstone-crawler.appspot.com',
		path: '/crawler?pages=' + pageNum + '&depth=' + crawlDepth + '&start=' + crawlURL,
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	};
 
	 
	
	// this to be replaced with visualization

	res.render('crawl');//, receivedResponse);
});

app.get('/crawl', function(req, res, next) {
	console.log(receivedResponse);
	res.render('crawl', receivedResponse);
	res.end();
}); 

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port'));
});

require('dns').lookup(require('os').hostname(), function(err, add, fam) {
    console.log('addr: ' + add);
})


