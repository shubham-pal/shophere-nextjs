import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';

import styles from '../styles/Home.module.css';

import products from '../products.json';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ShopHere Store</title>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <Container className={styles.homeContainer}>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <img src={product.image} alt={`Preview of ${product.title}`} />
                    <h3>{ product.title }</h3>
                    <p className={styles.cardDescription}>{ product.description }</p>
                    <p>₹{ product.price }</p>
                  </a>
                </Link>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </Container>
      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      <div hidden id="snipcart" data-api-key={`NWYzYzc0MjMtOTZlZC00MjE0LWEwMzMtOTc1MDYyZDYyMmU1NjM3NzM2Mzg5MTgwMjAwMzc3`} data-config-modal-style="side" />
    </Layout>
  )
}