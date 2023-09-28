import { PackagesProps } from '@/types/packages'
import React from 'react'

const Packages = (props: PackagesProps) => {
  return (
    <div key={props.id} className="animate_top md:w-[45%] lg:w-1/3 group relative bg-white dark:bg-blacksection rounded-lg shadow-solid-10 dark:shadow-none border border-stroke dark:border-strokedark p-7.5 xl:p-12.5">
      <h3 className="text-black dark:text-white font-bold text-3xl xl:text-sectiontitle3 mb-7.5">
        ${props.price}{" "}
        <span className="text-regular text-waterloo dark:text-manatee">
          /month
        </span>
      </h3>
      <h4 className="text-black dark:text-white font-medium text-para2 mb-2.5">
        {props.name}
      </h4>
      <p>Good for {props.start_limit} to  {props.end_limit} Domains</p>

      <div className="border-t border-stroke dark:border-strokedark mt-9 pt-9 pb-12.5">
        
      </div>

      <button
        aria-label="purchase this plan"
        className="inline-flex items-center gap-2.5 text-primary dark:text-white dark:hover:text-primary font-medium transition-all duration-300"
      >
        <a href="/auth/signup" className="hover:pr-2 duration-500"> Get the Plan</a>
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
  )
}

export default Packages