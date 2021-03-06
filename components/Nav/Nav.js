import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

import Container from "../Container/Container";
import styles from "./Nav.module.css";

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
      if (window.Snipcart) {
        setTotal(Snipcart.store.getState().cart.total);
    }
  });
  
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <p className={styles.title}>
          <Link href="/">
            <a>ShopHere Store</a>
          </Link>
        </p>
        <div className={styles.description} style={{ display: 'flex', margin: '5px' }}>
          <a id="1"
            className="snipcart-customer-signin" 
            href="#"
            style={{ textDecoration: "none" }}>
            <FaUser />
            {/* <strong className="sr-only">My Account</strong> */}
          </a>
          <a id="2"
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <FaShoppingCart />
            {/* <strong className="sr-only">Cart</strong> */}
            <span className="snipcart-total-price">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
              }).format(total)}
            </span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;