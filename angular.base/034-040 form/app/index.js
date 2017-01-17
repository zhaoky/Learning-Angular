angular.module("myApp", [], function () {

	})
	.directive('even',function(){
		return {
			require : "ngModel",
			link:function(scope,elm,attrs,ngModelController){
				console.log(ngModelController);
				ngModelController.$parsers.push(function(viewValue){
					console.log("viewValue:",viewValue);
					if(viewValue%2 ===0){
						ngModelController.$setValidity("even",true);
					}else{
						ngModelController.$setValidity("even",false);
					}
					return viewValue;
				});
				ngModelController.$formatters.push(function(modelValue){
					console.log("modelValue:",modelValue);

					return modelValue+10000;
				});
			}
		}
	})
	.directive('customTextArea',function(){
		return{
			restrict: "E",
			template:'<div contenteditable="true"></div>',
			replace:true,
			require:"ngModel",
			link:function(scope,elm,attrs,ngModelController){
				//view->model
				console.log(666,scope.data.textArea);
				elm.on("keyup",function(){
					scope.$apply(function(){
						ngModelController.$setViewValue(elm.html());
						console.log(888,scope.data.textArea);
					});
				});
				//model->view
				ngModelController.$render = function(){
					elm.html(ngModelController.$viewValue);
					console.log(797,ngModelController);
				}
			}
		}
	})
	.filter("cityFilter", function () {
		return function (obj, param) {
			var newCities = [];
			angular.forEach(obj, function (o) {
				if (o.parent == param) {
					newCities.push(o);
				}
			});
			return newCities;
		}
	})
	.controller("controller", ["$scope", function ($scope) {
		$scope.hobby = [
			{
				id: 1,
				name: "游泳"
			},
			{
				id: 2,
				name: "篮球"
			},
			{
				id: 3,
				name: "足球"
			}
		];
		$scope.data = {
			hobbies: [1, 2],
			zheng: 16
		};
		//$scope.data={};
		//先保留一份默认值
		$scope.orinData = angular.copy($scope.data);

		$scope.reset = function () {

			$scope.data = angular.copy($scope.orinData);
			initCity();
			console.log(!!$scope.data.zheng);
			$scope.myForm.$setPristine();
		};

		$scope.cities = [
			{
				name: "成都",
				id: 1,
				parent: 0
			},
			{
				name: "南充",
				id: 2,
				parent: 0
			},
			{
				name: "巴中",
				id: 3,
				parent: 0
			},
			{
				name: "双流",
				id: 4,
				parent: 1
			},
			{
				name: "华阳",
				id: 5,
				parent: 1
			},
			{
				name: "仪陇",
				id: 6,
				parent: 2
			},
			{
				name: "南部",
				id: 7,
				parent: 2
			},
			{
				name: "南江",
				id: 8,
				parent: 3
			},
			{
				name: "通江",
				id: 9,
				parent: 3
			},
			{
				name: "双流1",
				id: 100,
				parent: 4
			},
			{
				name: "双流2",
				id: 10,
				parent: 4
			},
			{
				name: "华阳1",
				id: 11,
				parent: 5
			},
			{
				name: "华阳2",
				id: 12,
				parent: 5
			},
			{
				name: "仪陇1",
				id: 13,
				parent: 6
			},
			{
				name: "仪陇2",
				id: 14,
				parent: 6
			},
			{
				name: "南部1",
				id: 15,
				parent: 7
			},
			{
				name: "南部2",
				id: 16,
				parent: 7
			},
			{
				name: "南江1",
				id: 17,
				parent: 8
			},
			{
				name: "南江2",
				id: 18,
				parent: 8
			},
			{
				name: "通江1",
				id: 19,
				parent: 9
			},
			{
				name: "通江2",
				id: 20,
				parent: 9
			}

		];
		$scope.toggle = function (id) {
			var index = -1;
			if ($scope.data.hobbies) {
				index = $scope.data.hobbies.indexOf(id);
			} else if (!$scope.data.hobbies) {
				$scope.data.hobbies = [];
			}
			if (index === -1) {
				$scope.data.hobbies.push(id);
			} else {
				$scope.data.hobbies.splice(index, 1);
			}
		};
		//让城市联动
		function initCity() {
			if (!!$scope.data.zheng) {
				angular.forEach($scope.cities, function (o) {
					if (o.id == $scope.data.zheng) {
						$scope.data.xian = o.parent;
						angular.forEach($scope.cities, function (i) {
							if (i.id == $scope.data.xian) {
								$scope.data.sheng = i.parent;
							}
						})
					}
				})

			}
		}

		initCity();

		//console.log($scope.data.zheng, $scope.data.xian, $scope.data.sheng);
		/*	this.findCityId = function(parent){
		 var parentId;
		 angular.forEach($scope.cities,function(city){
		 if(city.id === parent){
		 parentId = city.parent;
		 return;
		 }
		 });
		 return parentId;
		 };
		 if($scope.data.zheng !==undefined){
		 $scope.data.xian = this.findCityId($scope.data.zheng);
		 $scope.data.sheng =this.findCityId($scope.data.xian);
		 }*/
	}]);