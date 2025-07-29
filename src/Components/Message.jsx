import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Message extends Component {
  render() {

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: .25,
          staggerChildren: 2,
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: {duration: 1.25 }
    }}

    return (
      <motion.section variants={container} initial="hidden" animate="show" className="message">
        <motion.p variants={item} >Dentonpalooza returns.</motion.p>
        <motion.p variants={item} >October 11, 2025. Dan's Silverleaf.</motion.p>
      </motion.section>
    )
  }
}
