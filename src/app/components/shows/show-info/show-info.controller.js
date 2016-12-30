function ShowInfo(ShowData, $state) {
  var ctrl = this;
  ctrl.$onInit = function onInit() {
      const imdbId = $state.params.id;
      ShowData.getRatings(imdbId).then((response) => {
        ctrl.rating = response.data.imdbRating;
    }).catch((error) => console.error('axios error', error))
  }
}
angular
  .module('components.shows')
  .controller('ShowInfo', ShowInfo);
