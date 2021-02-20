import React, { useEffect, useState } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import { useSelector } from 'react-redux'

import classes from './Checkout.module.css'
import { ReactComponent as CashIcon } from '../../assets/Images/cashIcon.svg'
import { ReactComponent as CreditCardIcon } from '../../assets/Images/creditCardIcon.svg'
import { ReactComponent as PaypalIcon } from '../../assets/Images/paypalIcon.svg'
import ProductRow from './components/ProductRow'

function Checkout({ setShowCheckoutModal }) {
  const [subTotal, setSubtotal] = useState(0)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    creditCard: false,
    paypal: false,
    cash: false,
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
          <p className={classes.portionSubTitle}>Orders #6543</p>
          <div className={classes.horizentalSplitLine}></div>
          <div className={classes.portionData}>
            <div className={classes.maincontent}>
              {cartData?.length > 0 &&
                cartData.map(({ cart }) => (
                  <ProductRow
                    productId={cart._id}
                    // productImage={
                    //   "http://localhost:3000/api/" + cart.image
                    // }
                    productImage={
                      'https://meet-your-needs-api.herokuapp.com/api/' +
                      cart.image
                    }
                    productName={cart.title}
                    price={cart.price}
                  />
                ))}
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
                  <p>Credit Card</p>
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
                  <p>Credit Card</p>
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
                <button className={classes.confirmButton}>
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
