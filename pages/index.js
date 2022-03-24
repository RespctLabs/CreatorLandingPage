import React from "react";
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import F from "../public/svg/f.svg";
import Image from "next/image";
import Mobile from "../public/svg/mobile.png";

import Twitter from "../public/svg2/twitter.svg";
import Discord from "../public/svg2/discord.svg";

export default function Home() {
  return (
    <div className="h-screen bg-OurBlack">
      <div id="header" className=" md:pt-6 ">
        <div className="vishnugaandu rounded-2xl mx-3 bg-OurBlack">
          <div className="flex justify-between  drop-shadow-2xl  text-white">
            <div className="md:ml-5 md:mt-2">
              <Image src={F} alt="logo" />
            </div>
            <div className="flex flex-col justify-center text-3xl">
              <p className=" text-transparent bg-clip-text font-bold text-transparent stroke bg-clip-text bg-gradient-to-br from-[#03AFD0] via-[#812DC1] to-[#56109D] ">
                respct
              </p>
            </div>
            <div className="md:mr-5 md:mt-3">
              <Image src={Twitter} alt="logo" />
              <Image src={Discord} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:h-full md:mx-24 md:mt-16">
        <div
          id="image"
          className="  h-screen bg-respct bg-no-repeat bg-top text-white"
        >
          <div className="flex justify-around pt-20 ">
            <div id="ls" className="flex flex-col m-auto mt-48 w-1/2">
              <div className="mr-24 text-[#C4C4C4] font-[900] text-6xl font-Archivo ">
                NFTs are more than JEPGs
              </div>
              <div className="font-Poppins w-2/4">
                Level-based <b>Social NFTs</b>, incentivizing fans through
                un-lockable perks & engagement.
              </div>
            </div>
            <div id="rs" className=" w-1/2">
              <Image src={Mobile} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
