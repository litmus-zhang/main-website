import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { ECOSYSTEM, READINGS } from "../utils/constants";

const Home: NextPage = () => {
  const link = `mailto: ${process.env.DYNAGE_EMAIL}`;

  return (
    <div className="flex flex-col items-center justify-center py-2 font-primary">
      <Head>
        <title></title>
        <link rel="icon" href="/symbol.ico" />
      </Head>

      <main className="mx-auto mx-20">
        <section className="text-white-1 p-4 flex justify-between w-screen">
          <h1 className="uppercase font-bold text-7xl">
            The frontier of innovation
          </h1>
          <div className="">
            <p className="my-2">Dynage unlocks innovation, enabling unparalleled scaling & driving SaaS mass adoption</p>
            <Button text="Dynage Tech stack"/>
          </div>
        </section>
        <section className="flex gap-4 items-start justify-stretch my-4s">
          <div className="bg-white-1 lg:w-1/3 p-4 sm:w-[400px] lg:w-1/3 h-[450px] rounded-xl flex flex-col justify-between">
            <ul className="text-white-1 text-end flex flex-col gap-2 items-end">
              <li className="bg-dark p-4 w-fit rounded-lg text-lg">+50 Apps</li>
              <li className="bg-dark p-4 w-fit rounded-lg text-lg">+500k Active Users</li>
            </ul>
            <div className="my-3">
              <h1 className="text-4xl font-bold">Welcome to Dynage Technology</h1>
              <p className="border-l-4 pl-4 border-dark mx-2 my-3 ">
                Dynage, A digital studio focused on providing solutions to Finance and Real Estate industry at the bleeding edge of innovation and interoperability.
              </p>
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-2">

          <div className="bg-white-1 w-5/6 p-4 rounded-xl flex items-center h-[150px]">
            <div className="">
              <h1 className="text-4xl font-bold">Building the Unstoppable</h1>
              <p className="">
              Creating the future of finance and real estate with the most advanced technology stack in the world.
              </p>
            </div>
            <Image src={'/arrow.svg'} width={50} height={50}/>
          </div>
          <div className="flex gap-2 h-[300px]">
          <div className="bg-white-1 w-[400px] p-4 rounded-xl flex flex-col items-end">
            <div className="">
              <h1 className="text-4xl font-bold">2024 Starmap</h1>
              <p className="">
                See the list of products we are building and the roadmap to the future.
              </p>

            </div>
            <Image className="flex my-8" src={'/arrow.svg'} width={50} height={50}/>
          </div>
          <div className="bg-primary w-[400px] p-4 rounded-xl flex flex-col items-end">
            <div className="">
              <h1 className="text-4xl font-bold">Dynage Nigeria Lab</h1>
              <p className="">
                Dynage Nigeria Lab fuels the growth of African services and businesses.
              </p>

            </div>
            <Image className="flex my-8" src={'/arrow.svg'} width={50} height={50}/>
          </div>
          </div>
          </div>
        </section>
        <section className="my-4 text-center items-center justify-center">
          <h1 className="text-primary text-4xl my-3 font-bold">
            Join our Fast-Growing Ecosystem of Innovators
          </h1>
          <p className="text-white-2 my-4 mb-8 text-center">This is a startup guide on the top fastest growing startup ecosystems in the world</p>
          <ul className="flex justify-center items-center  gap-3 text-white-1 flex-wrap ">
            {
              ECOSYSTEM.map((item, index) => (
                <li className="border-2 border-white-1 rounded-lg w-[250px] h-[200px] " key={index}>
                  <div className="p-3 my-3">
                  <h1 className="text-primary text-2xl font-bold my-2">{item.title}</h1>
                  <p className="text-white-2">{item.p}</p>
                  </div>
                  <hr className="border border-white-1" />
                  <div className="flex justify-between font-bold p-4 cursor-pointer">
<p>
Learn more
</p>
                   <i>&rarr;</i>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
        <section className="my-6  flex  flex-col gap-3 items-center">
          <div className="text-center">
          <h1 className="text-primary text-4xl my-3 font-bold">
            Recommended Readings
          </h1>
          <p className="text-white-2 mb-6">
            Learn more about the Dynage ecosystem and how you can be a part of it.
          </p>
          </div>
          <ul className="flex flex-wrap gap-3">
  {
    READINGS.map((item, index) => (
      <li className="group flex flex-col border-2 border-white-2 w-[400px] rounded-2xl bg-dark even:bg-primary text-white-1 even:text-black" key={index}>
        <Image src={item.image} width={400} height={300} />
        <div className="p-4">
          <h1 className="text-2xl font-bold my-2">{item.title}</h1>
          <p className="mb-4 brightness-50  ">{item.p}</p>
          <Link href={item.link}>
            <a className="font-bold">Learn more &rarr;</a>
          </Link>
        </div>
      </li>
    ))
  }
</ul>
        </section>
        <section className="my-16 flex justify-center">
          <div className="bg-dark w-2/3 bg-transparent text-white-1 p-6 border border-white-2 rounded-lg text-center">
\            <h1 className="font-bold text-3xl"> Don't miss a beat</h1>
            <p className="text-white-2">
              Sign up for our newsletter to stay up to date on the latest news and updates from Dynage.
            </p>
            <input type="email" placeholder="Enter your email" className="bg-transparent border border-white-1 text-white-1 p-2 my-4 rounded-md active:border-primary "/>
           <Button text="Sign up" variant="primary" />
          </div>
        </section>
        <section className="my-10">
          <div className="uppercase text-center cursor-pointer text-7xl text-white-1 font-bold text-outline">
            Get in touch with us &rarr;
          </div>
        </section>
      </main>

      <footer className="flex bg-primary  w-full items-center p-4 justify-center">
       <ul className="uppercase text-lg font-bold flex items-center justify-around w-full">
        <li>Build</li>
        <li>Careers</li>
        <li>Terms & Conditions</li>
        <li>Learn</li>
        <li>Products</li>
       </ul>
      </footer>
    </div>
  );
};

export default Home;
