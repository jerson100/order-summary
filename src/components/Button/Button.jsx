import React from "react";
import PropTypes from "prop-types";
import { ButtonShadowStyle, ButtonStyle } from "./button.style";

const Button = ({ children, size, isShadow, type, block }) => {
  switch (type) {
    case "normal":
      return isShadow ? (
        <ButtonShadowStyle size={size} block={block}>
          {children}
        </ButtonShadowStyle>
      ) : (
        <ButtonStyle size={size} block={block}>
          {children}
        </ButtonStyle>
      );
    case "gosth":
      return (
        <ButtonStyle size={size} block={block}>
          {children}
        </ButtonStyle>
      );
  }
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "big"]).isRequired,
  type: PropTypes.oneOf(["normal", "gosht"]).isRequired,
  isShadow: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  size: "normal",
  type: "normal",
  isShadow: false,
  block: false,
};

export default Button;
