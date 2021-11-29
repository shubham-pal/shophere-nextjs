import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';

import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container/Container';

import styles from '../../styles/Product.module.css'

import products from '../../products.json';

export default function Product({ product }) {
  return (
    <Layout>
      <Head>
        <title>{ product.title } - ShopHere Store</title>
      </Head>
      <Container>
        <h1 style={{ textAlign: 'center' }}>{ product.title }</h1>
        <div className={styles.product}>
          
          <div className={styles.productImage}>
            <img src={product.image} alt={`Preview of ${product.title}`} />
          </div>

          <div className={styles.productDetails}>
            <p>{ product.description }</p>
            <p>₹{ product.price }</p>

            <p>
              <button className="snipcart-add-item button-3"
                data-item-id={product.id}
                data-item-image={product.image}
                data-item-name={product.title}
                data-item-url={`/products/${product.id}`}
                data-item-price={product.price}
              >
                Add to Cart
              </button>
            </p>

          </div>

        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const product = products.find(({ id }) => id === productId);
  return {
    props: {
      product
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: products.map(({ id }) => {
      return {
        params: {
          productId: id
        }
      }
    }),
    fallback: false
  };
}