// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Bg = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        autoPlay: true,
  background: {
    color: {
      value: "#000000"
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "20%",
    opacity: 1
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  detectRetina: true,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: false,
        mode: "repulse"
      },
      onHover: {
        enable: false,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10
        }
      },
      resize: {
        enable: true,
        delay: 0.5
      }
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0,
        size: 0
      },
      repulse: {
        distance: 400,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: "#a855f7"
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      outModes: {
        default: "out"
      }
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080
      },
      value: 160
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1
      },
      animation: {
        enable: true,
        speed: 1
      }
    },
    shape: {
      type: "circle"
    },
    size: {
      value: {
        min: 2.5,
        max: 4
      }
    }
  }}
       
      }
      
    />
  );
};

export default Bg;
