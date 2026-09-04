  // Swap placeholder frames for real playback once a <source> is present.
  document.querySelectorAll('.reel-video').forEach(function(video){
    var frame = video.closest('.reel-frame');
    var source = video.querySelector('source[src]');
    if (!source) return; // still commented out — leave placeholder showing

    video.load();
    video.addEventListener('loadeddata', function(){
      frame.classList.add('has-video');
      if (video.hasAttribute('loop') && video.muted) {
        video.play().catch(function(){});
      }
    });
    video.addEventListener('error', function(){
      frame.classList.remove('has-video');
    });
  });
