
function RosterCtrl($scope){
	$scope.rosterName = 'Mother of George';

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

}