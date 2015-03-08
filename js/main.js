var SongView = Backbone.View.extend({

  tagName: "span",

  className: "song",
  
  id: "1234",
  
  attributes: {
    "data-genre": "Jazz"
  },

  render: function() {
    this.$el.html("Hello World");

    return this;
  }
});

// Simple way to render a view
// var songView = new SongView({ el: "#container"}); 
// songView.render();

// Popular way..Since render returns "this", we can do chaining
var songView = new SongView();
$("#container").html(songView.render().$el);
