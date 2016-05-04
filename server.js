var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var http = require('http');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views/layouts'));

app.get('/', function(req, res) {
    console.log('website accessed');
    res.render('home');
});

/*
 * Requests are sent to the api through uri http://capstone-crawler.appspot.com/crawler?
 * pages = pagesToCrawl
 * depth = crawlDepth
 * start = webCrawlURL
 */
app.post('/', function(req, res) {
	var crawlURL 	= req.body.webCrawlURL;
	var crawlDepth  = req.body.crawlDepth;
	var pageNum 	= req.body.pagesToCrawl; 

	console.log("URL: " + crawlURL);
	console.log("Crawl Depth: " + crawlDepth);
	console.log("Page number: " + pageNum);

	// make our GET request
	var optionsget = {
		host: 'capstone-crawler.appspot.com',
		path: '/crawler?pages=' + pageNum + '&depth=' + crawlDepth + '&start=' + crawlURL,
		method: 'GET',
	};
 
	console.log(optionsget);
	console.log('Making GET call');
	 
	// do the GET request
	var reqGet = http.request(optionsget, function(res) {
	    console.log("statusCode: ", res.statusCode);

	    res.on('data', function(d) {
		console.info('GET result:\n');
		process.stdout.write(d);
		console.info('\n\nCall completed');
	    });
	 
	});
	 
	reqGet.end();
	reqGet.on('error', function(e) {
	    console.error(e);
	});

	// this to be replaced with visualization
	res.render('home');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + app.get('port'));
});

require('dns').lookup(require('os').hostname(), function(err, add, fam) {
    console.log('addr: ' + add);
})


