Template.home.helpers({
  games: function() {
    return Games.find();
  },
  venues: function() {
    return Venues.find();
  }
});
