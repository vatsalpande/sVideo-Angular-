var searchShow = {
  templateUrl:'./allShows.html',
  controller:'AllShow'
}

angular
  .module('components.shows')
  .component('allShow', searchShow)
  .config(function($stateProvider) {
    $stateProvider.state('allShow', {
      url:'/shows',
      component:'allShow'
    })
  });
