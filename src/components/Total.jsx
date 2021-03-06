import React from 'react'
import css from './Total.module.css'
import { productCount, productTotal, productTotalDiscount } from '../store/productsReducer'
import { useSelector } from 'react-redux';

const Total = () => {

    const discount = useSelector(state => state.products.discount)
    const count = useSelector(productCount)
    const total = useSelector(productTotal)
    const totalDiscount = useSelector(productTotalDiscount)

    return (
        <fieldset className={css.total}>
            <legend>Итого</legend>
            <div className={css.total__item}>
                <p>Товаров:</p>
                <h2>{count}</h2>
            </div>
            <div className={css.total__item}>
                <p>Сумма:</p>
                <h2
                    className={discount > 0 && count !== 0 ? css.total_striked : ''}
                >
                    {total}
                </h2>
            </div>
            <div className={discount === 0 || count === 0 ? css.total_erase : css.total__item}>
                <p>Сумма со скидкой:</p>
                <h2>{totalDiscount}</h2>
            </div>
        </fieldset>
    )
}

export default Total