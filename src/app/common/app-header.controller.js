function AppHeader() {
  var ctrl = this;
  ctrl.searchShow = function searchShow($event) {
    console.info ('Inside app-header controller and the event is ', $event);
    ctrl.onSearch({
      $event
    });
  }
}

angular
  .module('common')
  .controller('AppHeader', AppHeader);
