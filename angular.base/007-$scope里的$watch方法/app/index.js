/**
 * Created by zhaoky on 2015/12/29.
 */
var firstController = function ($scope) {
	$scope.name='';
	$scope.count= 0;
	$scope.data={
		name:"zky",
		count:'0'
	};
	//监听一个model 当一个model每次改变时，都会触发第2个函数
	$scope.$watch("name",function(newValue,oldValue){
		console.log(newValue,oldValue);
		++$scope.count;
		if($scope.count>30){
			$scope.name="已经大于30次了";
		}
	});
	//第三个参数为true可以监听引用类型的值的变化。
	$scope.$watch("data.name",function(newValue,oldValue){
		console.log(newValue,oldValue);
		console.log($scope);
		++$scope.data.count;
	},true)
};