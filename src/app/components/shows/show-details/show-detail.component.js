var showDetail = {
  templateUrl:'./show-detail.html',
  controller:'ShowDetail',
  bindings:{
    detail:'<',
    rating:'<'
  }
}
angular
  .module('components.shows')
  .component('showDetail', showDetail)
