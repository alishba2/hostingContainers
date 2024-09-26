import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getAllProducts } from "../../firebase/firebase";

const ProductSlider = () => {
  const [products, setProduct] = useState([]);

  let getProducts = async () => {
    let res = await getAllProducts();
    setProduct(res);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const truncateName = (name, maxLength = 15) => {
    return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
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
          slidesToShow: 1, // Show only 1 slide on mobile
          slidesToScroll: 1, // Scroll one at a time
          infinite: true, // Keep it infinite
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.name} />
            <h3>{truncateName(product.name)}</h3>
            <div className="product-info">
              <p>${product.price}</p>
              <p className={`power ${product.inStock ? "" : "out-of-stock"}`}>
                {product.voltage}
              </p>

            </div>

            <button style={{ background: "white", border: "1px solid white", borderRadius: "10px", color: "black", padding: "4px", fontSize: "14px", marginTop: "5px", width: "100%" }}>Contact Us</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
