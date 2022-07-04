import React from 'react'
import './App.css'
import InputCart from './components/InputCart'
import Cart from './components/Cart'
import Total from './components/Total'
import Discount from './components/Discount'

function App() {
  return (
    <div className="App">
      <h1>Корзина</h1>
      <InputCart />
      <Cart />
      <Total />
      <Discount />
    </div>
  )
}

export default App
