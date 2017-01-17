/**
 * Created by zhaoky on 2015/12/31.
 */
angular.module("myApp", [], ["$compileProvider", function ($compileProvider) {

		$compileProvider.directive("myDir", function () {
			return {
				restrict: "E",
				//template : "<div>hello!</div>",
				templateUrl: "other.html",
				replace: "true",
				compile: function () {
					console.log("myDir");
				}
			}
		});
		$compileProvider.directive("myDir2", function () {
			return {
				restrict: "E",
				//template : "<div>hello!</div>",
				templateUrl: "xxx",
				replace: "true",
				compile: function () {
					console.log("myDir2");
				}
			}
		});
		$compileProvider.directive("myDir3", function () {
			return {
				restrict: "E",
				template: "<div>新数据<span ng-transclude></span></div>",
				//templateUrl : "xxx",
				replace: "true",
				transclude: "true",
				compile: function () {
					console.log("myDir3");
				}
			}
		});
		$compileProvider.directive("myDir4", function () {
			return { //如果直接返回一个函数，即为postLink
				restrict: "A",
				template: "<div>{{name}}</div>",
				//templateUrl : "xxx",
				replace: "true",
				//priority : "1",
				compile: function (tElement, attrs, transclude) {
					//console.log("myDir4的compile");
					//console.log("tElement:",tElement); //该元素的jquery对象
					//console.log("attrs:",attrs); //当前元素的属性
					//console.log(transclude); //undefined
					//return function(){ //直接返回的只有一个函数的话，就是postlink，也是link，也可以返回一个对象。
					//	console.log("myDir4的compile的return");
					//}
					tElement.append(angular.element("<div>aaa</div>"));//改变复杂的DOM，必须在compile里面做。
					//以上就是编译阶段
					console.log("myDir4的编译阶段。。。");
					return {
						//preLink表示在编译阶段之后，指令连接到子元素之前运行
						pre: function prelink() {
							console.log("myDir4的prelink阶段。。。");
						},
						//postLink表示会在所有子元素指令都连接之后才运行
						post: function postlink(scope, iElement, iAttrs, controller) {   //他就是link
							iElement.on('click', function () {
								scope.$apply(function () {
									scope.name = "zky"; //并不会改变，没有脏检查
								});
							});
							console.log("myDir4的postlink阶段。。。");
						}
					}
				},
				link: function () {
					console.log("myDir4的link阶段。。。");
				}
			}
		});
		$compileProvider.directive("myDir5", function () {
			return {
				restrict: "A",
				//template : "<div>新数据2</div>",
				//templateUrl : "xxx",
				replace: "true",
				//priority : "10",
				//terminal : true,   //小于10的都不执行
				compile: function () {
					console.log("myDir5的编译阶段。。。");
					//return function(){
					//	console.log("myDir5的compile的return方法");
					//}
					return {
						//preLink表示在编译阶段之后，指令连接到子元素之前运行
						pre: function prelink() {
							console.log("myDir5的prelink阶段。。。");
						},
						//postLink表示会在所有子元素指令都连接之后才运行
						post: function postlink() {   //他就是link
							console.log("myDir5的postlink阶段。。。");
						}
					}
				}
				//link : function(){
				//	console.log("myDir5的link方法");
				//}
			}
		});
		$compileProvider.directive("myDir6", function () {
			return {
				restrict: "A", //指令编译的第一阶段
				template: "<div>新数据2</div>",
				//templateUrl : "xxx",
				replace: true,
				compile: function () {   //按优先级排序之后，指令编译的第二阶段
					console.log("myDir6");
				},
				link: function () {

				}
			}
		});
		$compileProvider.directive("bookList", function () {
			return {
				restrict: "E",
				controller: function ($scope) {
					$scope.books = [
						{
							name: "html"
						},
						{
							name: "css"
						},
						{
							name: "javascript"
						}
					];
					this.addBook = function () {
						$scope.$apply(function () {
							$scope.books.push({
								name: "angularJs"
							})
						});
					};
				},
				controllerAs: "bl",
				template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>', //必须有根节点包围
				replace: true,
				link: function (scope, iElement, iAttrs, bl) {
					console.log(123, iElement);
					//iElement.on("click",bl.addBook);   //如果只在button加入事件？
					//iElement.on("click",bl.addBook);
				}
			}
		});
		$compileProvider.directive("bookAdd", function () {
			return {
				restrict: "E",
				template: "<button type='button'>添加</button>",
				replace: true,
				require: "^bookList", //^在父元素找指令
				link: function (scope, iElement, iAttrs, bl) {
					iElement.on("click", bl.addBook);
				}
			}
		});
		$compileProvider.directive("personList", function () {
			return {
				restrict: "A",
				template: '<div><ul><li ng-repeat="per in perList">{{per.name}}</li></ul></div>',  //属于directive的作用域
				//template : '<div>{{city}}</div>',   //@
				replace: true,
				controller: function ($scope) {
					console.log(6, $scope);
					//&fff
					//$scope.perList = $scope.a();
					//=eee
					//$scope.perList = $scope.b;
					//$scope.b.push({name:"797"});
					//@zzz
					console.log(666, $scope.c);
					$scope.city = $scope.c;

				},
				//创建一个有继承链的独立作用域，他为子
				//scope : true  //为假是同一个作用域
				//当为对象的时候也会创建一个独立的作用域，能继承，但没有继承链，所以不渲染？
				scope: {
					//将父元素的perList封装成一个a函数
					//a:"&fff"
					//双向绑定 b = eee 属性对应的父作用域的表达式
					//b:"=eee"
					//使用简单数据类型的方法
					c: "@zzz"
				}
			}
		});
	}])

	.controller("controller", ["$scope", function ($scope) {
		$scope.name = "zky";
	}])
	.controller("controller2", ["$scope", function ($scope) {
		$scope.name = "qin";
	}])
	.controller("controller3", ["$scope", function ($scope) {
		$scope.name = "qin";
	}])
	.controller("controller4", ["$scope", function ($scope) {
		$scope.name = "qian";
	}])
	.controller("controller5", ["$scope", function ($scope) {
		console.log($scope);
	}])
	.controller("controller6", ["$scope", function ($scope) {
		console.log(6, $scope);
		$scope.perList = [
			{
				name: "zhaoky"
			},
			{
				name: "qinxq"
			},
			{
				name: "wuyz"
			}
		];
		$scope.city = "chengdu";
	}]);