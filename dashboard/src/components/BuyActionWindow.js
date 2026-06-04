// Buy action modal: captures inputs required to place a buy order.

import React, { useContext, useState } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL?.replace(/\/+$/, '');

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  // Stock price and quantitiy variables:
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // handle buy click:
  const handleBuyClick = async () => {
    if (!API_BASE_URL) {
      alert("Order API is not configured.");
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/newOrder`, {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY"
    },
    {
      withCredentials: true
    }
      );
      closeBuyWindow();
    } catch (err) {
      alert(err.response?.data?.message || "Unable to place buy order. Please try again.");
    }
  }


  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">

          {/* form */}
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button type="button" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button type="button" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
