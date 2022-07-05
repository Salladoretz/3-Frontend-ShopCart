import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../store/productsReducer'
import css from './InputCart.module.css'


const InputCart = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    const [code, setCode] = useState('')
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')

    let ids = []
    products.map(item => ids.push(item.id))
    let checkId = ids.includes(+code)

    const add = () => {
        let newProduct = { id: +code, name: product, price: +price }
        dispatch(addProduct(newProduct))
        setCode('')
        setProduct('')
        setPrice('')
    }

    return (
        <fieldset className={css.inputCart}>
            <legend>Добавление товара</legend>
            <div>
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
                    disabled={code === '' || product === '' || price === '' || checkId}
                    className={css.inputCart__button}
                >Добавить</button>
            </div>
            {checkId ? <p>Такой код товара уже существует!</p> : ''}
        </fieldset>
    )
}

export default InputCart