"use client";
import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="pt-15 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Simple Pricing`,
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="mx-auto max-w-[1207px] px-4 md:px-8 xl:px-0 relative mt-15 xl:mt-20">
          <div className="absolute -bottom-15 -z-1 w-full h-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-7.5 xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
                $20{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                Small Portfolio
              </h4>
              <p>Good for 1 to 24 Domains</p>

              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Domain Checks: Verify the trademark status of up to 10 domains.
  
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Instant Notifications: Receive real-time alerts via email and SMS for any potential trademark conflicts.
   
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
                  Secure Your Brand: Protect your online presence from legal disputes and trademark issues.
  
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
                  Regular Updates: Stay informed about the status of your registered domains.
    
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0 opacity-40">
                  24/7 Support: Access our customer support team whenever you need assistance.
    
                  </li>
                  
                </ul>
              </div>

              <button
                aria-label="purchase this plan"
                className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
              >
                <span className="hover:pr-2 duration-500"> Get the Plan</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <div className="absolute top-7.5 -right-3.5 -rotate-90 rounded-tl-full rounded-bl-full bg-primary font-medium text-white text-metatitle uppercase py-1.5 px-4.5">
                popular
              </div>

              <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
                $59{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
               Check 25 to 500 Domains
              </h4>
              <p>Good for Medium sized portfolio</p>

              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Domain Checks: Verify the trademark status of 26 to 500 domains.
    
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Bulk Checks: Streamline the process with bulk domain checking for efficient management.
   
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Instant Notifications: Receive real-time alerts via email and SMS for any potential trademark conflicts.
   
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Secure Your Brand: Protect your online presence from legal disputes and trademark issues.
  
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Regular Updates: Stay informed about the status of your registered domains.
  
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                                  
                  Priority Support: Enjoy priority access to our dedicated customer support team.
                  </li>
                </ul>
              </div>

              <button
                aria-label="purchase this plan"
                className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
              >
                <span className="hover:pr-2 duration-500"> Get the Plan</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
              <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
                $199{" "}
                <span className="text-regular text-waterloo dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
                Pro Domainer
              </h4>
              <p>Check up to 2500 Portfolio and succeeding Domains is only charged .03 cents per domain</p>

              <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
                <ul>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Domain Checks: Verify the trademark status of up to 2500 domains.
    
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Comprehensive Coverage: Ensure all your domains are monitored for trademark conflicts.
    
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Instant Notifications: Receive real-time alerts via email and SMS for any potential trademark conflicts.
    
                  </li>
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Secure Your Brand: Protect your online presence from legal disputes and trademark issues.
    
                  </li>
                  
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Regular Updates: Stay informed about the status of your registered domains.
    
                  </li>
                  
                  <li className="text-black dark:text-manatee mb-4 last:mb-0">
                  Dedicated Account Manager: Get personalized assistance and support with a dedicated account manager.
    
                  </li>
                  
    
                </ul>
              </div>

              <button
                aria-label="purchase this plan"
                className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
              >
                <span className="hover:pr-2 duration-500"> Get the Plan</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
