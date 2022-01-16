import styled from "styled-components";

const TopStyle = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-image: ${({ url }) => `url(${url})`};
  max-width: 100%;
  width: 100%;
  background-size: cover;
  height: 160px;
`;

export { TopStyle };
