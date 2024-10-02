import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts } from '../firebase/firebase'; // Ensure this fetches products from Firebase
import { Card, Col, Row, Typography, Spin, Table, Button, Tabs } from 'antd';
import "../style/pages/_singleProduct.scss";
import ProductSlider from '../components/Home/productSlider';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function SingleProduct() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showSpecifications, setShowSpecifications] = useState(true);
    const [category, setCategory] = useState(null);
    const { t } = useTranslation(); // Initialize translation hook


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const allProducts = await getAllProducts();
                const foundProduct = allProducts.find(prod => prod.id === id); // Filter product by ID
                setCategory(foundProduct.type);
                setProduct(foundProduct);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
                window.scrollTo(0, 0); // Scroll to top after fetching product
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div className="loading-container"><Spin size="large" /></div>; // Centered spinner
    if (!product) return <div>Product not found</div>;

    const { name, description, images, price, specifications, power, powerSupply } = product;
    const specificationsData = Object.entries(product)
        .filter(([key, value]) =>
            value && key !== 'name' && key !== 'description' && key !== 'images' && key !== 'price' && key !== 'id' && key !== 'type'
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
        <>
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
                            <span className="price">

                                <span className='label'>
                                    {t("Price")}:
                                </span>


                                ${price}</span>

                            {(specifications || power || powerSupply) && (
                                <p className="description">
                                    <span className='label'> {t("specification")}:</span>
                                    {specifications || power || powerSupply}
                                </p>
                            )}

                            <span>

                                <p className='para'>

                                    {t('imgRef')}
                                    {/* Image is for reference only, the actual product serves as the standard. */}


                                </p>

                                <button onClick={() => { navigate('/contactUs') }} size="large" className="buy-now-button">
                                    {t('contactUs')}
                                </button>
                            </span>

                        </Card>
                    </Col>
                </Row>

                {specificationsData.length > 0 && (
                    <div>
                        <div className="toggle-buttons">
                            <button
                                className={showSpecifications ? 'active' : ''}
                                onClick={() => setShowSpecifications(true)}
                            >
                                {t("specification")}
                            </button>
                            <button
                                className={!showSpecifications ? 'active' : ''}
                                onClick={() => setShowSpecifications(false)}
                            >
                                {t("whyHostingContainer")}
                            </button>
                        </div>

                        {/* Show Specifications */}
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
                            /* Show Why Hosting Containers */
                            <div className="specifications">
                                <span>
                                    {t("whyDescription")}
                                </span>
                            </div>
                        )}
                    </div>
                )}

            </div >

            <div className='slider'>
                <h2 className='heading'>Other {category == "Others" ? "Accessories" : category}</h2>
                <ProductSlider category={category} />

            </div>


        </>

    );
}
