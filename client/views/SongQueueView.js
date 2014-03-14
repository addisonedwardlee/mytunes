// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', function(){
      this.render();
    }, this);

    this.collection.on('remove', function(){
        this.render();
      }, this);

    this.collection.on('move', function() {
      this.render();
    }, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append('<tr><td>Artist</td><td>Title</td><td>Move</td><td>song</td></tr>')
      .append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

    // return this.$el;
  }

});
