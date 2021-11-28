import Container from '../Container/Container';

import styles from './Footer.module.css';

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footerContainer}>
        &copy; ShopHere Store
      </Container>
    </footer>
  )
}

export default Footer;