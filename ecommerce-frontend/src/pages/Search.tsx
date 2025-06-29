import { useState } from "react";
import ProductCard from "../components/productCard";

// const ProductCard = lazy(() => import("../components/productCard"));

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const addToCartHandler = () => {

  };

  const isNextPage = page < 4;
  const isPrevPage = page > 1;

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>

        <div>
          <h4>Sort</h4>
          <select
            name=""
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price(Low to High)</option>
            <option value="desc">Price(High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""} </h4>
          <input
            // name=""
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Sample1</option>
            <option value="">Sample2</option>
          </select>
        </div>
      </aside>

      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="1"
            name="Samsung"
            price={45000}
            stock={30}
            photo="https://m.media-amazon.com/images/I/71eUNTW+nJL._AC_UY218_.jpg"
            handler={addToCartHandler}
          />
        </div>


        <article>
          <button onClick={() => setPage((prev) => prev - 1)} disabled={!isPrevPage}>Prev</button>
          <span>{page} of {5}</span>
          <button onClick={() => setPage((prev) => prev + 1)} disabled={!isNextPage}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
