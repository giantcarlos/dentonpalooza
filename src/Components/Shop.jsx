import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div className="shop-grid">
        <div className="tickets">
            <h3>TICKETS</h3>
            <p>Each ticket is priced at $20</p>
            <h4><a href="https://www.prekindle.com/event/49535-dentonpalooza-4-denton" target="_blank">BUY TICKETS ➤</a></h4>
        </div>
        <div className="merch">
            <h3>MERCHANDISE</h3>
            <p>Stay tuned for upcoming merchandise.</p>
            <h4>COMING SOON</h4>
        </div>
        <div className="beneficiaries">
            <h2>BENEFICIARIES</h2>
            <p>All funds raised are distributed evenly between our beneficiaries.</p>
            <h4><a href="https://dmacdenton.org/" target="_blank">DMAC ➤</a> / <a href="https://theartroomdenton.org/" target="_blank">THE ART ROOM ➤</a> / <a href="https://leukemiatexas.org/" target="_blank">LEUKEMIA TEXAS ➤</a></h4>
        </div>
      </div>
    )
  }
}
