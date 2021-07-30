import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Svg from "../components/Svg"
import "../scss/Home.scss"
import "../scss/upDown.scss"
import upDown from "../components/iconSvg"


import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { motion } from "framer-motion"

import About from "../assets/About-Slide.svg"
import Slide1 from "../assets/Slide-1.svg"

import MP1 from "../assets/MyProjects/MP-1.svg"
import MP2 from "../assets/MyProjects/MP-2.svg"

import EcommApp from "../assets/MyProjects/EcommApp.svg"
import ReactApp from "../assets/MyProjects/ReactApp.svg"

import ContactSlide from "../assets/Contac/Contact-Slide.svg"

import WhatsApp from "../assets/Contac/whatsapp (2) 1.svg"
import Hi from "../assets/Hi.svg"
import Dots from "../assets/Dots.svg"
import Circle from "../assets/Circle.svg"
import triangle from "../assets/triangle.svg"

import Profile from "../assets/Profile.svg"
import Profile2 from "../assets/Profilepic 1.svg"

import Cross from "../assets/Cross.svg"
import trianglewhite from "../assets/Circlewhite.svg"
import Hexagon from "../assets/Hexagon.svg"

function IndexPage() {
  const variants = {
    visible: { opacity: 1, x: -20, y: 200 },
    hidden: { opacity: 0, x: 0 },
  }

  return (
    <Parallax pages={5} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <div className="main">
          <motion.div animate={{ x: -20 }}>
            <Svg src={Slide1} top="0" left="-49" zIndex="-10" />
          </motion.div>

          <ParallaxLayer offset={0} speed={2.5}>
            <motion.div animate={{ y: 50 }} transition={{ delay: 0.5 }}>
              <h1>I'm Sarfraz Alam</h1>
              <Svg src={Hi} top="170px" left="180px" zIndex="0" mtop="60px" mleft="35px" mrotate="0" mscale="0.8"/>
            </motion.div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={5.5}>
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              variants={variants}
            >
              <Svg src={Profile} top="27%" left="50%" mtop="150px" mleft="-60px" mrotate="0" mscale="0.7" />
            </motion.div>
          </ParallaxLayer>
          <Svg src={Circle} top="480px" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.1} speed={2.2}>
        <motion.div
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 1,
          }}
        >
          <Svg src={triangle} right="10px" zIndex="-10" />
          <Svg
            src={triangle}
            right="300px"
            top="20px"
            rotate="180"
            scale="1"
            zIndex="-10"
          />
          <Svg
            src={triangle}
            right="500px"
            top="400px"
            rotate="30"
            scale="1"
            zIndex="-10"
          />
          <Svg
            src={triangle}
            right="600px"
            top="600px"
            rotate="90"
            scale="1"
            zIndex="-10"
          />
          <Svg
            src={triangle}
            right="200px"
            top="590px"
            rotate="90"
            scale="1"
            zIndex="-10"
          />
        </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <motion.div
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 1.5,
          }}
        >
          <Svg
            src={Cross}
            right="200px"
            top="350px"
            rotate="90"
            scale="0.4"
            zIndex="-10"
          />
          <Svg
            src={Cross}
            right="50px"
            top="550px"
            rotate="30"
            scale="0.4"
            zIndex="-10"
          />
          <Svg
            src={Cross}
            right="90px"
            top="50px"
            rotate="60"
            scale="0.7"
            zIndex="-10"
          />
          <Svg
            src={Cross}
            right="490px"
            top="-20px"
            rotate="260"
            scale="0.7"
            zIndex="-10"
          />
          <Svg
            src={Cross}
            right="500px"
            top="550px"
            rotate="90"
            scale="0.7"
            zIndex="-10"
          />
        </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={6.2}>
        <motion.div
          animate={{ y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 1.5,
          }}
        >
          <Svg
            src={trianglewhite}
            top="400px"
            left="350px"
            rotate="30"
            scale="1"
          />
        </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={6.2}>
        <motion.div
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
            duration: 3.5,
          }}
        >
          <Svg src={Hexagon} top="400px" right="50px" rotate="20" scale="0.9" mtop="700px"/>
        </motion.div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1.5}>
        <Svg
          src={About}
          right="20px"
          top="50px"
          rotate="0"
          scale="1.4"
          zIndex="-10"
          mscale="0.8"
          mrotate="0"
          mright="-200px"
          mtop="-300px"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <Svg src={trianglewhite} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
        <div className="aboutSection">
          <h1>ABOUT ME</h1>
          <ul>
            <li>Mohammad Sarfraz Alam</li>
            <li>
              Jamia Millia Islamia
              <span>Electronics and Communication Engineering</span>
              <span>(2020-2024)</span>
            </li>
          </ul>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5}>
        <Svg src={MP1} top="-20px" mleft="-142px" zIndex="-10" mtop="0px" mscale="0.6" mrotate="0"/>
        <Svg src={EcommApp} right="200px" top="120px" zIndex="" mscale="0.6" mtop="350px" mrotate="0" mright="-50px"/>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.4}>
        <Svg src={MP2} top="120px" right="0px" zIndex="-10" mscale="0.6" mtop="350px" mrotate="0" mright="-200px"/>
        <Svg src={ReactApp} left="200px" top="390px" zIndex="" mscale="0.6" mtop="700px" mleft="-20px" mrotate="0" mright="-50px"/>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.3}>
        <Svg src={MP1} top="690px" zIndex="-10" mscale="0.6" mtop="680px" mrotate="0" mleft="-142px"/>
        <Svg src={WhatsApp} top="900px" right="300px" scale="1.5" rotate="0" mscale="0.6" mtop="1090px" mrotate="0" mright="100px" />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.5}>
        <div className="project">
          <h1>MY PROJECTS</h1>
          <ul className="EcommApp">
            <li>
              <Link className="Link" to="https://ecommapp-b1317.web.app/">
              EcommerceApp(React JS)
              </Link>
              <span>
              Ecommerce App Made Using React, Firebase and RazorPay
              </span>
            </li>
          </ul>
          <ul className="ReactApp">
            <li>
              Amazon Clone(React.js)
              <span>
              Amazon App Made Using React and Firebase 
              </span>
            </li>
          </ul>
          <ul className="WhatsAppBot">
            <li>
              WhatsApp Bot
              <span>
              Bot Made Using Node.js,Venom-Bot and MongoDB
              </span>
            </li>
          </ul>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5}>
          <Svg src={ContactSlide} top="0px" right="0px" scale="1.1" rotate="0" mtop="-120px"/>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5}>
          <div className="ContactSection">
              <h1>CONTACT ME</h1>
              <span className="ContactContainer">
                  <div class="Contactinfo">
                    <ul>
                      <li>
                        +91-7303435034
                      </li>
                      <li>
                        alamsarfraz422@gmail.com
                      </li>
                      <li>
                        D-19A Shaheen Bagh Jasola New Delhi
                      </li>
                    </ul>
                  </div>
                  <div className="ContactForm">
                    <form>
                      <input type="text" placeholder="Name" autoComplete="off"/>
                      <input type="email" placeholder="Email" autoComplete="off" />
                      <textarea name="message" placeholder="Message"  rows="17" column="30" autoComplete="off" />
                      <button type="submit">SEND</button>
                    </form>
                  </div>
              </span>
          </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default IndexPage
