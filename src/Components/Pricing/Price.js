import React from "react";
import "../Header/Header.css";
import HText from "../HeaderText/HText";
import "./Pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Price = () => {
  const correct = <FontAwesomeIcon icon={faCheck} />;

  return (
    <div className="pricing">
      <section className="banner pricing-banner Header text-light">
        <h1 className="text-center">PRICING PLANS</h1>
      </section>

      <section className="pricingCards">
        <div className="m-5">
          <h1 className="text-center text-warning">
            CHOOSE THE OFFERS<span className="text-dark"> THAT SUITS YOU</span>
          </h1>
          <p className="text-center text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            corrupti? Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4 m-5 text-light">
          <div className="col">
            <div className="card price-1 h-100">
              <div className="card-body text-center">
                <h5 className="card-title bill-text">BILLED MONTHLY</h5>
                <h1>ADVANCED PLAN</h1>
                <p className="amount">$140</p>
                <div className="amount-list">
                  <p>{correct}Mobile-optimized</p>
                  <p>{correct}Best hosting</p>
                  <p>{correct}Free custom</p>
                  <p>{correct}Outstanding</p>
                  <p>{correct}Happy customers</p>
                </div>
                <a className="btn btn-warning text-center" href="/">
                  PURCHASE
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card price-2 h-100">
              <div className="card-body text-center">
                <h5 className="card-title bill-text">BILLED MONTHLY</h5>
                <h1>BASIC PLAN</h1>
                <p className="amount">$120</p>
                <div className="amount-list">
                  <p>{correct}Mobile-optimized</p>
                  <p>{correct}Best hosting</p>
                  <p>{correct}Free custom</p>
                  <p>{correct}Outstanding</p>
                  <p>{correct}Happy customers</p>
                </div>
                <a className="btn btn-warning text-center" href="/">
                  PURCHASE
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card price-3 h-100">
              <div className="card-body text-center">
                <h5 className="card-title bill-text">BILLED MONTHLY</h5>
                <h1>BEGINNERS</h1>
                <p className="amount">$90</p>
                <div className="amount-list">
                  <p>{correct}Mobile-optimized</p>
                  <p>{correct}Best hosting</p>
                  <p>{correct}Free custom</p>
                  <p>{correct}Outstanding</p>
                  <p>{correct}Happy customers</p>
                </div>
                <a className="btn btn-warning text-center" href="/">
                  PURCHASE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
