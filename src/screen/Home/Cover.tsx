"use client"

import { useCallback } from "react"
import type { Engine } from "tsparticles-engine"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { appConfig } from "@config/app"

export const Cover = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])


  const srcImages = [
    "/v1743565797/nestjs_mhmjxs.png",
    "/v1743565139/figma_zoqfhp.png",
    "/v1743565139/expressjs_mq7nvf.png",
    "/v1743565145/tailwindcss_xs2sin.png",
    "/v1743565146/vuejs_ogqtot.png",
    "/v1743565146/typescript_wfyhgn.png",
    "/v1743565145/tailwindcss_xs2sin.png",
    "/v1743565145/style_component_djyr2l.png",
    "/v1743565144/sass_iaqhnx.png",
    "/v1743565144/resfull_api_etiuwn.png",
    "/v1743565144/redux_toolkit_rdw7ch.png",
    "/v1743565144/reactjs_w7j7xh.png",
    "/v1743565143/react_query_z4jiik.png",
    "/v1743565142/nodejs_ftd3un.png",
    "/v1743565142/postgres_wyvmkg.png",
    "/v1743565142/nextjs_jwgpru.png",
    "/v1743565141/jquery_fqnsre.png",
    "/v1743565141/material_ui_hs9iwi.png",
    "/v1743565141/javascript_urcryf.png",
    "/v1743565141/html_dylzce.png",
    "/v1743565140/antdesign_lmyyeq.png",
    "/v1743565140/docker_ymaklr.png",
    "/v1743565140/cloudinary_fc5t2m.png",
    "/v1743565140/css_xquosx.png",
    "/v1743565139/bootstrap_aioeym.png",
    "/v1743565139/figma_zoqfhp.png",
    "/v1743565139/expressjs_mq7nvf.png",
    "/v1743565139/angular_g0xnnu.png",
  ]

  const images = srcImages?.map((url) => ({
    src: `${appConfig?.urlImage}${url}`,
    width: 20,
    height: 20,
  }))
  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onDiv: {
              elementId: "repulse-div",
              enable: false,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 2,
            },
            connect: {
              distance: 80,
              lineLinked: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1,
              },
            },
            push: {
              quantity: 2,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          lineLinked: {
            blink: false,
            color: "#000",
            consent: false,
            distance: 150,
            enable: false,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            limit: 100,
            value: 30,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.2,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 1,
          },
          rotate: {
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
            direction: "random",
            random: true,
            value: 0,
          },
          shape: {
            character: {
              fill: false,
              font: "Verdana",
              style: "",
              value: "*",
              weight: "400",
            },
            image: images,
            polygon: {
              sides: 5,
            },
            stroke: {
              color: "#000000",
              width: 0,
            },
            type: "image",
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: false,
            value: 16,
          },
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: "#ffffff",
            lineWidth: 0.5,
          },
          move: {
            radius: 10,
          },
          scale: 1,
          url: "",
        },
        background: {
          image: "linear-gradient(180deg, #eafaec, #f1f5f8, #eafaec)",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
      className="h-screen"
    />
  )
}
