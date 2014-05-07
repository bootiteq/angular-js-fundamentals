'use strict';

eventsApp.controller('EventController', 
	function EventController ($scope) {

		$scope.event = {
			name: 'Angular Bootcamp',
			date: '1/1/2012',
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
					duration: "2 hours",
					level: "Advanced",
					abstract: "Nunc libero nibh, suscipit eu mollis nec, porttitor sit amet eros. Duis ac porta eros. Quisque sit amet ipsum sit amet augue commodo auctor.  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
				},
				{
					name: "As good as a session can get I feel sure",
					creatorName: "Fangio Bertolli",
					duration: "1 hour",
					level: "Advanced",
					abstract: "Nulla non nisl ut tellus dignissim dapibus. Sed in urna ut dui interdum rutrum. Praesent quis turpis id tellus blandit blandit porta quis libero. Vivamus fermentum elementum orci, vel suscipit leo ultricies id. Donec fermentum nulla ornare risus auctor, ut mattis lacus ornare."
				},
				{
					name: "This session sucks a bit but you'd now have a few buddies",
					creatorName: "Fangio Bertolli",
					duration: "1 hour",
					level: "Advanced",
					abstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis massa dui, eu egestas tellus bibendum quis. Sed eu nisl erat."
				}
			]
		}

	}
);