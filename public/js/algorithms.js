document.addEventListener('DOMContentLoaded', function() {
  const videoLinks = document.querySelectorAll('.yt-video-link');
  const player = document.getElementById('yt-player');
  const desc = document.getElementById('yt-desc');
  videoLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const videoId = this.dataset.video;
      const description = this.dataset.desc;
      player.src = `https://www.youtube.com/embed/${videoId}`;
      desc.textContent = description;
      videoLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
}); 