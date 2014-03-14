// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.listenTo(this, 'add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }),
    this.on('ended', function() {
      this.shift();
      if(this.length) {
        this.playFirst();
      }
    }),
    // this.on('enqueue', function(song){
    //   console.log(this);
    //   this.add(song);
    // }),
    this.on('dequeue', function(song){
      if (this.first() === song  && this.length > 1){
        this.remove(song);
        this.playFirst();
      } else {
        this.remove(song);
      }
      if(this.length === 0){
        this.trigger('stop');
      }
    }),
    this.on('moveUp', function(song) {
      //if song is anyting but first song, move up
      if (this.first() !== song) {
        var songIndex = this.indexOf(song);
        var tempSongAttr = this.models[songIndex];
        this.models[songIndex] = this.models[songIndex - 1];
        this.models[songIndex - 1] = tempSongAttr;
        this.trigger('move');

        //if moved to top of queue, play
        if (songIndex === 1) {
          this.playFirst();
        }
      }
    }),

    this.on('moveDown', function(song) {
      //if song is anything but the last song, move down
      if (this.last() !== song) {
        var songIndex = this.indexOf(song);
        var tempSongAttr = this.models[songIndex];
        this.models[songIndex] = this.models[songIndex + 1];
        this.models[songIndex + 1] = tempSongAttr;
        this.trigger('move');

        //if moved first song, play new song
        if (songIndex === 0) {
          this.playFirst();
        }
      }
    });
  },

  playFirst: function(){
    this.first().play();
  }



});
