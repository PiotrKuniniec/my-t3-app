import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  DivFilterChangerBar,
  FoodChangeContainer,
  FoodBowls,
  PictureOne,
  PictureTwo,
  FoodInfoLeft,
  FoodInfoRight,
  FoodOnScrollSection,
  InfoCard,
  OrderButton,
} from "./FoodOnScroll.style";

export default function FoodOnScroll() {
  const [scrollY, setScrollY] = useState(0);

  function saveScrollY() {
    if (window.scrollY > 200 && window.scrollY < 700)
      setScrollY((window.scrollY - 200) / 7);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", saveScrollY);
    }

    watchScroll();
    return () => {
      window.removeEventListener("scroll", saveScrollY);
    };
  });

  return (
    <>
      <FoodOnScrollSection>
        <FoodInfoLeft>
          <InfoCard>
            <div className="relative mb-4 h-16 w-16">
              <Image
                src="/real-food-1.png"
                width="60"
                height="60"
                alt="Reel Food Icon presenting"
              />
            </div>
            <h3>Real Food</h3>
            <p>Human-grade meat and veggies in simple recipes, made</p>
          </InfoCard>
          <InfoCard>
            <div className="relative mb-4 h-16 w-16">
              <Image
                src="/real-food-2.png"
                width="60"
                height="60"
                alt="Reel Food Icon presenting"
              />
            </div>
            <h3>Real Food</h3>
            <p>Human-grade meat and veggies in simple recipes, made</p>
          </InfoCard>
        </FoodInfoLeft>
        <FoodChangeContainer>
          <FoodBowls>
            <picture>
              <source type="image/webp" srcSet="/real-food-bowl-6.png" />
              <source type="image/png" srcSet="/real-food-bowl-6.png" />
              <PictureOne alt="Bowl of The Farmer's Dog" />
            </picture>
            <picture>
              <source type="image/webp" srcSet="/real-food-bowl-5.png" />
              <source type="image/png" srcSet="/real-food-bowl-5.png" />
              <PictureTwo alt="Bowl of ingredients" clipCut={scrollY} />
            </picture>
            <DivFilterChangerBar position={50 + scrollY} />
          </FoodBowls>
        </FoodChangeContainer>
        <FoodInfoRight>
          <InfoCard>
            <div className="relative mb-4 h-16 w-16">
              <Image
                src="/real-food-4.png"
                width="60"
                height="60"
                alt="Reel Food Icon presenting"
              />
            </div>
            <h3>Real Food</h3>
            <p>Human-grade meat and veggies in simple recipes, made</p>
          </InfoCard>
          <InfoCard>
            <div className="relative mb-4 h-16 w-16">
              <Image
                src="/real-food-4.png"
                width="60"
                height="60"
                alt="Reel Food Icon presenting"
              />
            </div>
            <h3>Real Food</h3>
            <p>Human-grade meat and veggies in simple recipes, made</p>
          </InfoCard>
        </FoodInfoRight>
      </FoodOnScrollSection>
      <OrderButton className="my-40 rounded-md shadow md:mb-40 md:mt-12">
        <a
          href="#"
          className="bg-primary hover:bg-primary-dark flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white md:px-10 md:py-4 md:text-lg"
        >
          Get started
        </a>
      </OrderButton>
    </>
  );
}
