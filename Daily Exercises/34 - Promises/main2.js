var app = angular.module('app', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "app.html",
      controller: "AppCtrl"
    })
});

app.controller("AppCtrl", function ($scope, $q) {
  var defer = $q.defer();

  defer.promise
    .then(function (weapon) {
      alert("You can have my " + weapon)
      return "bow"
    })
    .then(function (weapon) {
      alert("And my " + weapon)
      return "axe"
    })
    .then(function (weapon) {
      alert("And my " + weapon)
    })

   // defer.resolve();

  $scope.model = {
    message: "Click me to resolve the promise!!"
  }

  $scope.doResolve = function () {
    defer.resolve("sword");
  }

});

app.directive("doClick",function () {
  return {
    transclude: true,
    scope: {
      target: "&"
    },
    template: '<div class="button" ng-click="target()" ng-transclude></div>'
  }
})

