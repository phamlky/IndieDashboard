var app = angular.module('app', ['ngResource', 'ngRoute', 'bnx.module.facebook']);
app.config(function ($routeProvider, $locationProvider) {

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

	$routeProvider
		.when('/Panel/', { templateUrl: '/static/html/app.html', controller: 'AppController' })
		.when('/Panel/Stat', { templateUrl: '/static/html/app.html', controller: 'AppController' })
		.when('/Panel/Stat/Create', { templateUrl: '/static/html/appCreate.html', controller: 'AppCreateController' })
		.when('/Panel/Stat/Edit/:appId', { templateUrl: '/static/html/appEdit.html', controller: 'AppEditController' })
		.when('/Panel/Adv', { templateUrl: '/static/html/adv.html', controller: 'AdvController'})
		.when('/Panel/Adv/Create', {templateUrl: '/static/html/advCreate.html', controller: 'AdvCreateController'})
		.when('/Panel/Adv/Edit/:advId', { templateUrl: '/static/html/advEdit.html', controller: 'AdvEditController' })
		.when('/Panel/Update', { templateUrl: '/static/html/update.html', controller: 'UpdateController'})
		.when('/Panel/Update/Create', {templateUrl: '/static/html/updateCreate.html', controller: 'UpdateCreateController'})
		.when('/Panel/Score', { templateUrl: '/static/html/score.html', controller: 'ScoreController'})
		.when('/Panel/Score/Create', {templateUrl: '/static/html/scoreCreate.html', controller: 'ScoreCreateController'})
		.when('/Panel/Social/Facebook', {templateUrl: '/static/html/facebook.html', controller: 'FacebookController'})
		.when('/Panel/Social/Facebook/Create', {templateUrl: '/static/html/facebookCreate.html', controller: 'FacebookCreateController'})
		.when('/Panel/Social/Facebook/Edit/:fbId', {templateUrl: '/static/html/facebookEdit.html', controller: 'FacebookEditController'})
		.when('/Panel/Social/Facebook/Post/:fbId', {templateUrl: '/static/html/facebookPost.html', controller: 'FacebookPostController'})
		.when('/Logout', {templateUrl: '/static/html/app.html', controller: 'LogoutController'})
		.otherwise({ redirectTo: '/Panel/Stat' });
});