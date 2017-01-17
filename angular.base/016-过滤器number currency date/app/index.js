/**
 * Created by zhaoky on 2015/1/5.
 */
	angular.module("myApp",[],function(){})
		.controller("firstController",["$scope",function($scope){
			$scope.today = new  Date;
		}]);