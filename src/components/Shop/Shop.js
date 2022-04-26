import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
   const [products, setProducts]= useState(fakeData);
   const [cart, setCart] = useState([]);
   const handleProduct = (product) =>{
       const newCart = [...cart, product];
       setCart(newCart);
   }
    return (
        <div className='Shop-Container'>

            <div className='Product-Container'>
            
                {
                    products.map(pd => <Product handleProduct={handleProduct} product={pd}></Product>)
                }
            
            </div>

            <div className='Cart-container'>
                <Cart cart={cart}></Cart>
            </div>

            
        </div>
    );
};

export default Shop;