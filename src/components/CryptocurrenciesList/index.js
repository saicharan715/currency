// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurreciesList extends Component {
  renderCryptocurriencesHeader = () => (
    <div className="list-header">
      <p className="list-coin-type-heading">Coin Type</p>
      <div className="usd-and-euro-values-container">
        <p className="list-coin-value-heading">USD</p>
        <p className="list-coin-value-heading">EURO</p>
      </div>
    </div>
  )

  renderCryptocurriencesView = () => {
    const {cryptocurreciesData} = this.props

    return (
      <div className="cryptocurrencies-list-container" data-testid="loader">
        {this.renderCryptocurriencesHeader()}
        <ul className="cryptocurrencies-list">
          {cryptocurreciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrecyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptocurrencies-container" data-testid="loader">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-img"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        {this.renderCryptocurriencesView()}
      </div>
    )
  }
}

export default CryptocurreciesList
