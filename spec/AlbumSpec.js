describe('Album', function() {
  var album;

  beforeEach(function() {
    album = new Album();
  });

  it('url should be /api/songs', function() {
    expect(album.url).toEqual('/api/songs');
  });

  describe('getPopularSong', function() {
    it('should return undefined if the collection is empty.', function() {
      expect(album.getPopularSong()).toBeUndefined();
    });

    it('should return the song with the highest number of plays if the collection is not empty.', function() {
      var song1 = new Song({ title: 'Blue in Green', numberOfPlays: 10 });
      var song2 = new Song({ title: 'So What', numberOfPlays: 5 });

      album.add([song1, song2]);

      expect(album.getPopularSong()).toEqual(song1);
    });
  });
});
