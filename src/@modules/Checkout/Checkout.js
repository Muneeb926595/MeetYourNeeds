import React, { useEffect, useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { useDispatch, useSelector } from 'react-redux'

import classes from './Checkout.module.css'
import { ReactComponent as CashIcon } from '../../assets/Images/cashIcon.svg'
import { ReactComponent as CreditCardIcon } from '../../assets/Images/creditCardIcon.svg'
import { ReactComponent as PaypalIcon } from '../../assets/Images/paypalIcon.svg'
import ProductRow from './components/ProductRow'
import { addOrder } from '../../@store/auth/AuthActions'

function Checkout({ setShowCheckoutModal }) {
  const dispatch = useDispatch()
  const [subTotal, setSubtotal] = useState(0)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    creditCard: false,
    paypal: false,
    cash: true,
  })

  const cartData = useSelector(({ MeedYourNeeds }) => MeedYourNeeds.auth.cart)

  useEffect(() => {
    let tempSubtotal = 0
    cartData.map(({ cart }) => {
      tempSubtotal += parseInt(cart.price)
    })
    setSubtotal(tempSubtotal)
  }, [cartData])

  return (
    <Backdrop open={true} className={classes.backdrop}>
      <div className={classes.checkoutContianer}>
        <div className={classes.leftPortion}>
          <p className={classes.portionTitle}>Confirmation</p>
          <p className={classes.portionSubTitle}>Orders</p>
          <div className={classes.horizentalSplitLine}></div>
          <div className={classes.portionData}>
            <div className={classes.maincontent}>
              <div className={classes.products}>
                {cartData?.length > 0 &&
                  cartData.map(({ cart }) => (
                    <ProductRow
                      productId={cart._id}
                      productImage={cart.image}
                      productName={cart.title}
                      price={cart.price}
                    />
                  ))}
              </div>
            </div>
            <div className={classes.footer}>
              <div className={classes.horizentalSplitLine}></div>
              <div className={classes.footerContent}>
                <p>Subtotal:</p>
                <p>Rs. {subTotal}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.verticalSplitLine}></div>
        <div className={classes.rightPortion}>
          <p className={classes.portionTitle}>Payment</p>
          <p className={classes.portionSubTitle}>3 payment methods available</p>
          <div className={classes.horizentalSplitLine}></div>
          <div className={classes.portionData}>
            <div className={classes.maincontent}>
              <div className={classes.payments}>
                <p className={classes.paymentTitle}>Payment Methods</p>
                <div className={classes.paymentMethods}>
                  <div
                    className={
                      selectedPaymentMethod.creditCard
                        ? classes.selectedPaymentMethodCard
                        : classes.paymentMethodCard
                    }
                    onClick={() =>
                      setSelectedPaymentMethod({
                        creditCard: true,
                        paypal: false,
                        cash: false,
                      })
                    }
                  >
                    <CreditCardIcon className={classes.paymentIcon} />
                    <p>Credit Card</p>
                  </div>
                  <div
                    className={
                      selectedPaymentMethod.paypal
                        ? classes.selectedPaymentMethodCard
                        : classes.paymentMethodCard
                    }
                    onClick={() =>
                      setSelectedPaymentMethod({
                        creditCard: false,
                        paypal: true,
                        cash: false,
                      })
                    }
                  >
                    <PaypalIcon className={classes.paymentIcon} />
                    <p>Paypal</p>
                  </div>
                  <div
                    className={
                      selectedPaymentMethod.cash
                        ? classes.selectedPaymentMethodCard
                        : classes.paymentMethodCard
                    }
                    onClick={() =>
                      setSelectedPaymentMethod({
                        creditCard: false,
                        paypal: false,
                        cash: true,
                      })
                    }
                  >
                    <CashIcon className={classes.paymentIcon} />
                    <p>By Hand</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <div className={classes.horizentalSplitLine}></div>
              <div className={classes.footerContent}>
                <button
                  className={classes.cancelButton}
                  onClick={() => setShowCheckoutModal(false)}
                >
                  Cancel
                </button>
                <button
                  className={classes.confirmButton}
                  onClick={() =>
                    dispatch(
                      addOrder(
                        {
                          products: cartData.map(({ cart }) => {
                            return cart._id
                          }),
                          paymentMethod: selectedPaymentMethod,
                        },
                        setShowCheckoutModal
                      )
                    )
                  }
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  )
}

export default Checkout
