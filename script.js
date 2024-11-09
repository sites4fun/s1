const enterButton = document.getElementById('enterButton');
const videoContainer = document.getElementById('videoContainer');

enterButton.addEventListener('click', () => {
  // Fade out the button
  enterButton.style.opacity = '0';

  // Wait for the fade-out to finish, then display video
  setTimeout(() => {
    enterButton.style.display = 'none'; // Hide the button
    videoContainer.style.display = 'block'; // Show the video container
    // Fade in the video
    setTimeout(() => {
      videoContainer.style.opacity = '1'; // Make the video fade in
    }, 100); // Small delay to allow the container to be visible before the fade-in
  }, 500); // Wait for 0.5 seconds for the fade effect
});

// Particle effect initialization
document.addEventListener('DOMContentLoaded', function () {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": true,
                    "anim": {
                        "enable": true
                    }
                },
                "size": {
                    "value": 2.3,
                    "random": true,
                    "anim": {
                        "enable": true
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": true
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    };
    document.head.append(script);
});
