angular.module('somenoteApp')
.controller("zongti",['$scope','$http','server','$state','$cookies',function ($scope,$http,server,$state,$cookies) {
	
	var uid=$cookies.get("uid")
	var num=0;
	var num2 = 0;
	$http({
      url:'http://www.somenote.cn:1510/item',
      method:'GET',
      params:{"$skip":num,"$limit":7,"uid":uid}
    }).success(function(e){
    	//console.log(e)
    	$scope.data=e
    	$scope.liu = num2
    }) 
	$scope.addnews=function(){
		$state.go("tianjia")
	}
	
	$scope.next=function(){ //分页
      num+=7;
      $http({
        url:'http://www.somenote.cn:1510/item',
        method:"GET",
        params:{"$skip":num,"$limit":7,"uid":uid}
      }).success(function(e){
      	if(e!=""){	
      		num2 ++;
      		$scope.data=e
      		$scope.liu = num2
      	}else{
      		alert('已经是最后一页了');
      		num-=7
      	}
        
      })
    }
    $scope.qian=function(){
    	if(num<=0){
    		alert('已经是第一页了')
    		return false;
    	}else{
    		num2--;
    		num-=7;
			$http({
		    url:'http://www.somenote.cn:1510/item',
		method:"GET",
		params:{"$skip":num,"$limit":7,"uid":uid}
		
			}).success(function(e){
		    $scope.data=e
		    $scope.liu = num2
			})
		}
    }


	
	
	$scope.del=function(e){						//删除
		$http({
			//后台
			url:'http://www.somenote.cn:1510/item'+e.id,
			method:'delete'
		}).success(function(){
			$scope.data.splice($scope.data.indexOf(e),1)
		})
	
	}
	
	$scope.tuichu=function(){             //退出登录
	    $cookies.remove("username")
	    $cookies.remove("password")
	    
	    $state.go("dl");
	}
	
}])	
