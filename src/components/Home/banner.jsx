import React from "react";

const banner = () => {
  return (
    <>
      <div className="banner-main">
        <div className="marquee-main">
          <marquee width="100%" direction="right" height="100px">
            This is a sample scrolling text that has scrolls texts to the
            right.This is a sample scrolling text that has scrolls texts to the
            right.This is a sample scrolling text that has scrolls texts to the
            right.
          </marquee>
        </div>
        <div className="banner-inner">
          <div class='overlay'></div>

          <div className="banner-content h-center flex-column">
            <p className="paraSmall">
              The Best Crypto Mining Service Providers in GCC
            </p>
            <h4>Start your mining Journey with Crypto Miners</h4>
            <h2 className="">HOSTING CONTAINERS</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              nobis voluptas sapiente.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Amet nobis voluptas sapiente.
            </p>
            <button className="btn-primary mt-2">Start Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default banner;
