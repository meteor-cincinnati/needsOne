Template.newGames.helpers({
  venues: function() {
    return Venues.find();
  }
});

Template.newGames.events({
  "submit form": function(event, template) {
    event.preventDefault();
    data = SimpleForm.processForm(event.target);
    Games.insert(data, function(err, res) {
      if (err) {
        console.log('Oops, crap broke');
      } else {
        Router.go('/');
      }
    });
  }
});
