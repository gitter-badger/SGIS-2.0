'use strict';
// @LoginCtrl Controller for Login
// @Registering a new user is also handled in this controller file
angular.module('socialjusticeApp')
  .controller('LoginCtrl',function ($scope,$window,$location) {
  	
  	
  	$scope.credentials={};
  	$scope.newuser={};
  	$scope.login=function(credentials){
  		var data={username:$scope.credentials.username,
  			password:$scope.credentials.password};
  		// $http({method:'POST',
  		// 		url:'',
  		// 		data:data})
  		// .success(function(data,status,headers,config){
  		// 	$window.sessionStorage.token=data.token;
  		// 	$scope.$parent.loggedIn=true;
  		// 	$location.path('/');
  		// })
  		// .error(function(data,status,headers,config){
  		// 	delete $window.sessionStorage.token;
  		// })
  		if(data.username==='dara' && data.password==='123'){
  			$scope.$parent.loggedIn=true;
  			$location.path('/main');

  		}
  		else{
  			$location.path('/login');
  		}
  		console.log(data.username);
  		console.log(data.password);
  				
  	};
  	$scope.reset=function(){
  		$scope.$broadcast('show-errors-reset');
    	$scope.credentials = { username: '', password: '' };
  	};
  	$scope.register=function(newuser){
  		var registerData={
  			firstname : $scope.newuser.firstname,
  			lastname  : $scope.newuser.lastname,
  			username  : $scope.newuser.username,
  			password1 : $scope.newuser.password1,
  			password2 : $scope.newuser.password2,
  			typeuser  : $scope.newuser.typeuser
  		};
  		if(registerData.password1===registerData.password2){
  			window.alert('Your account have been registered');
  			$location.path('/login');
  		}
  		else
  		{
  			window.alert('Your credentials are wrong');
  			$location.path('/register');	
  		}
  		console.log(registerData.firstname);
  		
  	};
  });