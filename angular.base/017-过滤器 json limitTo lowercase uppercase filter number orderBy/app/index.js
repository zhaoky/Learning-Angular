/**
 * Created by zhaoky on 2015/1/5.
 */
	angular.module("myApp",[],function(){})
		.factory("data",function(){
			return{
				message: "hello!",
				city:[
					{
						name:"上海",
						py:"shanghai"
					},
					{
						name:"北京",
						py:"beijing"
					},
					{
						name:"四川",
						py:"sichuan"
					}
				]
			}
		})
		.controller("firstController",["$scope","data","$filter",function($scope,data,$filter){
			$scope.today = new  Date;
			$scope.data = data;
			//过滤器
			var number = $filter('number')(3000);
			//console.log($filter('number'),number);

			var json =  $filter('json')($scope.data);
			//console.log(json,$scope.data);

			$scope.checkName = function(obj){
				console.log(obj);
				if(obj.py.indexOf('h')=== -1){
					return false;
				}
				return true;
			}
		}]);