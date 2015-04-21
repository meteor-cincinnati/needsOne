Meteor.publish('players', function(gameId) {
  game = Games.findOne({_id: gameId});
  return Meteor.users.find({_id: {$in: game.playerIds}}, {fields: {emails: 1}});
});
