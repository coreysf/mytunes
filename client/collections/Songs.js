// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

   initialize: function() {
    debugger
    this.queue = 
    this.on("enqueue", function(song){
      debugger;
      this.queue.enqueue(song)}, this);
  }

});