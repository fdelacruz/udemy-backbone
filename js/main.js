var Song = Backbone.Model.extend({
  defaults: {
    genre: "Jazz"
  }
});

var song = new Song({
  artist: "Miles Davis",
  publishYear: 1959
});

song.set("title", "Blue in Green");

var title = song.get("title");

var hasTitle = song.has("title");

song.unset("title");

song.clear();
