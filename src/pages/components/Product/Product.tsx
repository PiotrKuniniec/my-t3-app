import Image from "next/image";

import {
  ProductMainContent,
  ProductInfo,
  ProductPackage,
  ProductDescription,
  PackageOne,
  PackageTwo,
  DescriptionItem,
  LabelProduct,
  LabelImage,
  FreshFoodContent,
} from "src/pages/components/Product/product.styles";

export default function Product() {
  return (
    <>
      <ProductMainContent>
        <FreshFoodContent className="lg:px-24">
          <ProductInfo>
            <ProductPackage>
              <PackageOne>
                <Image
                  src="/real-food-pack-2.png"
                  layout="responsive"
                  width={360}
                  height={622}
                  alt="Real Food Package With Beef"
                />
                <LabelProduct>
                  <LabelImage>
                    <Image
                      src="/dog-face-3@2x.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="Dog face doodle"
                    />
                  </LabelImage>
                  <p className="text-xl sm:py-2">Sally</p>
                  <p className="text-base">Chicken Recipe</p>
                  <p className="text-primary pb-2 pt-32 text-base">
                    #DogsterooPic
                  </p>
                  <p className="text-xs">Made Fresh. Keep Frozen.</p>
                  <p className="text-xs">Feed within 4 months</p>
                </LabelProduct>
              </PackageOne>
              <PackageTwo>
                <Image
                  src="/real-food-pack-1.png"
                  layout="responsive"
                  width={360}
                  height={622}
                  alt="Real Food Package With Chicken"
                />
                <LabelProduct>
                  <LabelImage>
                    <Image
                      src="/dog-face-1@2x.png"
                      layout="responsive"
                      width={50}
                      height={50}
                      alt="Dog face doodle"
                    />
                  </LabelImage>
                  <p className="text-2xl sm:py-2">Buddy</p>
                  <p className="text-base">Beef Recipe</p>
                  <p className="text-primary pb-2 pt-32 text-base">
                    #DogsterooPic
                  </p>
                  <p className="text-xs">Made Fresh. Keep Frozen.</p>
                  <p className="text-xs">Feed within 4 months</p>
                </LabelProduct>
              </PackageTwo>
            </ProductPackage>
            <ProductDescription>
              <div>
                <p className="text-5xl font-extrabold">Personalised plans.</p>
                <p className="text-primary text-5xl font-extrabold">
                  Always fresh and easy.
                </p>
              </div>
              <DescriptionItem>
                <p className="text-secondary text-xl font-extrabold">
                  Human-grade Food
                </p>
                <p className="text-base">
                  Human-grade food in human-friendly packaging. Less processing,
                  higher safety standards, and easy serving — just open and
                  pour!
                </p>
              </DescriptionItem>
              <DescriptionItem>
                <p className="text-secondary text-xl font-extrabold">
                  Personalized Plans
                </p>
                <p className="text-base">
                  A vet-designed plan is customized to your dog’s individual
                  needs. Meals are pre-made and pre-portioned to their calorie
                  needs based on the profile you create.
                </p>
              </DescriptionItem>
              <DescriptionItem>
                <p className="text-secondary text-xl font-extrabold">
                  Delivered Within Days
                </p>
                <p className="text-base">
                  Your food is delivered to you within days of cooking. Never
                  deep frozen. Never stored on a shelf for months.
                </p>
              </DescriptionItem>
            </ProductDescription>
          </ProductInfo>
        </FreshFoodContent>
      </ProductMainContent>
    </>
  );
}
