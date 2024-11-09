/* Particle background container */
#snow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10; /* Keeps it behind all other content */
  pointer-events: none; /* Ensure particles don’t interfere with interactions */
}

/* Full viewport background */
body, html {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* Container for Enter button */
#enterButtonContainer {
  z-index: 1; /* Ensures it’s above the #snow background */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

/* Button styling */
#enterButton {
  padding: 15px 30px;
  font-size: 1.2em;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.5s ease;
  outline: none;
}

#enterButton:focus, #enterButton:active {
  outline: none;
  box-shadow: none; /* Removes any potential shadow */
  border-color: white;
}

/* Video container styling */
#videoContainer {
  display: none; /* Hidden by default */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 0; /* Ensures video is above snow but below the enter button */
  opacity: 0; /* Start with hidden video */
  transition: opacity 1s ease-in-out; /* Fade-in effect */
}

#videoContainer video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
