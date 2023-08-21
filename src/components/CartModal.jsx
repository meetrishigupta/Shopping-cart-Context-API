import React, { useState } from "react";
import styles from "../styles/CartModal.module.css";
import { UseValue } from "../itemContext";

function CartModal() {
  const {cart, total, handleReset,toggle} = UseValue();
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleReset}>
        Clear
      </div>
      <div className={styles.itemContainer}>
    {
cart.map((elem)=>{
  return(
    <div className={styles.cartCard} key={elem.id}>
      <h1>{elem.name}</h1>
      <h3>X{elem.qty}</h3>
      <h3>{ elem.qty*elem.price}</h3>
      </div>
  )
})
    }
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
