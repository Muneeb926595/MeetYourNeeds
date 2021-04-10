import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";

import classes from "./DesktopHeader.module.css";
import CustomeModal from "../../@components/CustomeModal";
import AddProduct from "../../@components/AddProduct/AddProduct";
import { ReactComponent as CartIcon } from "../../assets/Images/header/cartIcon.svg";
import Checkout from "../Checkout/Checkout";

const Header = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const cartData = useSelector(({ MeetYourNeeds }) => MeetYourNeeds.auth.cart);
  return (
    <div className={classes.header}>
      <NavLink to="/" className={classes.brandName}>
        <p className={classes.header__textLogo}>MeetYourNeeds</p>
      </NavLink>
      {/* <form className={classes.searchContainer}>
        <input
          type='text'
          placeholder='Search'
          className={classes.searchInput}
        />
        <button className={classes.SearchButton}>
          <SearchIcon />
        </button>
      </form> */}
      <div></div>
      <div className={classes.NavigationLinks}>
        <NavLink
          to="/home"
          activeClassName={classes.activeNavLink}
          className={classes.NavigationLink}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/face"
          activeClassName={classes.activeNavLink}
          className={classes.NavigationLink}
        >
          <p>Face</p>
        </NavLink>
        <NavLink
          to="/lip"
          activeClassName={classes.activeNavLink}
          className={classes.NavigationLink}
        >
          <p>Lip</p>
        </NavLink>
        <NavLink
          to="/eye"
          activeClassName={classes.activeNavLink}
          className={classes.NavigationLink}
        >
          <p>Eye</p>
        </NavLink>
        <NavLink
          to="/skin-care"
          activeClassName={classes.activeNavLink}
          className={classes.NavigationLink}
        >
          <p>Skincare</p>
        </NavLink>
        <NavLink
          to="/other"
          activeClassName={classes.activeNavLink}
          className={classes.NavigationLink}
        >
          <p>Other</p>
        </NavLink>

        <div
          className={classes.NavigationLink}
          onClick={() => {
            setShowModal(true);
          }}
        >
          <p>Add Product</p>
        </div>
        <div
          className={classes.NavigationLink}
          onClick={() => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("userId");
            history.push("/login");
          }}
        >
          <p>Logout</p>
        </div>
        <div
          onClick={() => setShowCheckoutModal(true)}
          className={classes.cartIcon}
        >
          <div className={classes.cartNumbering}>{cartData?.length}</div>
          <CartIcon />
        </div>
      </div>

      <CustomeModal
        onCloseModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      >
        <AddProduct setShowModal={setShowModal} />
      </CustomeModal>
      <CustomeModal
        onCloseModal={() => {
          setShowCheckoutModal(false);
        }}
        showModal={showCheckoutModal}
      >
        <Checkout setShowCheckoutModal={setShowCheckoutModal} />
      </CustomeModal>
    </div>
  );
};
export default Header;
