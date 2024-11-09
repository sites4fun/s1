/* Particle background container */
#snow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Send it to the background */
}

/* Basic reset and styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

/* Video styling */
#videoContainer {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
}

#videoContainer video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
