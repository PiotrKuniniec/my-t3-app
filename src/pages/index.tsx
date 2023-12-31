import Head from "next/head";

// import { api } from "~/utils/api";
import FoodOnScroll from "~/pages/components/FoodOnScroll/FoodOnScroll";
import Hero from "~/pages/components/Hero/Hero";
import Better4You from "~/pages/components/Better4You/Better4You";
import Product from "~/pages/components/Product/Product";
import Footer from "~/pages/components/Footer/Footer";

export default function Home() {
  //const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create My App</title>
        <meta name="description" content="Generated by PKuniniec" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Hero />
        <FoodOnScroll />
        <Product />
        <Better4You />
        <Footer />
        {/*{hello.data ? hello.data.greeting : null}*/}
      </main>
    </>
  );
}
