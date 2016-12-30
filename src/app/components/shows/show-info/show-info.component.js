var showInfo = {
  templateUrl:'./showInfo.html',
  bindings:{
    detail:'<'
  },
  controller:'ShowInfo'
}

angular
  .module('components.shows')
  .component('showInfo', showInfo)
  .config(function($stateProvider) {
    $stateProvider.state('showInfo',{
      url:'/show-detail/:id',
      component:'showInfo',
      resolve:{
          detail:function(ShowData, $transition$) {
            var params = $transition$.params();
            if (!params) {
              return;
            }
            return ShowData.getShowById(params.id);
          }
      }
    })
  })
