var Clickers = new Meteor.Collection('clickers');

if (Meteor.isClient) {
  
  Template.hello.greeting = function () {
    return "Welcome to my_cool_app.";
  };
  
  Template.record.clickers = function () {
  	return Clickers.find({}, {sort: {time: -1, name: 1}});
  };
  
  Template.hello.events({
    'click input.click' : function () {
      // template data, if any, is available in 'this'
	  Clickers.insert({name: document.getElementById("name").value || Session.get("name") || "Anonymous", time: new Date().getTime()});
	  }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
