document.addEventListener("DOMContentLoaded", function() {
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    var space = document.getElementById('typewriter');
    var typewriter = new Typewriter(space, {
      loop: false
    });
    typewriter
    .typeString('<h1 class="h1 bold">Hello.</h1>')
    .pauseFor(1500)
    .typeString('<h1 class="h1 bold">My name is Hermann</h1>')
    .pauseFor(1500)
    .typeString('<p class="p">My name is Hermann</p>')
    .start();
  }
});
