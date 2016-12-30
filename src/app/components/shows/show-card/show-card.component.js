var showCard = {
  templateUrl:'./showCard.html',
  bindings:{
    show:'<',
  },
  controller: 'ShowCard'
}
angular
  .module('components.shows')
  .component('showCard', showCard);
