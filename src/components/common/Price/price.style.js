import styled from "styled-components";

const PriceStyle = styled.div`
  align-items: center;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.light.default.VeryPaleBlue};
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const PriceIconStyle = styled.div`
  line-height: 0;
`;
const PriceMoneyStyle = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.light.default.desaturatedBlue};
`;
const PriceChangeStyle = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.light.default.brightBlue};
`;

export { PriceStyle, PriceIconStyle, PriceMoneyStyle, PriceChangeStyle };
