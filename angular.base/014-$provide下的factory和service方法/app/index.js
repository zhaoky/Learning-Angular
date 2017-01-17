/**
 * Created by zhaoky on 2015/12/31.
 */
var app = angular.module('myApp',[],function($provide){
	//自定义工厂  只能return
	$provide.factory("factory",function(){
		this.b = "bb";
		//return [1,2,3,4,5];
	});
	//自定义服务   实例化
	$provide.service("service",function(){
		return [1,2,3,4,5];
	});
	//自定义服务2
	$provide.service("service2",function(){
		this.a = "aa";
		console.log(22222);
	})
});
//直接在module有对应的方法：
//app.factory("factory",function(){
//	return [1,2,3,4,5];
//});
//app.service("service",function(){
//	return [1,2,3,4,5];
//});

app.controller("firstController",function($scope,factory,service,service2){
	$scope.name= "zky";
	console.log(factory);
	console.log(service);
	console.log(service2);
});

/*
function firstController($scope){
	$scope.name= "zky";
}
*/
