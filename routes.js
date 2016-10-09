// Copyright for portions of original project ReactJS-AdminLTE are held by almasaeed2010, 2015
// as part of project AdminLTE and booleanhunter. All other copyright for project lsio-ui
// are held by LambdaStack, 2015-2016 - Apache2 License.
//
// The MIT License (MIT)
//
// Copyright (c) 2016 LambdaStack

function initialize(app){

	//These are the API end points that you can write.

	//Setting up an event listener for GET request to '/'
	app.get('/', function(req, res){
		console.log('request to / received');
        res.render('dashboard.html');
	});

    app.get('/starter.html', function(req, res){
        res.render('starter.html');
    });

    app.get('/index.html', function(req, res){
        res.render('index.html');
    });

    app.get('/index2.html', function(req, res){
        res.render('index2.html');
    });

    app.get('/widgets.html', function(req, res){
        res.render('widgets.html');
    });

    app.get('/buttons.html', function(req, res){
        res.render('buttons.html');
    });

    app.get('/UI/general.html', function(req, res){
        res.render('general.html');
    });

    app.get('/timeline.html', function(req, res){
        res.render('timeline.html');
    });

}

exports.initialize = initialize;
