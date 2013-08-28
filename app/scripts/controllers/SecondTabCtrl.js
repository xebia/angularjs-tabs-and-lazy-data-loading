'use strict'

app.controller('SecondTabCtrl', ['$scope',
  function ($scope) {
    console.log('Loading SecondTabCtrl');
    $scope.title = 'Second Tab';
  }
]);
