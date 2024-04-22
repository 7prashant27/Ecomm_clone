import React, { useContext, useMemo } from 'react'
import { cartContext } from '../context/cart.context';


const BasketFlyout = () => {

  const { cartItem } = useContext(cartContext);
 
  // const val = Object.values(cartItem)
  // console.log('val',val)
  const totalCartValue = useMemo(() => {
    return Math.ceil(Object.values(cartItem).reduce((acc, item) => {
      return acc += (item.product.price * item.count);
    }, 0));
  }, [cartItem]);

  return (
    <>
      {
        totalCartValue && (
          <div className="basket-flyout">Basket ₹{totalCartValue}</div>
        )
      }
    </>
  )
}

export default BasketFlyout;

// const addtocart = (product , countdelta) =>{

//   return {

//     ...preval , 
//     [product.id] : preval[product.id] ?
    
//     count: preval[product.id].count + countdelta , 
//     product:product
//     : {
//       console.log('error')
//     }
// }

//  