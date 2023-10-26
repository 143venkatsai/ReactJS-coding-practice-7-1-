import './index.css'

const DenominationItem = props => {
  const {denominationDetails, widthdrawalAmount} = props
  const {value} = denominationDetails

  const onWithdrawal = () => {
    widthdrawalAmount(value)
  }

  return (
    <li className="list-element">
      <button className="button" type="button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
