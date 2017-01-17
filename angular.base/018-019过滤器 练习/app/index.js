/**
 * Created by zhaoky on 2015/1/5.
 */
	angular.module("myApp",[],function(){

	})
		.service('data',function(){
			return[
				{
					id: 1111,
					name: "iphone",
					price: 5288
				},
				{
					id: 2131,
					name: "ipad",
					price: 3288
				},
				{
					id: 3563,
					name: "imac",
					price: 13888
				},
				{
					id: 6785,
					name: "ipad mini",
					price: 2388
				},
				{
					id: 2754,
					name: "ipod",
					price: 1288
				}
			]
		})
		.controller("firstController",["$scope","data","$filter",function($scope,data,$filter){
			$scope.data = data;
			$scope.asc = true;
			$scope.change =function(x){
				$scope.asc =!$scope.asc;
				$scope.x = x;
			}
		}]);