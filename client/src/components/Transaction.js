import React, { createContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <>
      <li className={transaction.amount > 0 ? "plus" : "minus"} key={transaction.id}>
        {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
      </li>
    </>
  )
}

export default Transaction; 