var app = angular.module('rosterApp', []);



//	*	*	*	*	*	*	*	*	*	*	*	*	*	Controllers	*	*	*	*	*	*	*	*	*	*	*	*	*	


app.controller('RosterCtrl', function($scope){

	$scope.rosterName = {
    name : "Name your team",
    editing : true,
    isEditing : function(){
      return this.editing;
    },
    edit : function(){
      this.editing = true;
    },
    save : function(){
      this.editing = false;
    }
  };

	$scope.roster = []; 

	$scope.noRoster = function(){return !$scope.roster.length;};

	$scope.addPlayer = function(){

		$scope.roster.push({
			name : $scope.newPlayer, 
			position :'', 
			number : null, 
			email : '',
      editing : true, 
			getPosition : function(){
				return this.position;
			},
			getNumber : function(){
				return this.number;
			},
			getEmail : function(){
				return this.email;
			},
      edit : function(){
        this.editing = true;
      },
      save : function(){
        this.editing = false;
      },
      isEditing : function(){
        return this.editing;
      }

		});

		$scope.newPlayer.text = '';
	}
});



//	*	*	*	*	*	*	*	*	*	*	*	*	*	Directives	*	*	*	*	*	*	*	*	*	*	*	*	*	


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

app.directive('hideonhoverparent',
   function() {
      return {
         link : function(scope, element, attrs) {
            element.parent().bind('mouseenter', function() {
                element.hide();
            });
            element.parent().bind('mouseleave', function() {
                 element.show();
            });
       }
   };
});
