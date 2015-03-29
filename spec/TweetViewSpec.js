describe('TweetView', function() {
  var view;
  var model;

  beforeEach(function() {
    model = new Tweet();
    view = new TweetView({ model: model });
    view.render();
  });

  it('tagName should be li.', function() {
    expect(view.tagName).toEqual('li');
  });

  it('className should be tweet.', function() {
    expect(view.className).toEqual('tweet');
  });

  it('should refresh when model state changes.', function() {
    model.set('body', 'UPDATED');

    expect(view.$el).toContainText('UPDATED');
  });

  describe('when clicking delete', function() {
    it('should display a confirmation box.', function() {
      spyOn(window, 'confirm');

      view.$el.find('#delete').click();

      expect(window.confirm).toHaveBeenCalled();
    });

    it('should destroy the model if the user confirms.', function() {
      spyOn(window, 'confirm').and.returnValue(true);

      spyOn(model, 'destroy');

      view.$el.find('#delete').click();

      expect(model.destroy).toHaveBeenCalled();
    });
  });

  describe('when clicking expand', function() {
    it('should load the details if successful.', function() {
      spyOn(model, 'fetch').and.callFake(function(options) {
        var tweet = {
          retweets: 10,
          favorites: 5
        };

        model.set(tweet);

        options.success();
      });

      view.$el.find('#expand').click();

      expect(view.$el.find('.details')).toBeDefined();
      expect(view.$el.find('.details')).toContainText('10 retweets');
    });
  });



});
