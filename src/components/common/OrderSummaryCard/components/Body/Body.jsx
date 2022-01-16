import React from "react";
import Price from "../../../Price/Price";
import { BodyStyle, Description, Title, BodyCancelStyle } from "./body.style";
import iconMusic from "../../../../../assets/img/svg/icon-music.svg";
import Button from "../../../../Button/Button";

const Body = ({ title, description }) => {
  return (
    <BodyStyle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price icon={iconMusic} price="$59.99/year" plan="Annual Plan" />
      <Button isShadow block>
        Proceed to Payment
      </Button>
      <BodyCancelStyle>Cancel Order</BodyCancelStyle>
    </BodyStyle>
  );
};

export default Body;
