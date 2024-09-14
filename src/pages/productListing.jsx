import React, { useState } from "react";
import product1 from "../assets/product.jpg";
import product2 from "../assets/product2.jpg";
import Contactus from "../components/Home/contactus";

export default function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    inStock: false,
    minPrice: "",
    maxPrice: "",
  });

  const products = [
    {
      id: 1,
      name: "Miner A",
      image: product1,
      price: 1200,
      inStock: true,
      power: "20W",
    },
    {
      id: 2,
      name: "Miner B",
      image: product2,
      price: 1400,
      inStock: false,
      power: "34W",
    },
    {
      id: 3,
      name: "Miner C",
      image: product1,
      price: 1300,
      inStock: true,
      power: "20W",
    },
    {
      id: 4,
      name: "Miner D",
      image: product2,
      price: 1250,
      inStock: true,
      power: "34W",
    },
    {
      id: 5,
      name: "Miner E",
      image: product1,
      price: 1100,
      inStock: false,
      power: "20W",
    },
    {
      id: 6,
      name: "Miner F",
      image: product2,
      price: 1350,
      inStock: true,
      power: "34W",
    },
    {
      id: 7,
      name: "Miner G",
      image: product1,
      price: 1500,
      inStock: true,
      power: "20W",
    },
    {
      id: 8,
      name: "Miner H",
      image: product2,
      price: 1600,
      inStock: false,
      power: "34W",
    },
    {
      id: 9,
      name: "Miner I",
      image: product1,
      price: 1450,
      inStock: true,
      power: "20W",
    },
    {
      id: 10,
      name: "Miner J",
      image: product2,
      price: 1700,
      inStock: true,
      power: "34W",
    },
  ];

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) => !filters.inStock || product.inStock)
    .filter((product) => !filters.minPrice || product.price >= filters.minPrice)
    .filter(
      (product) => !filters.maxPrice || product.price <= filters.maxPrice
    );

  return (
    <div className="product-listing-container">
      <h1>Miners</h1>
      <p>
        Find the best miners to suit your needs. Use the search bar and filters
        to explore our range of products.
      </p>

      <div className="product-listing-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* Side Filters */}
        <div className="side-filters">
          <h3>Filters</h3>
          <label>
            <input
              type="checkbox"
              name="inStock"
              checked={filters.inStock}
              onChange={handleFilterChange}
            />
            In Stock
          </label>
          <label>
            Min Price:
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleFilterChange}
              placeholder="Min Price"
            />
          </label>
          <label>
            Max Price:
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleFilterChange}
              placeholder="Max Price"
            />
          </label>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="product-name">
                <p>${product.price}</p>
                <p className="power">{product.power}</p>{" "}
                {/* Added power rating */}
              </div>

              {/* <p className={product.inStock ? '' : 'out-of-stock'}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </p> */}
            </div>
          ))}
        </div>
      </div>
      <Contactus />
    </div>
  );
}
