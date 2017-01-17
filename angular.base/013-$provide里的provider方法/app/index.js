/**
 * Created by zhaoky on 2015/12/31.
 */
var app = angular.module('myApp',[],function($provide){
			//自定义服务
	$provide.provider("service",function(){
		this.$get = function(){
			return {
				message:"赵柯宇"
			}
		}
	});
	$provide.provider("service2",function(){
		this.$get = function(){
			return {
				message:"赵柯宇2"
			}
		}
	});
});

app.controller("firstController",function(service,service2,$scope){
	$scope.name= "zky";
	console.log(service);
	console.log(service2);
});

/*
function firstController($scope){
	$scope.name= "zky";
}
*/
