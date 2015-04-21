Router.configure({
  layoutTemplate: 'base',
  loadingTemplate: 'loading'
});

Router.route('/', function() {
  this.render('home');
});

Router.route('/games/:_id', {
  name: 'game.show'
});

Router.route('/games/new', function() {
  this.render('newGames');
});
