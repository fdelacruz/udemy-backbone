var TodoItem = Backbone.Model.extend({
  defaults: {
    isCompleted: false
  },

  url: 'fakeUrl',

  validate: function(attrs) {
    if (!attrs.description) 
      return 'Description is required.';
  },

  toggle: function() {
    this.set('isCompleted', !this.get('isCompleted'));
  }
});
