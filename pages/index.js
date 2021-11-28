import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../products.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopHere</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ShopHere
        </h1>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Cart:</strong> <span className="snipcart-total-price">₹0.00</span>
          </a>
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>₹{product.price}</p>
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
      </main>

      <footer className={styles.footer}>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="NWYzYzc0MjMtOTZlZC00MjE0LWEwMzMtOTc1MDYyZDYyMmU1NjM3NzM2Mzg5MTgwMjAwMzc3" data-config-modal-style="side" />
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          ShopHere
        </a>
      </footer>
    </div>
  )
}
