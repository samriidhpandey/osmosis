import React, { useEffect } from "react";
import TypingText from './TypingText';
import { Link } from "react-router-dom";
import AnimatedName from './AnimatedName';

const RedHero = ({ isDark }) => {
  useEffect(() => {
    if (!document.getElementById('particles-script')) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
      script.id = "particles-script";
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: { value: 120, density: { enable: true, value_area: 800 } },
              color: { value: "#ff0000" },
              shape: { type: "triangle" },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
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
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                push: { particles_nb: 4 },
              },
            },
            retina_detect: true,
          });
        }
      };
      document.body.appendChild(script);
    }

    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div style={styles.heroContainer}>
      <div id="particles-js" style={styles.particles}></div>

      <div style={styles.content}>
        <div className="row">
          <div className="col-12">
            <div className="row z-1">
              <div className="col-12 overlay m-auto align-items-center" style={styles.overlay}>
                <div className="row align-items-center h-100 m-auto">
                  <div className="col-12 text-box text-center p-0">
                    <i className='text-learn w-25 m-auto p-2'>Learn from zero level</i>

                    <AnimatedName />

                    <h3 className='text-light mt-3'>
                      <TypingText />
                    </h3>

                    <div className="row">
                      <div className="col-12 col-sm-11 col-md-11 col-lg-10 col-xl-9 col-xxl-8 m-auto">
                        <p className='text-center m-auto text-white fs-5 mt-4'>
                          Confused about which computer course to join?
                          At <span className='fw-bolder fs-4'>Osmosis Computer</span> Classes, Jodhpur, we teach from zero level with individual attention to each student.
                          It’s the ideal place for beginners and backbenchers who need extra support.
                          Explore our free and paid courses and start your learning journey today!
                        </p>
                      </div>
                    </div>

                    <p className='mt-5'>
                      <Link to='/Courses'>
                        <button className='btn-dark border-0 pt-2 ps-4 pe-4 pb-2 rounded-3 m-2'>Explore Courses</button>
                      </Link>
                      <Link to='/Blog'>
                        <button className='btn-light border-0 pt-2 ps-4 pe-4 pb-2 rounded-3 m-2'>Read Articles</button>
                      </Link>
                    </p>

                    <div className="row">
                      <div className="col-8 col-sm-6 col-md-5 col-lg-4 col-xl-4 col-xxl-3 num bg-light text-dark d-flex m-auto mt-5 pt-3">
                        <div className="num1 m-auto"><h2>10+</h2><p>Courses</p></div>
                        <div className="num1 m-auto"><h2>15K+</h2><p>Students</p></div>
                        <div className="num1 m-auto"><h2>4.9</h2><p>Rating</p></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Keyframes */}
      <style>{`
        @keyframes glow {
          from { text-shadow: 0 0 10px red, 0 0 20px red; }
          to { text-shadow: 0 0 20px crimson, 0 0 30px crimson; }
        }
      `}</style>
    </div>
  );
};

const styles = {
  heroContainer: {
    position: "relative",
    width: "100%",
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
  },
  overlay: {
    paddingTop: '10%',
    paddingBottom: '10%',
  }
};

export default RedHero;
