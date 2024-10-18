import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class Message extends Component {
  render() {
    return (
      <section className="message">
        <p>Dentonpalooza’s lifetime contributions to local charities have now surpassed $30,000.</p>
        <p>Thank you, Denton, for your ongoing generosity and support!</p>
      </section>
    )
  }
}
