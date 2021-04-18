import React from 'react'

 const CartItem = ({id, name, price , qty, updateQty}) => {
    const addOne = () =>updateQty(id,qty + 1);
    const subtractOne = () =>updateQty(id,qty - 1);
    const total = (qty * price).toFixed(2)
   
    return (
        <div style = {{display: 'flex', margin: '4em', padding:'1em', justifyContent: 'space-between'}}>
            <div>{name}</div>
            <div> ${price}</div>
            <div>
            <button onClick = {subtractOne} disabled = {qty <= 0} >-</button>
                {qty}
            <button onClick = {addOne}>+</button>
            </div>
            <div>Total: ${total}</div>
           
        </div>
    )
}
export default CartItem
