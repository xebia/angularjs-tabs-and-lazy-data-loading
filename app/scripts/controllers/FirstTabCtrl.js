'use strict'

app.controller('FirstTabCtrl', ['$scope',
  function ($scope) {
    console.log('Loading FirstTabCtrl');
    $scope.title = 'First Tab';
  }
]);
