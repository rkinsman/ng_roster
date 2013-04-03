
function RosterCtrl($scope){
	$scope.rosterName = 'Mother of George';

	$scope.roster = []; 

	$scope.addPlayer = function(){
		$scope.roster.push({name:$scope.newPlayer, position:'', getPosition:function(){return this.position;}});
		$scope.newPlayer.text = '';
	}

}