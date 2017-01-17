/**
 * Created by zhaoky on 2015/12/31.
 */
angular.module("myApp",[],function(){})

		.controller("firstController",["$scope",function($scope){
			$scope.name="zky";
			$scope.books =["html","css","js","js","angular","react"];
			$scope.status = false;
			$scope.change = function(e){
				$scope.status = !$scope.status;
				console.log(e);
				//通过element转换成jq对象
				angular.element(e.target).html("嘿嘿"+$scope.status);
			};
			$scope.myStyle = {'color':'#eee','font-size':'24px'};
			$scope.src = "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png";
		}]);
