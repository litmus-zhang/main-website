import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function SupportWidget() {
  return (
    <a
      href="https://wa.link/dsy01a"
      className="fixed bottom-2 right-2 bg-green-500 flex items-center p-2 cursor-pointer rounded-t-md rounded-bl-md text-white"
    >
      <BsWhatsapp className="inline-block mr-2" />
      Chat with us
    </a>
  );
}

export default SupportWidget;
