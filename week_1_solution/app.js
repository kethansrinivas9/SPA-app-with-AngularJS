(
  function () {
    'use strict';

    angular.module('Assignment1', []).controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
      $scope.inputText = "";
      $scope.message = "";

      $scope.checkIfTooMuch = function () {
          var input = $scope.inputText;
          var textArray = input.split(',');

          if (textArray.length == 1 && textArray[0] == ""){
            $scope.message = "Please enter data first";
          } else if (textArray.length <= 3){
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
          console.log(textArray)
        };
      };
  }
)();
