angular.module('somenoteApp').controller("xiangqing",['$scope','$http','server','$state','$stateParams',function($scope,$http,server,$state,$stateParams) {
	
	$scope.obj = $stateParams;
//	console.log($scope.obj.id)

	$scope.bianOk=function(){
		

		$http({
			url:"http://www.somenote.cn:1510/item/"+$scope.obj.id,
			method:"PUT",
			data:$scope.obj
		}).success(function(e){
			
//			alert(1)
			$state.go("zongti")
			//$scope.data.push($scope.obj)
		})
	}
	
	$scope.fanhui = function(){
		history.back();  
	}


	
}])
