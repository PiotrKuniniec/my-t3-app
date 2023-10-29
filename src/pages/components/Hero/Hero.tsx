import Image from "next/image";
import { HeroImage, HeroSection } from "./Hero.styles";

export default function Hero() {
  return (
    <HeroSection className="flex flex-col-reverse sm:flex-row">
      <HeroImage>
        <Image
          width={720}
          height={529}
          src="/dog-slide-3.jpeg"
          alt="dog picture with fresh food"
        />
      </HeroImage>
      <div className="mx-auto my-auto max-w-7xl">
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Your Dog</span>
              <span className="text-primary block">Favorite Food</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              Give your dog the best food. Fresh and stack with vitamins, based
              on real food.
            </p>
            <div className="mt-5 flex gap-2 sm:mt-8 sm:justify-start lg:justify-start">
              <button
                type="button"
                className="bg-primary hover:bg-secondary inline-flex w-full justify-center rounded-md px-5 py-3 text-sm text-white shadow-sm sm:ml-3 sm:w-auto"
              >
                Get started
              </button>
              <button
                type="button"
                className="ring-primary hover:bg-secondary hover:ring-secondary text-primary inline-flex w-full justify-center rounded-md bg-white px-5 py-3 text-sm shadow-sm ring-1 ring-inset hover:text-white sm:ml-3 sm:w-auto"
              >
                See our products
              </button>
            </div>
          </div>
        </main>
      </div>
    </HeroSection>
  );
}
