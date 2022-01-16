import styled, { css } from "styled-components";

const block = () => {
  return ({ block }) =>
    block
      ? css`
          display: block;
          width: 100%;
        `
      : css`
          display: inline-block;
        `;
};

const sizes = {
  small: {
    padding: ".7rem .8rem",
  },
  normal: {
    padding: ".9rem 1rem",
  },
  big: {
    padding: "1.3rem 1.5rem",
  },
};

const ButtonBase = styled.button.attrs((props) => ({
  size: props.size || "normal",
  color: props.color
    ? props.theme.colors.light.default[props.color]
    : props.theme.colors.light.default.brightBlue,
}))`
  border-radius: 10px;
  outline: none;
  border: solid 1px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  text-align: center;
  ${block()}
  line-height: 1;
  font-family: inherit;
  padding: ${({ size }) => sizes[size].padding};
  cursor: pointer;
  background-color: ${({ color }) => color};
  color: #fff;
  margin-bottom: 1.5rem;
`;

//por si quiero algunas caraterísticas diferente - como un dashed
const ButtonStyle = styled(ButtonBase)``;

const ButtonShadowStyle = styled(ButtonStyle)`
  box-shadow: 0 10px 40px -10px ${({ color }) => color};
`;

export { ButtonBase, ButtonStyle, ButtonShadowStyle };
