var app = angular.module('rosterApp', []);



//	***************
//	* Controllers *
//	***************

app.controller('RosterCtrl', function($scope){

	$scope.rosterName = 'Name your team';
	$scope.roster = []; 

	$scope.noRoster = function(){return !$scope.roster.length;};

	$scope.addPlayer = function(){
		$scope.roster.push({
			name : $scope.newPlayer, 
			position :'', 
			number : null, 
			email : '', 
			getPosition : function(){
				return this.position;
			},
			getNumber : function(){
				return this.number;
			},
			getEmail : function(){
				return this.email;
			}
		});

		$scope.newPlayer.text = '';
	}
});


//	**************
//	* Directives *
//	**************


//	from Christian Grobmeier
//	http://www.grobmeier.de/angular-js-the-show-on-mouseenter-hide-on-mouseleave-directive-31082012.html
app.directive('showonhoverparent',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.show();
            });
            element.parent().bind('mouseleave', function() {
                 element.hide();
            });
       }
   };
});