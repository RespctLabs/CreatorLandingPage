import React from "react";
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import F from "../public/svg/f.svg";
import Dropping from "../public/svg/dropping.svg";

import Image from "next/image";
import Mobile from "../public/svg/mobile.png";

import Twitter from "../public/svg2/twitter.svg";
import Discord from "../public/svg2/discord.svg";

export default function Home() {
  return (
    <div className=" bg-OurBlack">
      <div id="header" className=" xl:pt-6 ">
        <div className="vishnugaandu rounded-2xl lg:mx-9 bg-OurBlack">
          <div className="flex justify-between  drop-shadow-2xl  text-white">
            <div className="xl:ml-5 xl:mt-2">
              <Image src={F} alt="logo" />
            </div>
            <div className="flex flex-col justify-center text-3xl">
              <p className=" text-transparent bg-clip-text font-bold text-transparent stroke bg-clip-text bg-gradient-to-br from-[#03AFD0] via-[#812DC1] to-[#56109D] ">
                respct
              </p>
            </div>
            <div className="xl:mr-5 xl:mt-3">
              <Image src={Twitter} alt="logo" />
              <Image src={Discord} alt="logo" />
            </div>
          </div>
        </div>
      </div>
      <div className=" xl:mx-24 xl:mt-10">
        <div
          id="image"
          className=" mb-12 bg-respct bg-no-repeat bg-top text-white bg-contain"
        >
          <div className="flex justify-around ">
            <div id="ls" className="flex flex-col m-auto w-1/2 ">
              <div className=" text-[#C4C4C4] font-[900] lg:text-6xl xl:text-9xl font-Archivo ">
                NFTs are more than JEPGs
              </div>
              <div className="font-Poppins lg:w-3/5 xl:w-4/5 xl:text-2xl lg:pt-8">
                Level-based <b>Social NFTs</b>, incentivizing fans through
                un-lockable perks & engagement.
              </div>
            </div>
            <div id="rs" className=" lg:w-1/2">
              <Image src={Mobile} alt="logo" layout="intrinsic" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className=" lg:text-3xl xl:text-4xl text-[#01AAD0]">
          Found interesting?
        </div>
        <div className="lg:text-xl xl:text-2xl text-[#C7C7C7]">
          Join the wait list now!
        </div>
        <div className="lg:mt-3 xl:mt-5">
          <input
            type="text"
            placeholder="Email"
            className="rounded-xl bg-[#5A5A5A] text-sm py-1 xl:py-2 px-2 lg:w-2/6"
          />
        </div>
        <button
          className="mt-2 rounded-2xl bg-[#01AAD0] lg:px-6 xl:px-9 xl:py-2 text-white"
          type="submit"
        >
          {" "}
          Join{" "}
        </button>
      </div>
      <div className="text-center mt-8 xl:pb-4">
        <Image src={Dropping} alt="logo" />
      </div>
    </div>
  );
}
