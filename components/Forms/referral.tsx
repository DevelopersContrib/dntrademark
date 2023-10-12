import React from 'react';
import Script from 'next/script';

const VNOC_referral = () => {
  return (
    <>
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="lizard-relative">
            <Script id="referral-script" src="https://www.referrals.com/extension/widget.js?key=669" />
          </div>         
        </div> 
      </section>
    </>
  )
}

export default VNOC_referral;
