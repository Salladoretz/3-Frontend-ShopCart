
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productCount, deleteProduct } from '../store/productsReducer'
import css from './Cart.module.css'

const Cart = () => {

    const products = useSelector(state => state.products.products)
    const count = useSelector(productCount)
    const discount = useSelector(state => state.products.discount)
    const dispatch = useDispatch()

    return (
        <fieldset className={css.cart}>
            <legend>Список товаров</legend>
            {count === 0 ? <p className={css.cart_empty}>Список пуст</p> : ''}
            {products.map((item, index) => <div
                key={index}
                className={css.cart__product}>
                <div className={css.cart__productId}>{item.id}</div>
                <div className={css.cart__productName}>{item.name}</div>
                <div className={discount > 0 ? css.cart__productPrice_striked : css.cart__productPrice}>{item.price.toLocaleString('ru')}</div>
                <div className={discount > 0 ? css.cart__productDiscount : css.cart__productDiscount_inv}>{(item.price * (100 - discount) / 100).toLocaleString('ru')}</div>
                <button
                    onClick={() => dispatch(deleteProduct(index))}
                    className={css.cart__button}>
                </button>
            </div>)}
        </fieldset>
    )
}

export default Cart