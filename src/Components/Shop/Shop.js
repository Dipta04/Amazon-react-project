import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    // product ar jonno ata
    const [products,setProducts] = useState([]);

// cart ar jonno ata
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    // cart button (akhan theka product js a)
    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart= [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>

           <div className='product-container'>
     {
        products.map(product=> <Product 
            key={product.id}
            product={product}
            handleAddToCart ={handleAddToCart}
            ></Product>)
     }
           </div>

           <div className='cart-container'>
            <Cart cart={cart}></Cart>
           </div>

        </div>
    );
};

export default Shop;