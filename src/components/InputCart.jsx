import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/productsReducer'
import css from './InputCart.module.css'


const InputCart = () => {

    const dispatch = useDispatch()

    const [code, setCode] = useState('')
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')

    const add = () => {
        let newProduct = { id: +code, name: product, price: +price }
        dispatch(addProduct(newProduct))
    }

    return (
        <fieldset className={css.inputCart}>
            <legend>Добавление товара</legend>
            <input
                className={css.inputCart__code}
                type="number"
                placeholder='Код товара'
                onChange={event => setCode(event.target.value)}
                value={code}
            />
            <input
                className={css.inputCart__product}
                type="text"
                placeholder='Наименование товара'
                onChange={event => setProduct(event.target.value)}
                value={product}
            />
            <input
                className={css.inputCart__price}
                type="number"
                placeholder='Цена'
                onChange={event => setPrice(event.target.value)}
                value={price}
            />
            <button
                type='submit'
                onClick={() => add()}
                disabled={code === '' || product === '' || price === ''}
                className={css.inputCart__button}
            >Добавить</button>
        </fieldset>
    )
}

export default InputCart