var sampleResponse = {
	"test":"ok",
	"meta": {
		"root":"http://web.engr.oregonstate.edu/~sakamosa/htmlgenerator/",
		"links":15
	},	
	"results": {
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
}

var validResponse = false;
for(var k in sampleResponse){
	if(k == 'test') {
		if(sampleResponse[k] == "ok") {
			validResponse = true;
		}
	}
}


if(validResponse == true) {
	var results = {};
	for(var key in sampleResponse) {
		if(key == 'results'){
			results = sampleResponse[key];
		}
	}
	for(var resultKeys in results) {
		console.log(resultKeys);
		console.log("===========");
		var linkedSites = results[resultKeys];
		if(linkedSites.length > 0) {
			for(var i = 0; i < linkedSites.length; i++) {
				console.log(linkedSites[i]);
			}
		}
		else {
			console.log("No linked sites.");
		}
		console.log("\n\n");
	}


}
