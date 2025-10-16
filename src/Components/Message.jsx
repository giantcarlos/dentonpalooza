import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Message extends Component {
  render() {

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren: 1,
          staggerChildren: 1.75,
        }
      }
    }

    const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: {duration: 1.5 }
    }}

    return (
      <motion.section variants={container} initial="hidden" animate="show" className="message">
        <motion.p variants={item} >DENTONPALOOZA's lifetime contributions to local charities have surpassed $33,000.</motion.p>
        <motion.p variants={item} >Thank you, Denton, for your generosity and support.</motion.p>
      </motion.section>
    )
  }
}
