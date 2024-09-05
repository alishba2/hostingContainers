import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

import bannerImg1 from "../../assets/bannerImg1.jpg";
import bannerImg2 from "../../assets/bannerImg2.jpg";
import bannerImg3 from "../../assets/bannerImg3.jpg";


export default function Banner() {
    return (
        <div className="banner">
            <Carousel
                autoPlay
                infiniteLoop

                showArrows={false} // Hide navigation arrows
                showStatus={false} // Hide slide status
                showThumbs={false} // Hide thumbnail indicators
                swipeable // Allow swipe on mobile
            >
                <div className="slide-content">
                    <img src={bannerImg1} alt="Banner 1" className="carousel-image" />
                    <div className="text-overlay">
                        <h1>Heading 1</h1>
                        <p>This is a paragraph of text for the first slide. Add more details here.</p>
                    </div>
                </div>
                <div className="slide-content">
                    <img src={bannerImg2} alt="Banner 2" className="carousel-image" />
                    <div className="text-overlay">
                        <h1>Heading 2</h1>
                        <p>This is a paragraph of text for the second slide. Add more details here.</p>
                    </div>
                </div>
                <div className="slide-content">
                    <img src={bannerImg3} alt="Banner 3" className="carousel-image" />
                    <div className="text-overlay">
                        <h1>Heading 3</h1>
                        <p>This is a paragraph of text for the third slide. Add more details here.</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

