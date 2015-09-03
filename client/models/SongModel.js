// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // enqueue: function(song) {
  //   // Triggering an event here will also trigger the event on the collection
  //   this.trigger('enqueue', song);//, this);
  // },
  enqueue: function() {
    // Triggering an event here will also trigger the event on AppModel
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // Triggering an event here will also trigger the event on the AppModel
    this.trigger('dequeue');//, this);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the AppModel
    this.trigger('play', this);
  },

  removeFromQueue: function(){
    // Triggering an event here will also trigger the event on the AppModel
    this.trigger('removeFromQueue', this);
  }

});
