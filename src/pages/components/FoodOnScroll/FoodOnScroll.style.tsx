import styled from "styled-components";
// import {mediaResponsiveFn} from "@styles/media.style";

export const FoodOnScrollSection = styled.section`
  grid-column: center-start / center-end;
  display: flex;
  //flex-direction: column;
  justify-content: space-between;
  padding-top: 5rem;
  //max-width: 45rem;
  width: 100%;
`;

export const FoodChangeContainer = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
  max-width: 45rem;
  //order: 1;
`;

export const FoodBowls = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;
  margin: 12px;
`;

export const DivFilterChangerBar = styled.div<{ position: number }>`
  height: 100%;
  border-right: 4px solid #fff;
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100%;
  transform: translate(-${(props) => props.position || 0}%, -50%);
`;

export const PictureOne = styled.img`
  border-right: 4px solid transparent;
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

export const PictureTwo = styled(PictureOne)<{ clipCut: number }>`
  clip-path: inset(0px ${(props) => props.clipCut || 0}% 0px 0px);
`;

export const FoodInfoLeft = styled.div`
  display: flex;
  gap: 8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //order: 2;
`;

export const FoodInfoRight = styled(FoodInfoLeft)`
  order: 3;
`;

export const InfoCard = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
`;

export const OrderButton = styled.div`
  grid-column: col-start 4 / col-end 5;
`;
