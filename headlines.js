Posts = new Meteor.Collection('posts');
Posts.allow({
	insert: function(){return true;}
});

if (Meteor.isClient) {
  Template.post_create.events({
    'keypress input#headline': function (e) {
      if (e.which === 13) {
        Posts.insert({title: $('#headline').val()});
      }
    }    
  });
  
  Template.posts.all = function(){
  	return Posts.find();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  	Posts.insert({title: "Breaking news — afkadfjaksd"});
  });
}
