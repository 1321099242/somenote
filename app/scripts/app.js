'use strict';

/**
 * @ngdoc overview
 * @name somenoteApp
 * @description
 * # somenoteApp
 *
 * Main module of the application.
 */

angular.module("somenoteApp",["ui.router","ngCookies"]).constant("server","http://www.somenote.cn:1510").config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
		
			$stateProvider.state("dl",{	
				url:"/dl",
				templateUrl:"views/dl.html",    			
				controller:"dengl"
				})
			.state("zc",{
				url:"/zc",
				templateUrl:"views/zc.html",    			
				controller:"zhuc"
				})
			.state("zongti",{
				url:"/zongti",
				templateUrl:"views/zongti.html",    			
				controller:"zongti"
				})
			.state("tianjia",{
				url:"/tianjia",
				templateUrl:"views/tianjia.html",    			
				controller:"tianjia"
				})
			.state("xiangqing",{
				url:"/xiangqing?id&title&content",
				templateUrl:"views/xiangqing.html",    			
				controller:"xiangqing"
				})
			
				$urlRouterProvider.when('','/zongti')	
			}])