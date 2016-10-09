// Copyright for portions of original project ReactJS-AdminLTE are held by almasaeed2010, 2015
// as part of project AdminLTE and booleanhunter. All other copyright for project lsio-ui
// are held by LambdaStack, 2015-2016 - Apache2 License.
//
// The MIT License (MIT)
//
// Copyright (c) 2016 LambdaStack

var http = require("http");  //1
var url = require("url");  //2
var express = require("express");
var consolidate = require('consolidate');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();

app.set('views', 'views'); //Set the folder-name from where you serve the html page. ]
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);
app.use(express.static('./public')); //Set the folder from where you serve all static files like images, css, javascripts, libraries etc
app.use(bodyParser.urlencoded({ extended: true }));
var portNumber = 8000;

http.createServer(app).listen(portNumber, function(){
	console.log('Server listening at port '+ portNumber);
	routes.initialize(app);
});

// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
// 	publicPath: config.output.publicPath,
// 	hot: true,
// 	historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
// 	if (err) {
// 		console.log(err);
// 	}

//   	console.log('Listening at localhost:3000');
// });

/*


*/
