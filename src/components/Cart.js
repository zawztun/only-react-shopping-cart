import React,{useState,useEffect} from 'react'
import CartItem from './CartItem'

 const Cart = ({initItems}) => {
    const initState = JSON.parse(window.localStorage.getItem('items'))
     const [items,setItems] = useState(initState|| initItems);
     
     const grandTotal = items.reduce((total, item)=>(total + item.qty * item.price),0).toFixed(2);

     const updateQty = (id, newQty) => setItems (items.map(item => {
            if(item.id === id){
                return { ...item, qty: newQty}
            }
            return item
        })
     )
        useEffect(()=> {
            window.localStorage.setItem('items', JSON.stringify(items))
        },[items])

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
