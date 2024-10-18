import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Message extends Component {
  render() {
    return (
      <motion.section initial={{ opacity: 0, y: 224 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} viewport={{ margin: "224px", once: true }}className="footer">
        <div className="footer-social">Thank you.
        </div>
      </motion.section>
    )
  }
}
