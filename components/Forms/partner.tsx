import React from 'react';
import Script from 'next/script';

const VNOC_partnerform = () => {
  return (
    <>
      <Script src={"https://tools.contrib.com/pages/partnernew?d=dntrademark.com&container=partner-script&header=0&footer=0"}/>
      <div className="partner-script"></div>
    </>
  )
}

export default VNOC_partnerform;