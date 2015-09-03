// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'ended': function() {
      //model points to song model
      this.model.dequeue();
    },
    'click': function(){
      //model points to song model
      debugger
      this.model.removeFromQueue();
      
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
