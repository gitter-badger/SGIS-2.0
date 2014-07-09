'use strict';

/**
 * @ngdoc function
 * @name socialjusticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the socialjusticeApp
 */
angular.module('socialjusticeApp')
  .controller('MainCtrl',function ($scope,$http,$location,$window,dataSource, dataFeed) {

    $scope.$location = $location;
    var google = window.google;
    $scope.loggedIn=false;
    $scope.sources = dataSource.query();
    $scope.data = {};

    $scope.onSelect = function(dataSourceId) {
        if($scope.data[dataSourceId] !== undefined) {
            console.log('1');
            $scope.data[dataSourceId] = undefined;
        } else {
            console.log('2');
            $scope.data[dataSourceId] = dataFeed.query({'dataSourceId':dataSourceId});
        }
    };
        $scope.result = '';
        $scope.options = null;
        $scope.details = '';
        $scope.newMark={};
    // Logout function
    $scope.logout=function(){
        $scope.loggedIn=false;
        console.log('Logging out');
        //delete $window.sessionStorage.token;
        $location.path('/login');
    };
    // ConvertCoords will help in converting googlePlaces API variables into variables so that a marker on search button can be drawn
    $scope.convertCoords= function(){
        $scope.newMark.location={
            latitude: $scope.details.geometry.location.k,
            longitude: $scope.details.geometry.location.A
        };
        $scope.map.center.latitude=$scope.newMark.location.latitude;
        $scope.map.center.longitude=$scope.newMark.location.longitude;
        $scope.map.zoom=12;
    };
    //Provides with the default settings of the map
    $scope.map = {
    	center: {
    	  	latitude: 42.678681,
    	  	longitude: -73.741265
    	},
	    zoom: 9,
	    options: {
    		streetViewControl: true,
    		panControl: true,
    		panControlOptions: {
    			position: google.maps.ControlPosition.TOP_RIGHT
    	},
		zoomControl: true,
		zoomControlOptions: {
				style: google.maps.ZoomControlStyle.LARGE,
				position: google.maps.ControlPosition.RIGHT_TOP
		},
		maxZoom: 20,
		minZoom: 3
	    },
	   dragging: true
    };
    //Function to close marker info window by giving close button
    var markerToClose = null;
    $scope.onClicked = function (marker) {
            if (markerToClose) {
              markerToClose.showWindow = false;
            }
        markerToClose = marker; // for next go around
        marker.showWindow = true;
        $scope.$apply();
    };
  });
