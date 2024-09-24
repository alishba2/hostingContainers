import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../firebase/firebase'; // Ensure this fetches products from Firebase
import { Card, Col, Row, Typography, Spin, Table, Button, Tabs } from 'antd';
import "../style/pages/_singleProduct.scss";

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function SingleProduct() {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSpecifications, setShowSpecifications] = useState(true);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const allProducts = await getAllProducts();
                const foundProduct = allProducts.find(prod => prod.id === id); // Filter product by ID
                setProduct(foundProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="loading-container"><Spin size="large" /></div>; // Centered spinner
    if (!product) return <div>Product not found</div>;

    const { name, description, images, price, specifications } = product;
    const specificationsData = Object.entries(product)
        .filter(([key, value]) =>
            value && key !== 'name' && key !== 'description' && key !== 'images' && key !== 'price' && key !== 'id'
        )
        .map(([key, value]) => ({
            key, // Use the key as the row key
            name: key,
            value: value,
        }));


    const qualitiesData = [
        { title: "Fast Performance", description: "Our website is optimized for speed." },
        { title: "User-Friendly Design", description: "We prioritize user experience." },
        { title: "Secure Hosting", description: "Your data is safe with us." },
        // Add more qualities as needed
    ];

    return (
        <div className="single-product-container">
            {/* <h6 style={{ color: "white !important" }} >{name}</h6> */}
            <Row gutter={16} className="product-row">
                {/* Left Column - Image Gallery */}
                <Col xs={24} md={12}>
                    <div className="image-gallery">
                        <img src={images[0]} alt={name} className="main-image" />
                        <div className="thumbnail-images">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`thumbnail-${index}`}
                                    onClick={() => {
                                        const mainImage = document.querySelector('.main-image');
                                        mainImage.src = image; // Change main image on thumbnail click
                                    }}
                                    className="thumbnail"
                                />
                            ))}
                        </div>
                    </div>
                </Col>

                {/* Right Column - Product Details */}
                <Col xs={24} md={12}>
                    <Card bordered={false} title={name} className="product-info">
                        <span className="price">${price}</span>
                        <span className="description">{description}</span>
                        {/* <Button type="primary" size="large" className="buy-now-button">
                            Buy Now
                        </Button> */}
                    </Card>
                </Col>
            </Row>

            <div>
                <div className="toggle-buttons">
                    <button
                        className={showSpecifications ? 'active' : ''}
                        onClick={() => setShowSpecifications(true)}
                    >
                        Specifications
                    </button>
                    <button
                        className={!showSpecifications ? 'active' : ''}
                        onClick={() => setShowSpecifications(false)}
                    >
                        Why Hosting Containers
                    </button>
                </div>

                {showSpecifications ? (
                    <div className="specifications">
                        {specificationsData.length > 0 ? (
                            <Table
                                dataSource={specificationsData}
                                pagination={false}
                                rowKey="name"
                                rowClassName="specification-row"
                            >
                                <Table.Column title="Specifications" dataIndex="name" key="name" />
                                <Table.Column dataIndex="value" key="value" />
                            </Table>
                        ) : (
                            <p>No specifications available.</p>
                        )}
                    </div>
                ) : (
                    <div className="specifications">
                        <span>

                            Founded in 2017, Hash International Hosting LLC has grown to become a key player in the cryptocurrency mining industry, with a strong presence in Africa, the US, Russia, Kazakhstan, the UAE, and other Gulf countries. Our mission is to provide innovative and reliable mining solutions that empower our clients to maximize their returns while minimizing operational complexities. With a special focus on the UAE, our sites are designed to maintain optimal environmental conditions, ensuring miners operate at peak efficiency. Our team of 100+ professionals, with extensive expertise in mining and infrastructure management, drives our success across multiple continents.
                        </span>
                        {/* <Table
                            dataSource={qualitiesData}
                            pagination={false}
                            rowKey="title"
                        >
                            <Table.Column title="Quality" dataIndex="title" key="title" />
                            <Table.Column title="Description" dataIndex="description" key="description" />
                        </Table> */}
                    </div>
                )}
            </div>
        </div>
    );
}
