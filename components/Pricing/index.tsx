"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { PackagesProps } from "@/types/packages";
import PackagePlan from "./PackagePlan";

const Pricing = () => {
  const [plans, setPlans] = useState<PackagesProps[]>([]);

  const getPackages = async () => {
    try {
      const res = await fetch('api/package', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();

      setPlans(result.data)

      // console.log(result.data);

    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  useEffect(() => {
    getPackages();
  }, []);

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

            {plans.map((plan: PackagesProps) => (
              <PackagePlan key={plan.id} {...plan} />
            ))}

          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
