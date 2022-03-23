import { init, send } from "emailjs-com";
import React, { useState } from "react";

init("l2cNnJYpEYeatm-L3");
export default function Home() {
  const [Email, setEmail] = useState("");

  const onSubmit = (data) => {
    // console.log(data);
    generateContactNumber();
    sendForm("default_service", "YOUR_TEMPLATE_ID", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div className=" text-center h-screen bg-[#131312] ">
      <div className=" pt-20 md:pt-0 ">
        <div className="uppercase text-[4rem] lg:text-[10rem] xl:text-[16rem] tracking-[0.35rem] lg:tracking-[0.85rem] xl:tracking-[0.99rem]  pt-12 lg:pt-0 text-transparent stroke bg-clip-text bg-gradient-to-br from-[#03AFD0] via-[#812DC1] to-[#56109D] ">
          respct
        </div>
        <div className="m-auto text-white pt-6 md:pt-0  ">
          <span className=" text-3xl lg:text-6xl xl:text-7xl">Coming Soon</span>
          <div className=" text-lg lg:text-xl xl:text-xl mt-2 md:mt-5 md:mx-48">
            {" "}
            A Web3 platform that uses level-based social NFTs, incentivizing
            fans through un-lockable perks & engagement.
          </div>

          <div className=" mt-12 md:mt-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("EMail", Email);
                send(
                  "service_3rcb66l",
                  "template_zdbh9hw",
                  { Email },
                  "l2cNnJYpEYeatm-L3"
                );
              }}
            >
              <input
                type="email"
                name="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(Email);
                }}
                className=" rounded-l-xl pl-3 text-black md:pl-2 text-sm py-1"
                placeholder="interested@respct"
              />
              <button
                type="submit"
                className="bg-gredient-dark hover:bg-gredient-lighttext-white font-bold text-sm py-1 pl-1 pr-3 md:pr-2 rounded-r-xl "
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
