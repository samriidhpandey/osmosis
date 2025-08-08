import React, { useEffect } from "react";

const RedHero = () => {
  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ff0000",
            },
            shape: {
              type: "triangle",
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ff0000",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 4,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={styles.heroContainer}>
      <div id="particles-js" style={styles.particles}></div>
      <div style={styles.content}>
        
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#000",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  content: {
    position: "relative",
    zIndex: 2,
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
  },
  heading: {
    fontSize: "3rem",
    animation: "glow 1.5s infinite alternate",
  },
};

// Global keyframes
const glowStyle = document.createElement("style");
glowStyle.innerHTML = `
@keyframes glow {
  from {
    text-shadow: 0 0 10px red, 0 0 20px red;
  }
  to {
    text-shadow: 0 0 20px crimson, 0 0 30px crimson;
  }
}`;
document.head.appendChild(glowStyle);

export default RedHero;
