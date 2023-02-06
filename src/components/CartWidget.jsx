import React from 'react'

const CartWidget = () => {
  return (
    <>
      <div className="cart">
        <button size="lg" variant="rounded">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>4</span>
        </button>
      </div>
    </>
  )
}

export default CartWidget