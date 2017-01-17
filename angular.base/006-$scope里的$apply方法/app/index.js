/**
 * Created by zhaoky on 2015/12/29.
 */
var firstController = function ($scope) {
	$scope.date = new Date();
	console.log($scope);
/*	setInterval(function(){
		//������Ȼ�䵫û�д�������
		$scope.date = new Date();
	},1000);*/
	setInterval(function(){
		$scope.$apply(function(){
			//�ֶ���������
			$scope.date=new Date();
		});
	},1000);

	//��ng-��ɺ��Զ�����һ������
}