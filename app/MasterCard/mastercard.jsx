import React from "react";
import Image from "next/image";
import "./mastercard.css";

const Mastercard = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <div className="logo-header">
            <Image
              src="/master-logo.png"
              alt="master logo"
              width="55"
              height="0"
              className="logo"
            />

            {/* <h4 className="masterCard">Kaego's Card</h4> */}
            <h4 className="masterCard">Kaego&apos;s Card</h4>
          </div>
          <Image
            src="/master-chip.png"
            className="chip"
            alt="Chip"
            width="60"
            height="0"
          />
        </div>
        <div className="card-details">
          <div className="card-valid">
            <div>Card Number</div>
            <div className="valid">Valid thru</div>
          </div>
          <div className="code">
            <div className="number">6024 5893 2438 4801</div>
            <div className="date">04/17</div>
          </div>
          <p className="nwakaego">Nwakaego Nwaekpe</p>
        </div>
      </div>
    </div>
  );
};

export default Mastercard;
