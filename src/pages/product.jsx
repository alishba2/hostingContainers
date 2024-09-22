import React, { useState, useEffect } from 'react';
import "../style/pages/_product.scss";
import { saveProduct, getAllProducts, deleteProduct } from '../firebase/firebase';
import { notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons'; // Importing the close icon

export default function Product() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        type: 'Miners',
        price: '',
        power: '',
        image: null,
        imageName: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const fetchProducts = async () => {
        try {
            const productsData = await getAllProducts();
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
        if (file && file.type.startsWith('image/')) {
            setNewProduct({
                ...newProduct,
                image: file,
                imageName: file.name
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
        setLoading(true);

        try {
            const productToSave = {
                name: newProduct.name,
                type: newProduct.type,
                price: newProduct.price,
                power: newProduct.power,
                image: newProduct.image
            };

            await saveProduct(productToSave);
            setProducts([...products, productToSave]);
            setNewProduct({
                name: '',
                type: 'Miners',
                price: '',
                power: '',
                image: null,
                imageName: ''
            });
            notification.success({
                message: "Success",
                description: "Product saved successfully!",
            });
            fetchProducts();
            setShowModal(false);
        } catch (error) {
            console.error("Error saving product:", error);
            notification.error({
                message: "Error",
                description: "There was an error saving the product.",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            notification.success({
                message: "Success",
                description: "Product deleted successfully!",
            });
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error("Error deleting product:", error);
            notification.error({
                message: "Error",
                description: "There was an error deleting the product.",
            });
        }
    };

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

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
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.length > 0 ? currentProducts.map((product, index) => (
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
                            <td>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="6">No products available.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
                <button
                    style={{ color: 'white' }}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            {/* Modal for adding new products */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content" > {/* Adjusted height */}
                        <span style={{ color: 'black', float: 'right', cursor: 'pointer' }} onClick={() => setShowModal(false)}>
                            <CloseOutlined />
                        </span>
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
