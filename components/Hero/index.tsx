"use client";
import React, { useState } from "react";
import HubspotContactForm from "../Betaform/form";
import Image from "next/image";

import { motion } from "framer-motion";


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="pt-35 md:pt-40 xl:pt-46 pb-20 xl:pb-25 overflow-hidden min-h-screen  bg-scroll backdrop-blur-md bg-no-repeat bg-right-top bg-[url('/images/hero/monitor-lizard-1c.png')]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 align-middle">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
                🔥 Protect Your Digital Assets with 
                Instant Trademark Notifications
              </h4>
              <h1 className="text-black dark:text-white text-5xl font-bold tracking-tight text-gray-900 sm:text-8xl bg-gradient-to-r from-black to-primary bg-clip-text text-transparent">
                
                Keeping an eye on your valuable URL's             
              </h1>
              <h3 className="text-black dark:text-white font-bold tracking-tight text-gray-900 bg-gradient-to-r from-black to-primary bg-clip-text text-transparent">
              Reduce risk of legal complications by ensuring your domains are protected and aware.
              Use DNTrademark.com for monitoring and precise, speedy, automated notifications.
              </h3>

              <div className="mt-10">
              
              </div>
            </div>

            <div className="animate_right md:w-1/2 hidden lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute right bottom-30 z-10 hover:animate-spin"
                />  
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute right-30 bottom-30 z-10 hover:animate-spin"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-2 bottom-25 z-1 hover:animate-spin"
                />
                <div className=" relative aspect-[900/544] w-full overflow-hidden">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
