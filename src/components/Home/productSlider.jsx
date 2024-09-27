import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getAllProducts } from "../../firebase/firebase";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductSlider = ({ category }) => {
  const [products, setProduct] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  let getProducts = async () => {
    let res = await getAllProducts();
    const filteredProducts = res.filter(product => product.type === category);
    setProduct(filteredProducts);
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
    </div>
  );
};

export default ProductSlider;
