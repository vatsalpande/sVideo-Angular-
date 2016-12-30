function ShowCard() {
  var ctrl = this;
  ctrl.$onChanges = function onChanges(change) {
    if (change.show) {
      ctrl.show = angular.copy(ctrl.show);
    }
  }
}

angular
  .module('components.shows')
  .controller('ShowCard', ShowCard);
