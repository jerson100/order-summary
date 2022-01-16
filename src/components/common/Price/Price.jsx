import React from "react";
import {
  PriceStyle,
  PriceIconStyle,
  PriceMoneyStyle,
  PriceChangeStyle,
} from "./price.style";

const Price = ({ icon, price, handleChange, plan }) => {
  return (
    <PriceStyle>
      <PriceIconStyle>
        <img src={icon} alt={plan} />
      </PriceIconStyle>
      <div>
        <p>{plan}</p>
        <PriceMoneyStyle>{price}</PriceMoneyStyle>
      </div>
      <PriceChangeStyle>Change</PriceChangeStyle>
    </PriceStyle>
  );
};

export default Price;
