import styled from "styled-components";

const HomePageStyle = styled.div`
  background-color: ${({ theme }) => theme.colors.light.default.paleBlue};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
`;

export { HomePageStyle };
