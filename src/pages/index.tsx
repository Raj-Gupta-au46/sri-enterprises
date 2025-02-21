import Image from "next/image";
import { Inter } from "next/font/google";
import { PublicLayout } from "@/layout";
import {
  About,
  Description,
  Final,
  HomePage,
  ImageHandler,
  Pannel,
  Professional,
  Work,
} from "@/component/homepage";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sri Enterprises</title>
      </Head>
      <PublicLayout>
        <HomePage />
        <About />
        <Description />
        <ImageHandler />
        <Pannel />
        <Professional />
        <Work />
        <Final />
      </PublicLayout>
    </>
  );
}
