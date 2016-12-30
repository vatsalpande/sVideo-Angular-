function SearchShow() {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    ctrl.data = {
      searchText:''
    }
  }

  ctrl.$onChanges = function onChange(changes) {
    if (changes.data) {
      ctrl.data = angular.copy(ctrl.data);
    }
  }

  ctrl.$postLink = function postLink() {
    if (ctrl.data.searchText) {
      ctrl.searchShow();
    }
  }
  ctrl.searchShow = function searchShow() {
    ctrl.onSearch({
      $event:{
         searchText: ctrl.data.searchText
      }
     });
  }
}

angular
  .module('components.shows')
  .controller('SearchShow', SearchShow);
