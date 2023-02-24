AFRAME.registerComponent("movie-starter", {
  init: function () {
    let el = this.el;
    this.startMovie = function () {
      //start the movie

      console.log("start movie");
    };
    el.addEventListener("click", this.startMovie);
  },
});
