import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/productCard'

const Home = () => {
  const addToCartHandler = () => {

  };

  return (
    <div className='home'>
      <section></section>

      <h1>Latest Products
        <Link to={'/search'} className='findmore'>More</Link>
      </h1>

      <main>
        <ProductCard
          productId='1'
          name='Samsung'
          price={45000}
          stock={30}
          photo="https://m.media-amazon.com/images/I/71eUNTW+nJL._AC_UY218_.jpg"
          handler={addToCartHandler}
        />
      </main>
    </div>
  )
}

export default Home