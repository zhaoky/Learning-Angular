/**
 * Created by zhaoky on 2015/12/31.
 */
		//module同样可以显示注入
var app = angular.module('myApp', [], [function () {
}]);

app.factory("xxx", function () {
	return {age: 23};
	console.log(window);
});
//隐示的依赖注入
app.controller("firstController", function ($scope, xxx) {
	console.log("firstController");
	console.log(xxx);
	xxx.name = 123;      //这里定义了服务 其他地方也就可以用了
	$scope.name = "zky";
});
//显示的依赖注入(推荐)
app.controller("secondController", ["$scope", "$filter", "xxx", function ($scope, $filter, xxx) {
	console.log("secondController");
	console.log(xxx);
	$scope.name = "qin";
	console.log(xxx.name);
	$scope.name = $filter("uppercase")($scope.name);
}]);
//如果这种全局的想显示 怎么办？
/*
 function controller($scope){
 $scope.sex = "nan";
 }*/
function controller(a) {
	a.sex = "nan";
}
 // inject :注入
controller.$inject =["$scope"];
