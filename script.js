// Enter button functionality
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

// Particle effect initialization with debugging
document.addEventListener('DOMContentLoaded', function () {
    console.log('Loading particles.js library...');
    
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    
    script.onload = function () {
        console.log('particles.js library loaded.');
        
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
        
        console.log('particles.js initialized.');
    };
    
    document.head.append(script);
});
