import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  widthdrawalAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="bg-container">
          <div className="name-details">
            <div className="initial-name">
              <p className="starting-name">S</p>
            </div>
            <div className="right-name">
              <p className="name">Sarah Williams</p>
            </div>
          </div>
          <div className="rupee-container">
            <p className="rupee-text">Your Balance</p>
            <p className="balance-amount">{amount}</p>
          </div>
          <p className="text">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="amount-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                widthdrawalAmount={this.widthdrawalAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
