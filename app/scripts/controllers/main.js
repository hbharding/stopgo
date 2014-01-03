'use strict';

angular.module('stopgoApp')
  .controller('MainCtrl', function ($scope, $http) {
   
    $scope.images = [];

    $scope.getCamera = function() {
    	var video = document.querySelector("#videoElement");

		// check for getUserMedia support
		navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
		 
		if (navigator.getUserMedia) {       
		    // get webcam feed if available
		    navigator.getUserMedia({video: true}, handleVideo, videoError);
		}
		 
		function handleVideo(stream) {
		    // if found attach feed to video element
		    video.src = window.URL.createObjectURL(stream);
		}
		 
		function videoError(e) {
		    // no webcam found - do something
		}
    };

    $scope.takePhoto = function() {
    	var v = document.getElementById('videoElement'),
	    	canvas = document.getElementById('canvas'),
	    	context = canvas.getContext('2d'),
	    	w = canvas.width,
	    	h = canvas.height;

    	if(v.paused || v.ended) return false;
    	context.drawImage(v,0,0,w,h); // draw video feed to canvas
    	var uri = canvas.toDataURL("image/png"); // convert canvas to data URI

    	$scope.images.unshift(uri);

    	$http.post('api/todos', $scope.images[0])
    		.success(function(data) {

    		})
    		.error(function(data) {
				console.log('Error: ' + data);
			});
    };

  });

angular.module('stopgoApp')
  .controller('animateCtrl', function ($scope) {


  });