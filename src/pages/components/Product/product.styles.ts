import styled from "styled-components";
import { mediaResponsiveFn } from "~/styles/media.styles";

export const ProductMainContent = styled.div`
  display: flex;
  padding-top: 6rem;
  padding-bottom: 10rem;
  max-width: 80%;
`;

export const FreshFoodContent = styled.div``;

export const ProductInfo = styled.div`
  display: flex;
  //flex-direction: column;
  margin: 0 auto;
  gap: 5rem;
  //max-width: 1200px;

  width: 100%;
  //padding-top: 10rem;
`;

export const ProductPackage = styled.div`
  position: relative;
  flex-basis: 44%;
  width: 100%;
  display: flex;
  justify-content: center;

  ${mediaResponsiveFn("md")`
    justify-content: start;
  `}
`;

export const PackageOne = styled.div`
  position: relative;
  width: 20rem;
  height: auto;
  transform: scale(0.9);
`;

export const PackageTwo = styled.div`
  position: relative;
  width: 20rem;
  height: auto;
  z-index: 10;
  transform: scale(0.9);
  margin-left: -19%;
`;

export const LabelProduct = styled.div`
  position: absolute;

  top: 8rem;
  left: 28%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelImage = styled.div`
  width: 3rem;
  height: 3rem;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;

export const DescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
`;
