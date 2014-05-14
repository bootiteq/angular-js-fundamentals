'use strict';

/* Filters */
eventsApp.filter('durations', function(){
	return function(duration){
		switch(duration){
			case 0.5:
				return "Half an hour";
			case 1:
				return "One Hour";
			case 2:
				return "Two Hours";
			case 3:
				return "Half a day";
		}
	}
});