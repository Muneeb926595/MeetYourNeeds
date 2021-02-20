import React from 'react'
import { useDispatch } from 'react-redux'

import classes from './Productrow.module.css'
import { ReactComponent as DeleteIcon } from '../../../assets/Images/deleteIcon.svg'
import {
  removeFromCart,
  removeFromCartLocally,
} from '../../../@store/auth/AuthActions'

function ProductRow({ productId, productImage, productName, price }) {
  const dispatch = useDispatch()
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(productId))
    dispatch(removeFromCartLocally(productId))
  }
  return (
    <div className={classes.productRowContainer}>
      <div className={classes.productInfo}>
        <div className={classes.productImageContainer}>
          <img className={classes.productImage} src={productImage} />
        </div>
        <div className={classes.productDetails}>
          <p className={classes.productName}>{productName}</p>
          <p className={classes.productPrice}>Rs. {price}</p>
        </div>
      </div>
      <div className={classes.removeProduct} onClick={handleRemoveProduct}>
        <DeleteIcon className={classes.deleteIcon} />
      </div>
    </div>
  )
}

export default ProductRow
