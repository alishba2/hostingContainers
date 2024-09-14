import React from "react";
import product1 from "../../assets/product.jpg";
import product2 from "../../assets/product2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductSlider = () => {
  const products = [
    {
      id: 1,
      name: "Miner A",
      image: product1,
      price: 1200,
      inStock: true,
      power: "20W",
    },
    {
      id: 2,
      name: "Miner B",
      image: product2,
      price: 1400,
      inStock: false,
      power: "34W",
    },
    {
      id: 3,
      name: "Miner C",
      image: product1,
      price: 1300,
      inStock: true,
      power: "20W",
    },
    {
      id: 4,
      name: "Miner D",
      image: product2,
      price: 1250,
      inStock: true,
      power: "34W",
    },
    {
      id: 5,
      name: "Miner E",
      image: product1,
      price: 1100,
      inStock: false,
      power: "20W",
    },
    {
      id: 6,
      name: "Miner F",
      image: product2,
      price: 1350,
      inStock: true,
      power: "34W",
    },
    {
      id: 7,
      name: "Miner G",
      image: product1,
      price: 1500,
      inStock: true,
      power: "20W",
    },
    {
      id: 8,
      name: "Miner H",
      image: product2,
      price: 1600,
      inStock: false,
      power: "34W",
    },
    {
      id: 9,
      name: "Miner I",
      image: product1,
      price: 1450,
      inStock: true,
      power: "20W",
    },
    {
      id: 10,
      name: "Miner J",
      image: product2,
      price: 1700,
      inStock: true,
      power: "34W",
    },
  ];
  const settings = {
    dots: false, // Remove the dots
    infinite: true,
    speed: 1000, // Smooth scrolling speed
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Auto-scroll interval
    pauseOnHover: false, // Keep scrolling when hovered
    pauseOnFocus: false, // Keep scrolling when focused
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
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <div className="product-info">
                <p>${product.price}</p>
                <p className={`power ${product.inStock ? "" : "out-of-stock"}`}>
                  {product.inStock ? product.power : "Out of Stock"}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
