import styled from "styled-components";

const BodyStyle = styled.div`
  padding: 2rem 1.8rem;
  background-color: #fff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding: 0 0.5rem;
  font-weight: 900;
`;

const Description = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.light.default.desaturatedBlue};
  padding: 0 0.5rem;
`;

const BodyCancelStyle = styled.p`
  color: ${({ theme }) => theme.colors.light.default.desaturatedBlue};
  font-weight: 700;
  font-size: 0.9rem;
`;

export { BodyStyle, Title, Description, BodyCancelStyle };
