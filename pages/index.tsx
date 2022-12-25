import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";

const Home: NextPage = () => {
  const link = `mailto: ${process.env.DYNAGE_EMAIL}`;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title></title>
        <link rel="icon" href="/symbol.ico" />
      </Head>

      <main>
        <div className="flex w-full flex-1 h-screen flex-col items-center justify-center px-16 text-center">
          <p>We develop solutions for </p>

          <h1 className="text-6xl font-bold my-1">
            Redefining the future of Finance and Real Estate
          </h1>
          <a href={link}>
            <Button
              text="Contact Us"
              type="button"
              size="large"
              variant="primary"
            />
          </a>
        </div>
        <div className="bg-gray-200 w-full p-8">
          <h1 className="text-xl mb-6">Testimonials</h1>
          <div className="flex flex-wrap gap-4">
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
          </div>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by{" "}
        <Image
          src="/dynage-logo.svg"
          alt="dynage Logo"
          width={72}
          height={16}
        />
      </footer>
    </div>
  );
};

export default Home;
