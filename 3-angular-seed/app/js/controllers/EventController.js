'use strict';

eventsApp.controller('EventController', 
	function EventController ($scope) {

		$scope.buttonDisabled = true;

		$scope.sortOrder = "name";

		$scope.event = {
			name: 'Angular Bootcamp',
			date: 1399945854277,
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountainview',
				state: 'CA'
			},
			imageURL: 'http://pascalprecht.github.io/slides/angularjs-insights/img/angularjs-logo.png',
			sessions:[
				{
					name: "Session of all sessions",
					creatorName: "Fangio Bertolli",
					duration: 0.5,
					level: "Introductory",
					abstract: "Nunc libero nibh, suscipit eu mollis nec, porttitor sit amet eros. Duis ac porta eros. Quisque sit amet ipsum sit amet augue commodo auctor.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
					upVoteCount: 0
				},
				{
					name: "As good as a session can get I feel sure",
					creatorName: "Fangio Bertolli",
					duration: 1,
					level: "Intermediate",
					abstract: "Nulla non nisl ut tellus dignissim dapibus. Sed in urna ut dui interdum rutrum. Praesent quis turpis id tellus blandit blandit porta quis libero. Vivamus fermentum elementum orci, vel suscipit leo ultricies id. Donec fermentum nulla ornare risus auctor, ut mattis lacus ornare.",
					upVoteCount: 0
				},
				{
					name: "This session sucks a bit but you'd now have a few buddies",
					creatorName: "Fangio Bertolli",
					duration: 3,
					level: "Advanced",
					abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis massa dui, eu egestas tellus bibendum quis. Sed eu nisl erat.",
					upVoteCount: 0
				}
			]
		};

		$scope.upVoteSession = function(session){
			session.upVoteCount++
		};

		$scope.downVoteSession = function(session){
			session.upVoteCount--;
		};

	}
);