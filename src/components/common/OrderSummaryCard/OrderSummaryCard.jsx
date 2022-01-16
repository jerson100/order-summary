import React from "react";
import Body from "./components/Body";
import Top from "./components/Top/Top";
import { ContainerStyle } from "./orderSummaryCard.style";
import { containerVariants } from "./orderSummaryCard.variants";

const OrderSummaryCard = ({ title, description, img }) => {
  return (
    <ContainerStyle
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Top img={img} />
      <Body title={title} description={description} />
    </ContainerStyle>
  );
};

export default OrderSummaryCard;
