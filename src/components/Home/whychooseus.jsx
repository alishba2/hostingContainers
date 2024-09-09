import React from "react";
import { Icon } from "@iconify/react";

const Whychooseus = () => {
  return (
    <>
      <div className="why-choose-container">
        <h1 className="text-center">Why Choose Us</h1>
        <div className="listItem">
          <div className="order">
            <Icon color="#FFF" icon="et:documents" width={40} height={40} />
            <h2 className="paraMedium text-center">
              Comprehensive performance reports
            </h2>
            <p className="paraMedium text-center">
              As soon as you sign your contract, you'll be kept informed of our
              team's work.From the moment your crypto mining machine is up and
              running, you'll be kept up to datewith comprehensive, fully
              transparent reports.
            </p>
          </div>

          <div className="order">
            <Icon
              color="#FFF"
              icon="heroicons:currency-dollar-solid"
              width={40}
              height={40}
            />
            <h2 className="paraMedium text-center">Profitable investment</h2>
            <p className="paraMedium text-center">
              Thanks to our volume of business, we offer the lowest mining
              machine and electricity prices in the world. Talk to our
              representatives today and find how profitable your investment can
              be. Start Today!
            </p>
          </div>

          <div className="order">
            <Icon
              color="#FFF"
              icon="grommet-icons:user-expert"
              width={40}
              height={40}
            />
            <h2 className="paraMedium text-center">Certified Experts</h2>
            <p className="paraMedium text-center">
              Maintaining mining machines to produce maximum efficiency is a
              major challenge which is why Crypto Miners has certified experts
              ensuring all miners run at optimum capacity.
            </p>
          </div>

          <div className="order">
            <Icon
              color="#FFF"
              icon="mdi:charity-outline"
              width={40}
              height={40}
            />
            <h2 className="paraMedium text-center">Passive income</h2>
            <p className="paraMedium text-center">
              Receive the cryptocurrency of your choice (BTC, LTC, etc.)
              directly into your own wallet. CryptoMiners take no commission on
              your mining, which means you keep what you earn entirely, the
              entire output of your machines is returned to you daily in your
              wallet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whychooseus;
