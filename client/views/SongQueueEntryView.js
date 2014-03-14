// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class=A>(<%= artist %>)</td><td class=A><%= title %></td><td class=up>&#8673</td><td class=down>&#8675</td>'),

  events: {
    'click .A': function(){
      this.model.dequeue();
    },
    'click .up': function(){
      this.model.moveUp();
    },
    'click .down': function(){
      this.model.moveDown();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
