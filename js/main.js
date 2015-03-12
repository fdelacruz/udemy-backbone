var Song = Backbone.Model.extend();

var SongView = Backbone.View.extend({

  render: function(){
    var template = _.template($("#songTemplate").html());
    // var html = template(this.model.toJSON());
    // this.$el.html(html);
    this.$el.html(template(this.model.toJSON()));

    return this;
  }
});

var song = new Song({ title: "Blue in Green", plays: 1100 });

var songView = new SongView({ el: "#container", model: song });
songView.render();
