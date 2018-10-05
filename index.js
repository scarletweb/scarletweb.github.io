var randAPIApp = angular.module('randAPIApp', []);
//Angular stuff go-to thing
randAPIApp.controller('RandAPIController', function
RandAPIController ($scope) {
  $scope.getQuote = function () {
    //Use AJAX to call the functions.php
    $.ajax({
      url:'functions.php',
      complete: function (response) {
        var json = JSON.parse(response.responseText); //parse the response into a JSON object
        console.log(json); //show the object in the console
        $scope.author = json.author; //set the author
        $scope.body = json.body; //set the body
        $scope.$apply(); //apply the scope
      },
      error: function () { //Havn't seen what this does 'cause everything works ;)
        console.log("error occured obviously ...");
      }
    });
  }
});
