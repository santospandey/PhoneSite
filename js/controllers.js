var phonecat = angular.module('phonecatApp', []);

phonecat.controller('PhoneListCtrl', function($scope, $http){
  $http.get('phones/phones.json').success(function(data){
    $scope.phones = data;
  });  
});
