var app = angular.module('droughtApp', []);

app.controller('precipitationController', function($scope){
  $scope.precipRegions = [
    {date: "2010/01/01", basinName: "NORTHERN GREAT BASIN", percentOfAverage: "110%"},
    {date: "2010/01/01", basinName: "EASTERN GREAT BASIN", percentOfAverage: "87%"},
    {date: "2010/01/01", basinName: "WESTERN GREAT BASIN", percentOfAverage: "30%"},
    {date: "2010/01/01", basinName: "SOUTHERN GREAT BASIN", percentOfAverage: "56%"}
  ];
});