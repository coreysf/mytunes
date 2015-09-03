// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.queue = [];
    this.on("enqueued", function(){
      this.enqueue(song)}, this);
  },
  dequeue : function(){
    return queue.shift();
  },
  enqueue : function(song){
    debugger;
    if (song) {
      this.queue.push(song);
    }
    console.log("this.queue: " + this.queue);
    // if (this.queue.length === 1){
    //   debugger
    //   this.model.play();
    // }
  }

});