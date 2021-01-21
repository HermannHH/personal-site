document.addEventListener("DOMContentLoaded", function() {
  if (document.readyState === "interactive" || document.readyState === "complete" ) {
    new Typewriter('#typewriter', {
      strings: ['Hello', 'World'],
      autoStart: true,
    });
  }
});
