
  const playPauseBtn = document.getElementById('playPauseBtn');
  const topSong = document.getElementById('topSong');
  let isPlaying = false;

  playPauseBtn.addEventListener('click', () => {
    if (!isPlaying) {
      topSong.play();
      playPauseBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="28" height="28">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
        </svg>
      `;
      playPauseBtn.classList.add('playing');
    } else {
      topSong.pause();
      playPauseBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DB954" width="28" height="28">
          <path d="M8 5v14l11-7z"/>
        </svg>
      `;
      playPauseBtn.classList.remove('playing');
    }
    isPlaying = !isPlaying;
  });

