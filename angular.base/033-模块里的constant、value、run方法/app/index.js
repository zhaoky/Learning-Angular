/**
 * Created by zhaoky on 2015/12/31.
 */
angular.module("myApp",[],["$provide",function($provide){
	console.log("**module启动");
	//$provide.factory
	//$provide.service
	//$provide.constant
	//$provide.value
}])
		.config(["KEY",function(KEY){
			console.log("**执行config");
			console.log("constant注入到config：",KEY);
			//console.log("value注入到config：",vension); //不能注入
		}])
		//可以注入任何方法
		.constant("KEY","xxxx")
		//只能注入controller..service..factory
		.value("vension","1.0.0")
		//在config之后，在controller等其他服务之前
		.run(function(){
			console.log("**执行run");
		})
		.factory("factory",function(){
		return [1,2,3,4,5];
		})
		.service("service",function(){
			return [1,2,3,4,5];
		})
		.controller("controller",["KEY","vension","factory","service",function(KEY,vension,factory,service){
			console.log("**执行controller");
			console.log("constant注入到controller：",KEY);
			console.log("value注入到controller：",vension);
			console.log("factory注入到controller：",factory);
			console.log("service注入到controller：",service);
}])
;
