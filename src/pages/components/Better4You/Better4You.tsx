import Image from "next/image";

export default function Better4You() {
  return (
    <div className="flex w-screen">
      <div className="flex basis-1/2 flex-col justify-center">
        <div className="ml-72">
          <p className="text-5xl font-extrabold">Better for Them.</p>
          <p className="text-primary text-5xl font-extrabold">
            Easier for You.
          </p>
          <p className="max-w-xl">
            Skip the stores, preservatives, and retail markups. Our
            vet-developed plans guide you to the best diet, while
            perfectly-timed refrigerated deliveries make sure you never run out.
          </p>
          <div className="max-w-xl">
            <div className="mt-8 inline-flex">
              <div className="border-primary mb-4 border-b-4 text-xl font-bold">
                What&apos;s for you?
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-md w-40">Free & Flexible Deliveries</p>
              <p className="text-md w-40">Nationwide Shipping</p>
              <p className="text-md w-40">Eco Friendly Packaging</p>
              <p className="text-md w-40">Adjust Orders Anytime</p>
            </div>
            <div className="py-8">
              <button
                type="button"
                className="ring-primary hover:bg-secondary hover:ring-secondary text-primary inline-flex w-full min-w-[160px] max-w-[160px] justify-center rounded-md bg-white px-5 py-3 text-sm shadow-sm ring-1 ring-inset hover:text-white"
              >
                Give a try
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex basis-1/2">
        <Image
          layout="responsive"
          width={1200}
          height={400}
          src="/dog_food_1.jpg"
          alt="dog picture with fresh food"
        />
      </div>
    </div>
  );
}
