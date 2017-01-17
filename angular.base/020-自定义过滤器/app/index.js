/**
 * Created by zhaoky on 2015/1/5.
 */
	//两种方法实现自定义filter
	angular.module("myApp",[],function($filterProvider,$provide,$controllerProvider){
			$provide.service("data",function(){
				return[
					{
						name : "赵柯宇",
						age : "24",
						city : "成都"
					},
					{
						name : "小倩",
						age : "22",
						city : "成都"
					}
				];
			});
			$filterProvider.register("filterAge",function(){
				return function(obj,param){
					console.log(obj,param);
					var newObj = [];
					angular.forEach(obj,function(o){
						if(o.age>23){
							newObj.push(o);
						}
					});
					return newObj;
				}
			});
			$controllerProvider.register("firstController",["$scope","data",function($scope,data){
				$scope.data = data;
			}]);
	});
/*		.filter("filterAge",function(){
			return function(obj){
				console.log(obj);
				var newObj = [];
				angular.forEach(obj,function(o){
					if(o.age>23){
						newObj.push(o);
					}
				});
				return newObj;
			}
		});*/
/*
		.service("data",function(){

		})
		.controller("firstController",["$scope","data","$filter",function($scope,data,$filter){


		}]);*/
