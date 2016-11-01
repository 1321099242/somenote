angular.module('somenoteApp')
.controller("dengl",['$scope','$http','server','$state','$cookies',function ($scope,$http,server,$state,$cookies){
	
	var al=$cookies.get('username')
	$scope.updata={username:al}
	
	$scope.fn=function(){
		if($scope.check==true){
			$http({
				url:server+"/users/login",
				method:"POST",
				data:$scope.updata
			}).success(function(e){
				debugger     //登录成功
				var adate = new Date();
		        adate.setDate(adate.getDate() + 7);
		        // Setting a cookie
		        $cookies.put('username',$scope.updata.username,{'expires': adate});
		        $cookies.put('password',$scope.updata.password,{'expires': adate});
				$cookies.put("uid",e.uid,{"expires":adate});
				
				$state.go("zongti")
				
			}).error(function(){
				alert("用户名或密码错误")
			})
		}else{
			$http({
				url:server+"/users/login",
				method:"POST",
				data:$scope.updata
			}).success(function(e){
				debugger     //登录成功
				$state.go("zongti")
				
			}).error(function(){
				alert("用户名或密码错误")
			})
		}
	}
}])
