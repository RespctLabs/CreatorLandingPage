import React, { useState } from "react";
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import F from "../public/svg/f.svg";
import Dropping from "../public/svg/dropping.svg";
import Link from "next/link";
import Image from "next/image";
import Mobile from "../public/svg/mobile.png";

import Twitter from "../public/svg2/twitter.svg";
import Discord from "../public/svg2/discord.svg";

import { init, send } from "emailjs-com";

init("pXLToiKJidusdQrMc");

export default function Home() {
    const [Email, setEmail] = useState("");
    const [Loading, setLoading] = useState(false);
    const [Sent, setSent] = useState(false);

    return (
        <div className=" bg-OurBlack">
            <div id="header" className="py-6 xl:pt-6 ">
                <div className="   mx-4 lg:mx-9 bg-OurBlack">
                    <div className="flex justify-between  drop-shadow-2xl  text-white px-3">
                        <div className="my-1 xl:ml-5 xl:mt-2 ">
                            <Image src={F} alt="logo" />
                        </div>
                        {/* <div className="flex flex-col justify-center text-3xl">
              <p className=" text-transparent bg-clip-text font-bold text-transparent stroke bg-clip-text bg-gradient-to-br from-[#03AFD0] via-[#812DC1] to-[#56109D] ">
                respct
              </p>
            </div> */}
                        <div className=" flex my-3 xl:mr-2 xl:mt-4">
                            <div className="mx-2">
                                <Link href="https://twitter.com/RespctClub">
                                    <Image src={Twitter} alt="logo" className="hover:cursor-pointer"/>
                                </Link>
                            </div>
                            <div className="mx-2">
                                <Link href="https://discord.gg/rPWpu3rTeZ">
                                    <Image src={Discord} alt="logo" className="hover:cursor-pointer"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-14 xl:mx-24 xl:mt-10">
                <div
                    id="image"
                    className=" mx-6 md:mx-0 mb-12 bg-respct bg-no-repeat bg-top text-white bg-contain"
                >
                    <div className="flex flex-col md:flex-row-reverse  md:justify-around ">
                        <div id="rs" className=" w-full lg:w-1/2 ">
                            <Image src={Mobile} alt="logo" layout="intrinsic" />
                        </div>
                        <div
                            id="ls"
                            className="flex flex-col text-center justify-center md:items-start items-center md:text-left lg:m-auto w-full lg:w-1/2 "
                        >
                            <div className=" text-[#C4C4C4] font-[900] text-xl lg:text-4xl xl:text-7xl font-Archivo ">
                                NFTs are more than JPEGs
                            </div>
                            <div className="font-Poppins lg:w-3/5 xl:w-4/5 text-xs xl:text-2xl pt-4 lg:pt-8">
                                Level-based <b>Social NFTs</b>, incentivizing
                                fans through un-lockable perks & engagement.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                {/* <div className=" text-xl lg:text-3xl xl:text-4xl text-[#01AAD0]">
          Found interesting?
        </div> */}
                {Sent ? (
                    <div className=" text-xl lg:text-3xl xl:text-4xl text-[#01AAD0]">
                        We&apos;ll be in touch soon!
                    </div>
                ) : (
                    <>
                        <div className="   text-xl lg:text-3xl xl:text-4xl text-[#01AAD0]">
                            Join the wait list now!
                        </div>
                        <div className="lg:mt-3 xl:mt-5">
                            <input
                                type="email"
                                name="email"
                                value={Email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    console.log(Email);
                                }}
                                placeholder="Email"
                                className="rounded-xl bg-[#5A5A5A] text-sm py-1 xl:py-2 px-2 lg:w-2/6"
                                required
                            />
                        </div>
                        <div className="flex justify-center">
                            {Loading ? (
                                <svg
                                    role="status"
                                    className="mr-2 mt-3 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                            ) : (
                                " "
                            )}

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log("EMail", Email);
                                    setLoading(true);
                                    // promise with then and catch

                                    send(
                                        "service_kqnt3z9",
                                        "template_4730h44",
                                        message: Email,
                                    )
                                        .then((res) => {
                                            console.log(res);
                                            setLoading(false);
                                            setSent(true);
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                            setLoading(false);
                                            alert("Error: ", err);
                                        });
                                }}
                                className="mt-2 rounded-2xl bg-[#01AAD0] lg:px-6 px-5 xl:px-9 xl:py-2 text-white"
                                type="submit"
                            >
                                {" "}
                                Join{" "}
                            </button>
                        </div>
                    </>
                )}
                <div className="text-center mt-8 mx-4 md:mx-0 xl:pb-4">
                    <Image src={Dropping} alt="logo" />
                </div>
            </div>
        </div>
    );
}
