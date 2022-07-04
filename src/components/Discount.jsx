import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setDiscount } from '../store/productsReducer'
import css from './Discount.module.css'

const Discount = () => {

    const dispatch = useDispatch()
    const [discountRate, setDiscountRate] = useState('')

    const clickDiscount = () => {
        dispatch(setDiscount(+discountRate))
    }

    const clickClear = () => {
        setDiscountRate('')
        dispatch(setDiscount(0))
    }

    return (
        <fieldset className={css.discount}>
            <legend>Скидка</legend>
            <input
                className={css.discount__input}
                type="number"
                placeholder='Скидка'
                onChange={event => setDiscountRate(event.target.value)}
                value={discountRate}
            />
            <button
                type='button'
                className={css.discount__button}
                onClick={() => clickDiscount()}
                disabled={discountRate > 100}>
                Установить скидку
            </button>
            <button
                type='button'
                className={css.discount__button}
                onClick={() => clickClear()}>
                Убрать скидки
            </button>
        </fieldset>
    )
}

export default Discount