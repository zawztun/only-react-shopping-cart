import React,{useState} from 'react'
import CartItem from './CartItem'

 const Cart = ({initItems}) => {
     const [items,setItems] = useState(initItems)

     const grandTotal = items.reduce((total, item)=>(total + item.qty * item.price),0).toFixed(2);

     const updateQty = (id, newQty) => {
        const newItems = items.map(item => {
            if(item.id === id){
                return { ...item, qty: newQty}
            }
            return item
        })
         setItems(newItems)
    }

    return (
        <div>
            <div>
                <ul>
                    {
                    items.map(item=>(
                            <CartItem key = {item.id} updateQty = {updateQty} {...item}/>
                        ))
                    }
                </ul>     
            </div> 
            <h2>Grand Todal: ${grandTotal}</h2>    
        </div>
    )
}
export default Cart
