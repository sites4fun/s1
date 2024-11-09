const enterButton = document.getElementById('enterButton');
const videoContainer = document.getElementById('videoContainer');

enterButton.addEventListener('click', () => {
  // Fade out the button
  enterButton.style.opacity = '0';
  
  // Wait for the fade-out to finish, then display video
  setTimeout(() => {
    enterButton.style.display = 'none';
    videoContainer.style.display = 'block';
  }, 500);
});
