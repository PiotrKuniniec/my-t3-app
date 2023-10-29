import Image from "next/image";
import { HeroImage } from "./Hero.styles";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse pt-4 sm:flex-row sm:pt-[10rem]">
      <HeroImage tw="py-7 sm:py-0 order-2 sm:order-1">
        <Image
          width={720}
          height={529}
          src="/dog-slide-3.jpeg"
          alt="dog picture with fresh food"
        />
      </HeroImage>
      <div className="align- order-1 flex max-w-7xl items-center px-10 sm:order-2">
        <div className="text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Your Dog</span>
            <span className="text-primary block">Favorite Food</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl md:mt-5 lg:mx-0">
            Give your dog the best food. Fresh and stack with vitamins, based on
            real food.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-8 sm:justify-start lg:justify-start">
            <button
              type="button"
              className="bg-primary hover:bg-secondary inline-flex w-full min-w-[120px] max-w-[120px] justify-center rounded-md px-5 py-3 text-sm text-white shadow-sm sm:ml-3"
            >
              Get started
            </button>
            <button
              type="button"
              className="ring-primary hover:bg-secondary hover:ring-secondary text-primary inline-flex w-full min-w-[160px] max-w-[160px] justify-center rounded-md bg-white px-5 py-3 text-sm shadow-sm ring-1 ring-inset hover:text-white sm:ml-3"
            >
              See our products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
