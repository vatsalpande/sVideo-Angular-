function ShowDetail($sce) {
    var ctrl = this;
    ctrl.$onChanges = function onChanges(changes) {
        if(changes.detail) {
          ctrl.detail = angular.copy(ctrl.detail);
        }
    }
    ctrl.$onInit = function onInit() {
      ctrl.youTubeUrl = $sce.trustAsResourceUrl(`https://www.youtube-nocookie.com/embed/${ctrl.detail.trailer}?rel=0&amp;controls=0&amp;showinfo=0`);
    }
}

angular
  .module('components.shows')
  .controller('ShowDetail', ShowDetail)
