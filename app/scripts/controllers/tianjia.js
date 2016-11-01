angular.module('somenoteApp')
.controller("tianjia",['$scope','$http','server','$state','$cookies',function ($scope,$http,server,$state,$cookies) {
	var uid = $cookies.get("uid")
	$scope.obj={
		uid:uid
	}
	$scope.savenews=function(){
		$http({
			url:"http://www.somenote.cn:1510/item",
			method:"POST",
			data:$scope.obj
		}).success(function(e){
		//alert(1)
			$state.go("zongti")
			//$scope.data.push($scope.obj)
		})
	}
	
	$scope.back=function(){
		history.back();  
	}
}])