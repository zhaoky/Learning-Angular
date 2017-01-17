/**
 * Created by zhaoky on 2016/1/5.
 */
var app = angular.module('myApp',[],function(){});
/*
//数据共享的第一种方法:通过$scope中的上一个或下一个兄弟找到，不推荐
app
	.controller("firstController",function($scope){
		//$scope.name="赵柯宇";   //基本类型不能时刻变化
		$scope.data ={      //引用类型可以变化
			name:"赵柯宇"
		}
})
	.controller("secondController",function($scope){
		$scope.data=$scope.$$prevSibling.data;
		console.log($scope);
});*/
//数据共享的第二种方法：通过$provide中的factory和service方法
app.factory("data",function(){
	return{
		message:"共享的数据"
	}
});
app
	.controller("firstController",function($scope,data){
		$scope.data = data;
	})
	.controller("secondController",function($scope,data){
		$scope.data = data;
		console.log(123,$scope.data);
	});
/*
function firstController($scope){
	$scope.name= "zky";
}
*/
