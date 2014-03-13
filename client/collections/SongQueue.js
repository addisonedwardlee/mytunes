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
    this.on('dequeue', function(){
      this.remove(xx);
    });
  },

  playFirst: function(){
    this.first().play();
  }



});
