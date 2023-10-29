import styled from "styled-components";

export const HeroSection = styled.section`
  grid-column: center-start / center-end;
  padding-top: 10rem;
`;

export const HeroImage = styled.div`
  max-width: 60rem;

  & > span > img {
    clip-path: none;
  }
`;
