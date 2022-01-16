import React from "react";
import OrderSummaryCard from "../../../components/common/OrderSummaryCard/OrderSummaryCard";
import { HomePageStyle } from "./homePage.style";
import Img from "../../../assets/img/svg/illustration-hero.svg";

const HomePage = () => {
  return (
    <HomePageStyle>
      <OrderSummaryCard
        title="Order Summary"
        description="You can now listen to millions of songs, audiobooks, and podcasts on any 
        device anywhere you like!"
        img={Img}
      />
    </HomePageStyle>
  );
};

export default HomePage;
