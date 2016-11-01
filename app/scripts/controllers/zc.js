angular.module('somenoteApp')
.controller("zhuc",['$scope','$http','server','$state',function ($scope,$http,server,$state) {
	$scope.fn1=function(){
		$http({
			url:server+"/users",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			//alert("注册成功")
			$state.go("dl")
			//debugger
		})
	}
}])	
