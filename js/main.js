var Song = Backbone.Model.extend({
  validate: function(attrs){
    if(!attrs.title)
      return "Title is required"
  }
});

var song = new Song();

song.isValid();

var lastError = song.validationError;
