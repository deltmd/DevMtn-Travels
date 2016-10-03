angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, $stateParams, mainSrv){
  $scope.booked = mainSrv.getId($stateParams.id, mainSrv.travelInfo)
});
