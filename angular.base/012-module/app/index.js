/**
 * Created by zhaoky on 2015/12/31.
 */
angular.module('myApp',[
	'myApp1'
])
	.controller(
	"firstController",[
		"$scope",
			"ser",
			"v",
		function($scope,ser,v){
		$scope.name= "zky";
			console.log(ser.aa);
			console.log(v);
		}]
);

angular.module("myApp1",[])
	.filter("filt",function(){
		return function(obj){
			console.log(obj);
			return obj+"111";
		}
	})
	.directive("dd",function(){
		return {
			restrict: "E",
			template: "<div>哼！</div>",
			//templateUrl : "xxx",
			replace: true,
			compile: function () {   //按优先级排序之后，指令编译的第二阶段
			},
			link: function () {

			}
		}
	})
	.service("ser",function(){
		this.aa = "aaa";
	})
	.value("v","耶耶耶");
/*
function firstController($scope){
	$scope.name= "zky";
}
*/
