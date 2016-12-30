var searchShow = {
  templateUrl:'./search-show.html',
  bindings:{
    onSearch:'&',
  },
  controller:'SearchShow'
}

angular
  .module('components.shows')
  .component('searchShow', searchShow);
