var landing = {
  templateUrl:'./landing.html',
  controller: function() {
    var ctrl = this;
    ctrl.$onInit = function() {
      console.info('Inside $onInit');
      ctrl.appName = 'sVideo';
    }
  }
}

angular
  .module('components.landing')
  .component('landing', landing)
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('landing',{
      url:'/landing',
      component:'landing'
    });
    $urlRouterProvider.otherwise('/landing')



  });
