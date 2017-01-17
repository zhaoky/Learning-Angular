angular
	.module("myApp", [])

	.factory("data", function () {
		return [
			{
				title: 'no1',
				content: "no1-content"
			},
			{
				title: 'no2',
				content: "no2-content"
			},
			{
				title: 'no3',
				content: "no3-content"
			}
		];
	})
	.controller("controller", ["$scope", "data", function ($scope, data) {
		$scope.data = data;
	}])
	.directive("cupGroup", function () {
		return {
			restrict: "E",
			replace: "true",
			template: '<div class="panel-group" ng-transclude></div>',
			transclude: true,
			//controllerAs:"cg",
			controller: function () {
				this.groups = [];
				this.closeOther = function (nowScope) {
					console.log(this.groups);
					angular.forEach(this.groups, function (i) {
						if(i !== nowScope){
							i.isOpen =false;
						}
					})
				}
			}
		}
	})
	.directive("cupItem", function () {
		return {
			restrict: "E",
			replace: "true",
			require: "^cupGroup",
			templateUrl: "other.html",
			scope: {      //自己的独立作用域，other.html
				heading: "@"    //这里@是@heading的省略形式；使用简单数据类型的方法
			},
			controller: function ($scope) {
				$scope.name = "qin"
			},
			transclude: true,
			link: function (scope, elm, attrs, bbb) {
				scope.isOpen = false;
				scope.change = function () {
					scope.isOpen = !scope.isOpen;
					bbb.closeOther(scope);
				};
				bbb.groups.push(scope);
			}
		}
	});