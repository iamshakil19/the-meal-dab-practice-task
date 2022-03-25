import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product, cartBtnHandler}) => {
    const {strMeal, strMealThumb, strArea, strCategory, strInstructions} = product

    const displaySliceText = (text) => {
        return text.length < 50 ? text : text.slice(0, 50) + "...";
    };
    return (
        <div className='product-container'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <p className='product-name'>{displaySliceText(strMeal)}</p>
                <p>Area: {strArea}</p>
                <p>Category: {strCategory}</p>
                <p>Instruction: {displaySliceText (strInstructions)}</p>
            </div>
            <button onClick={()=>cartBtnHandler(strMeal, strMealThumb)} className='cart-btn'>
                <p className='btn-text'>Add Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;