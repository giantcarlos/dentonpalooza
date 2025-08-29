import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Message extends Component {
  render() {

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: .125,
          staggerChildren: .9,
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: {duration: 1.25 }
    }}

    return (
      <motion.section variants={container} initial="hidden" animate="show" className="message">
        <motion.p variants={item} >DENTONPALOOZA returns.</motion.p>
        <motion.p variants={item} >October 11, 2025. Dan's Silverleaf.</motion.p>
        <motion.h2 variants={item} className="press-header" >DENTONPALOOZA 5</motion.h2>
        <motion.p variants={item} >
           <a href='https://www.prekindle.com/event/17543-dentonpalooza-5-denton' target="_blank">Tickets</a> available now.
        </motion.p>
      </motion.section>
    )
  }
}
