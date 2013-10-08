'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [])


app.config(function($routeProvider) {
	$routeProvider.when('/',
		{
			template:"<p>This is the partial for view {{ model.id }}.</p>",
			controller:"MyCtrl1",
			resolve: {
				app: function($location){
					console.log($location);
				}
			}
		}
	);
});

app.controller("MyCtrl1",function($scope) {
	$scope.model = {
		id: "1",
		message: "This is my controler 1"
	};
});

app.controller("MyCtrl2",function($scope) {
	$scope.model = {
		id: "2",
		message : "This is my controler 2"
	};
});