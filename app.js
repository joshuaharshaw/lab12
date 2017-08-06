var app = angular.module("listApp", []);

app.controller("list-controller", function ($scope) {

	$scope.listItems = [];

	$scope.lists = 
	[
		{"title": "", "items":[]}, 
		{"title":"Hhe", "items":[]}
	]

	$scope.addItem = function (pendItem) {
		$scope.listItems.push(pendItem);
	};
});