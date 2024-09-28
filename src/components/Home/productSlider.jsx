import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getAllProducts } from "../../firebase/firebase";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Spinner } from 'react-bootstrap'; // Import Spinner from react-bootstrap

const ProductSlider = ({ category }) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true); // Initialize loading state
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  let getProducts = async () => {
    setLoading(true); // Set loading to true before fetching
    let res = await getAllProducts();
    const filteredProducts = res.filter(product => product.type === category);
    setProduct(filteredProducts);
    setLoading(false); // Set loading to false after fetching
  };

  useEffect(() => {
    getProducts();
  }, []);

  const truncateName = (name, maxLength = 15) => {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`); // Navigate to product detail page
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      {loading ? ( // Display loader if loading
        <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
          <Spinner animation="border" variant="primary" /> {/* Bootstrap Loader */}
        </div>
      ) : (
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)} // Add click handler
              style={{ cursor: "pointer" }} // Add pointer cursor for visual feedback
            >
              <img src={product.images[0]} alt={product.name} />
              <h3>{truncateName(product.name)}</h3>
              <div className="product-info">
                <p>${product.price}</p>
                <p className={`power`}>
                  {(() => {
                    const text = product.specifications || product.power || product.powerSupply;
                    if (text) {
                      return text.length > 8 ? text.slice(0, 5) + '...' : text;
                    }
                    return ''; // return empty if there's no text
                  })()}
                </p>
              </div>
              <button className="btn">{t('contact_us')}</button>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductSlider;
