import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllProducts } from "../firebase/firebase"; // Assume this fetches products from Firebase
import { useTranslation } from "react-i18next";
import ProductSlider from "../components/Home/productSlider";
export default function ProductListing() {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const { t } = useTranslation(); // Initialize translation hook

    const [category, setCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // State to manage loading spinner
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        inStock: false,
        minPrice: "",
        maxPrice: "",
    });
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (location?.state) {
            setCategory(location?.state?.category);
        }
    }, [location]);

    // Fetch products from Firebase when the component mounts or when the category changes
    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true); // Start the loader before fetching
            try {
                const allProducts = await getAllProducts(); // Assume this returns all products from Firebase
                console.log(category, "categoryyy");
                const filteredProducts = allProducts.filter(product => product.type === category);
                setProducts(filteredProducts);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setIsLoading(false); // Stop the loader after fetching
            }
        };

        fetchProducts();
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

    // Function to navigate to SingleProduct
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`, { state: { category } });
    };

    return (
        <div className="product-listing-container">
            {isLoading ? ( // Show spinner while loading
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
                    <h1>{category == "Others" ? "Accessories" : category}</h1> {/* Display selected category */}
                    {/* <p>
                        Find the best {category} to suit your needs. Use the search bar and filters
                        to explore our range of products.
                    </p> */}

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
                            <h3>{t("filter")}</h3>
                            {/* <label>
                                <input
                                    type="checkbox"
                                    name="inStock"
                                    checked={filters.inStock}
                                    onChange={handleFilterChange}
                                />
                                In Stock
                            </label> */}
                            <label>
                                {t("min-price")}
                                <input
                                    type="number"
                                    name="minPrice"
                                    value={filters.minPrice}
                                    onChange={handleFilterChange}
                                    placeholder="Min Price"
                                />
                            </label>
                            <label>
                                {t("max-price")}

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
                                <div
                                    key={product.id}
                                    className="product-card"
                                    onClick={() => handleProductClick(product.id)} // Navigate on click
                                >
                                    <img src={product.images[0]} alt={product.name} />
                                    <h3 className="truncated-name">{product.name}</h3>
                                    <div className="product-name">
                                        <p>${product.price}</p>
                                        <p className={`power`}>
                                            {(() => {
                                                const text = product.specifications || product.power || product.powerSupply;
                                                if (text) {
                                                    return text.length > 20 ? text.slice(0, 25) + '...' : text;
                                                }
                                                return ''; // return empty if there's no text
                                            })()}
                                        </p>
                                    </div>
                                    <button className="btn" >{t('contact_us')}</button>

                                </div>
                            )) : (
                                <p>No products available for this category.</p>
                            )}
                        </div>


                    </div>
                </>
            )}
        </div>
    );
}
