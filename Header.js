import React, { useContext, useMemo } from 'react'
import { cartContext } from '../context/cart.context';


const Header = () => {
    // hmlg ko cart me kitta item h jaanke ke lie cartItems ka zrurat padega jo ki useContext se aayega. 

    
    const {cartItem} = useContext(cartContext);
    
    const totalValue = useMemo( () =>{
        
        return Object.values(cartItem).reduce( ( acc , item )=>{
        acc+= item.count 
        return acc;
    } , 0)} , [cartItem] )

    return (
        <div>
            <button className="btn btn-outline-success">Cart ({totalValue})</button>

        </div>
    )
}

export default Header;
