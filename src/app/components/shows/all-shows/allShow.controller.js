function AllShow (ShowData) {
  var ctrl = this;

  ctrl.$onInit = function onInit() {
    ctrl.allShows = ShowData.allShows();
    ctrl.shows = ctrl.allShows.shows || {}
  }


  ctrl.filterShows = function filterShows($event) {
    const filterText = $event.searchText || undefined;
    if (!filterText) {
      ctrl.shows = ctrl.allShows.shows;
    }
    var filteredShows = ctrl.allShows.shows.filter((show)=>{
        return show.title.toUpperCase().includes(filterText.toUpperCase());
    });
    ctrl.shows = filteredShows;
  }
}

angular
  .module('components.shows')
  .controller('AllShow', AllShow);
