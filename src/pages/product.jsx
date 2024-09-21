import React, { useState, useEffect } from 'react';
import "../style/pages/_product.scss";
import { saveProduct, getAllProducts } from '../firebase/firebase'; // Import getAllProducts
import { notification } from 'antd';

export default function Product() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        type: 'Miners', // Default to Miner
        price: '',
        power: '',
        image: null,
        imageName: '' // Track image name
    });

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state for submit button
    const fetchProducts = async () => {
        try {
            const productsData = await getAllProducts(); // Get all products from Firestore
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {


        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) { // Check if file is an image
            setNewProduct({
                ...newProduct,
                image: file,
                imageName: file.name // Update image name
            });
        } else {
            notification.error({
                message: "Invalid File Type",
                description: "Please select an image file.",
            });
            setNewProduct({ ...newProduct, image: null, imageName: '' });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        try {
            const productToSave = {
                name: newProduct.name,
                type: newProduct.type,
                price: newProduct.price,
                power: newProduct.power,
                image: newProduct.image
            };

            await saveProduct(productToSave); // Save the product with image

            setProducts([...products, productToSave]);
            setNewProduct({
                name: '',
                type: 'Miners',
                price: '',
                power: '',
                image: null,
                imageName: '' // Reset image name
            });
            notification.success({
                message: "Success",
                description: "Product saved successfully!",
            });
            fetchProducts();
            setShowModal(false); // Close the modal
        } catch (error) {
            console.error("Error saving product:", error);
            notification.error({
                message: "Error",
                description: "There was an error saving the product.",
            });
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="product-page">
            <button className="add-product-btn" onClick={() => setShowModal(true)}>Add New Product</button>

            <h2>Products</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Power</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>${product.price}</td>
                            <td>{product.power}W</td>
                            <td>
                                {product.image ? (
                                    <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                                ) : (
                                    'No Image'
                                )}
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="5">No products available.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Modal for adding new products */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="" onClick={() => setShowModal(false)}>Close</span>
                        <h2>Add New Product</h2>
                        <form className="product-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" value={newProduct.type} onChange={handleInputChange} required>
                                    <option value="Miners">Miners</option>
                                    <option value="Mining Containers">Mining Containers</option>
                                    <option value="Mining Chips">Mining Chips</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Power:</label>
                                <input type="number" name="power" value={newProduct.power} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Image:</label>
                                <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                                {newProduct.imageName && <p style={{ color: "black" }}>Selected file: {newProduct.imageName}</p>}
                            </div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Saving...' : 'Add Product'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
