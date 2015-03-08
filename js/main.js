var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song
});

var songs = new Songs();

songs.add(new Song({ title: "Song 1", genre: "Jazz", downloads: 110 }), { at: 0 });

songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

// var lastSong = songs.pop();

var jazzSongs = songs.where({ genre: "Jazz"});

var firstJazzSong = songs.findWhere({ genre: "Jazz"});

console.log("Jazz Songs", jazzSongs);

console.log("First Jazz Song", firstJazzSong);

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs);

var topDownloads = songs.filter(function(song){
  return song.get("downloads") > 100;
});

console.log("Top Downloads", topDownloads);

songs.each(function(song){
  console.log(song)
});
