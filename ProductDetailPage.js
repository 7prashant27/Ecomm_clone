import React, { useEffect, useState } from 'react'

import { productDetailStyle } from '../styles/productStyle';

import { useParams } from 'react-router-dom';
import BasketFlyout from './BasketFlyout';

//hmlg iss page me api call and useparams isilie use kr rhe h kyuki hmlg ko particular product kaun sa 
//user select kra h wo pta nai h . to dynamycially passed product id "product list " page se fetch kr rhe h
// using useparams and the ussi productId ko hmlg api call me bhi use kr rhe h taaki particular product ko 
//list kr paaye.

const ProductDetailPage = () => {

    const [product, setProducts] = useState({}); //jysa output hoga api call ka waisa data type daalna usestate ke aandar agar state ko api call ka data store krne ke lie use krna h toh
    
    const {productId} = useParams(); //this is coming from app.js ka productdetailpage wle component se jahan colon ka use krke dynamic data pass kr rhe h 

    // const data = useParams(); 

    // console.log(data)


    useEffect( ()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(json=>setProducts(json));

    }, [])


    return (
        <>

            <div className={productDetailStyle}>
                <h4>{product.title}</h4>
                <img src={product.image} />
                <p> Rs {product.price}</p>
                <p> {product.description}</p>
            </div>
            <BasketFlyout/>
        </>
    )
}

export default ProductDetailPage;

//first return will load - first render rwill happen 
// step - 2 : all states will load - - second render rwill happen 
// step - 3 : use effect will load - third render rwill happen 
