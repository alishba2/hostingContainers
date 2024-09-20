import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAllProducts } from '../firebase/firebase'; // Assume this fetches products from Firebase

export default function ProductListing() {
    const location = useLocation();

    const [category, setCategory] = useState(null);


    useEffect(() => {
        console.log(location, "locationnnnnnnnnnnnnnnnnn");
        if (location?.state) {
            console.log(location?.state, "location in products");
            setCategory(location?.state?.category)
        }
    }, [location])
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        inStock: false,
        minPrice: "",
        maxPrice: "",
    });
    const [products, setProducts] = useState([]);

    // Fetch products from Firebase when the component mounts or when the category changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const allProducts = await getAllProducts(); // Assume this returns all products from Firebase
                const filteredProducts = allProducts.filter(product => product.type === category);
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts(); // Call fetch function
    }, [category]);

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
            <h1>{category}</h1> {/* Display selected category */}
            <p>
                Find the best {category} to suit your needs. Use the search bar and filters
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
                    {filteredProducts.length > 0 ? filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <div className="product-name">
                                <p>${product.price}</p>
                                <p className="power">{product.power}</p> {/* Added power rating */}
                            </div>
                        </div>
                    )) : (
                        <p>No products available for this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
