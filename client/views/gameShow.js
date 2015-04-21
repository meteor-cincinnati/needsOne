Template.gameShow.onCreated(function() {
  this.subscribe('players', Router.current().params._id)
});

Template.gameShow.helpers({
  game: function() {
    return Games.findOne({_id: Router.current().params._id});
  }
});

Template.gameShow.events({
  "click .addMe": function(event, template) {
    Meteor.call('joinGame', this._id);
  }
});
