angular.module('nodeApp',['ui.router'])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl:'views/home.html',
    controller:'mainCtrl'
  })

  $stateProvider
  .state('names',{
    url:'/names',
    templateUrl:'views/names.html',
    controller:'namesCtrl'
  })


  $urlRouterProvider
  .otherwise('/home')


})//end of config
