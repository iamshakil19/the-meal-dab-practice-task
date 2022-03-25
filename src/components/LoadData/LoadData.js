import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './LoadData.css'

const LoadData = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [keyword, setKeyword] = useState('')
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, [])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`)
            .then(res => res.json())
            .then(data => {console.log(data.meals.map(e => e.strMeal))})
    },[keyword])

    let newCart = [];
    const cartBtnHandler = (name, img) => {
        newCart = [...cart, {name , img, id:new Date().getTime()}]
        setCart(newCart)
    }
    const demo = (text) => {
        setKeyword(text.target.value);
    }
    const searchProducts = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${keyword}`)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }
    return (
        <div>
            <div className='searchBar'>
                <input onChange={ event => demo(event)} id='input' type="text" />
                <button onClick={searchProducts}>Search</button>
            </div>
            <div className='load-data-container'>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product.idMeal}
                            product={product}
                            cartBtnHandler={cartBtnHandler}
                        ></Product>)
                    }
                </div>
                <div className='carts-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default LoadData;