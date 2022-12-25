import Image from "next/image";
import React from "react";

interface Props {}

function TestimonialCard(props: Props) {
  const {} = props;

  return (
    <div className="w-[400px] h-fit p-2 bg-white">
      <div className="flex gap-2">
        <div className="">
          <Image
            src={"/dynage-logo.svg"}
            alt="dynage Logo"
            width={40}
            height={40}
            className="rounded-full border  border-black"
          />
        </div>

        <div className="">
          <p className="my-0 font-bold">Lukmon Abdulsalam</p>
          <small>CEO @ Dynage</small>
        </div>
      </div>
      <p className="my-2 text-md font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, rem
        totam illo atque reiciendis iste dignissimos quibusdam illum odio fugit
        earum, eaque accusantium cupiditate omnis, ipsa tempora dolor ea quo.
      </p>
    </div>
  );
}

export default TestimonialCard;
