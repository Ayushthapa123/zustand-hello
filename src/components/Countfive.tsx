import React, { FC } from 'react'
import { useBookStore } from '../store/Bookstore'
import shallow from 'zustand/shallow'

interface IProps {}

/**
* @author
* @function @Countfive
**/

export const Countfive:FC<IProps> = (props) => {
    const { amount, author,updateAmount } = useBookStore(
        (state) => ({ amount: state.amount, author: state.author,updateAmount:state.updateAmount }),
        shallow
      )
    //   const updateAmount = useBookStore(state => state.updateAmount)

  return (
    <div>
        <div>
            <h2>Increase by five</h2>
            <h2>Amount: {amount}</h2>
            <h3>Author: {author}</h3>
            <button 
        onClick={ () => updateAmount(5) } 
      > Increase By five </button>
        </div>
    </div>
   )
 }
