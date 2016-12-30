var header = {
  templateUrl:'./app-header.html',
  bindings:{
    issearchavailable:'<',
    showbacklink:'<',
    onSearch:'&',
  },
  controller:'AppHeader'
}
angular
  .module('common')
  .component('appHeader', header)
