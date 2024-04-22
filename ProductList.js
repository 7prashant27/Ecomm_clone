import React, { useContext, useEffect, useState } from 'react'
import { productStyle } from '../styles/productStyle';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cart.context';
import Counter from './Counter';

const ProductList = ({ products }) => {

    const { cartItem, addToCart } = useContext(cartContext);

    console.log('my products', products)

    const handleAddToCart = (product) => (e) => {
        //second fn me "e" pass kr bhi skte h and nai bhi kyuki uska idhar use nai ho rh. hmlg bs closure concept ka use kie h 
        //console.log("E" ,product)
        addToCart(product, 1);
    }

    const handleCountChange = (product) => (countDelta) => {

        addToCart(product, countDelta);

    }

    // const count = 2 

    return (
        <div className='product-list'>
            {
                products.map(product => (

                    <div className={productStyle} key={product.id}>
                        <h4><Link to={`/product/${product.id}`}> {product.title}</Link></h4>
                        <img src={product.image} />
                        <p> Rs {product.price}</p>

                        {/* getElementById wla id hai yeh stupid prashant. confuse hua faltu me fir bhi niche wla padh lo :) 
                        in the below button we are adding "id" attribute kyuki agar hmlg koi 
                        bhi addtocart button ko click krenge to pta kyse chlega handleAddtoCart 
                        fn ko ki kaun sa item ka addtocart click hua h . 
                        so using id ={product.id} hmlg e.target.id ko use kr skte h 
                        handleaddtocart fn ke aandar */}

                        {/* agar upar wle comment me jo details dia h uske lafde se bachna h to simply closure use kr lo. bas 
                        handleaddtocart me product ko direct pass krdo. and jb bhi component render hoga tabhi product details
                         handleaddtocart fn me chla jayega and jb button click hoga to poore ka poore product ko closure ke help ke 
                         se use kr payenge upar wle handleAddToCart fn me  */}

                        {
                            !cartItem[product.id] &&

                                !cartItem[product.id]?.count ?

                                (<button id={product.id} onClick={handleAddToCart(product)}> Add to cart</button>)
                                :
                                (<Counter value={cartItem[product.id]?.count} handleCountChange={handleCountChange(product)} productId={product.id} />)
                        }



                    </div>
                )
                )}
        </div>
    )
}
export default ProductList;
