/**
 * Created by zhaoky on 2015/12/30.
 */
var firstController = function ($scope) {
	$scope.cart = [
		{
			id:1000,
			name:"iphone",
			quantity:1,
			price:5288
		},
		{
			id:2000,
			name:"ipad",
			quantity:1,
			price:3288
		},
		{
			id:3000,
			name:"imac",
			quantity:1,
			price:12888
		},
		{
			id:4000,
			name:"ipod",
			quantity:1,
			price:1288
		}
	];
/*	$scope.totalNum = 0;
	$scope.totalPrice = 0;
	angular.forEach($scope.cart,function(i){
		$scope.totalNum+= i.quantity;
		$scope.totalPrice+= i.quantity* i.price;
		console.log(1234);
	});*/
	//计算总数量
	$scope.totalNum = function(){
		var totalNum = 0;
		angular.forEach($scope.cart,function(i){
			totalNum+= i.quantity;
		});
		return totalNum;
	};
	//计算总价格
	$scope.totalPrice = function(){
		var totalPrice = 0;
		angular.forEach($scope.cart,function(i){
			totalPrice+= i.quantity* i.price;
		});
		return totalPrice;
	};
	//减一项
	$scope.reduce = function(id){
		angular.forEach($scope.cart,function(i){
			if(i.id == id){
				if(i.quantity>1){
					i.quantity--;
				}else{
					if(confirm("是否删除该商品？")){
						$scope.remove(id);
					}
				}

			}
		});
	};
	//加一项
	$scope.add = function(id){
		angular.forEach($scope.cart,function(i){
			if(i.id == id){
				i.quantity++;
			}
		});
	};
	//移除一项
	$scope.remove = function(id){
		angular.forEach($scope.cart,function(o,i){
			if(o.id == id){
				if(confirm("真的要删除吗?")){
					$scope.cart.splice(i,1);
				}
			}
		});
		//通过ng-触发的函数最后都要进行一次脏检查
	};
	$scope.$watch("cart",function(newV,oldV){
		console.log(newV,oldV);
		angular.forEach(newV,function(o,i){
			if(o.quantity<1){
				if(confirm("是否删除该商品？")){
					$scope.cart.splice(i,1);
				}else{
					o.quantity =oldV[i].quantity;
				}
			}
		});
	},true);
	//清空购物车
	$scope.removeAll = function(){
		if(confirm("是否清空购物车？")){
			$scope.cart = [];
		}
	}
};