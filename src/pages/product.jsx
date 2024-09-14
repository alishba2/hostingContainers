import React, { useState } from 'react';
import "../style/pages/_product.scss";

export default function Product() {
    const [products, setProducts] = useState([
        { name: 'Product 1', type: 'Miner', price: 100, power: 500, image: null },
        { name: 'Product 2', type: 'Containers', price: 150, power: 750, image: null },
        { name: 'Product 3', type: 'Type A', price: 200, power: 1000, image: null }
    ]);

    const [newProduct, setNewProduct] = useState({
        name: '',
        type: 'Miner', // Default to Miner
        price: '',
        power: '',
        image: null,
    });

    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({
            ...newProduct,
            [name]: value
        });
    }

    const handleImageChange = (e) => {
        setNewProduct({
            ...newProduct,
            image: e.target.files[0]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...products, newProduct]);
        setNewProduct({
            name: '',
            type: 'Miner', // Reset to default
            price: '',
            power: '',
            image: null,
        });
        setShowModal(false); // Close modal after submission
    }

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
                                    <img src={URL.createObjectURL(product.image)} alt={product.name} style={{ width: '50px' }} />
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
                        <span className="close" onClick={() => setShowModal(false)}>Close</span>
                        <h2>Add New Product</h2>
                        <form className="product-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Type:</label>
                                <select name="type" value={newProduct.type} onChange={handleInputChange} required>
                                    <option value="Miner">Miner</option>
                                    <option value="Containers">Containers</option>
                                    <option value="Type A">Type A</option>
                                    <option value="Type B">Type B</option>
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
                                <input type="file" name="image" onChange={handleImageChange} />
                            </div>
                            <button type="submit">Add Product</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
