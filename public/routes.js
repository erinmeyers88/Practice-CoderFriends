angular.module("codeFriends")
	.config(function ($stateProvider, $urlRouterProvider) {
		
		
		$stateProvider
			.state("login", {
				url: "/",
				templateUrl: "index.html",
				controller: "mainCtrl"
			})
		
			.state("home", {
				url: "/home",
				templateUrl: "templates/home.html",
				controller: "mainCtrl"
			})
			
			.state("friend", {
				url: "/friend/:github_username",
				templateUrl: "/templates/friend.html",
				controller: "mainCtrl"
			});
		
	});