Games = new Mongo.Collection('games');

Games.helpers({
  players: function() {
    Meteor.users.find({_id: {$in: this.playerIds}});
  }
});

Games.before.insert(function(userId, doc) {
  doc.userId = userId;
});

Meteor.methods({
  joinGame: function(gameId) {
    Games.update(gameId, {$addToSet: {playerIds: this.userId}});
  }
});
