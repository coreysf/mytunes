// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function() {
    this.queue = [];
    // this.on("enqueue", function(song){
    //   debugger;
    //   this.enqueue(song)}, this);
  },
  dequeue : function(){
    return queue.shift();
  },
  enqueue : function(song){
    if (song) {
      this.queue.push(song);
    }
  }

});