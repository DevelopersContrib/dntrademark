import React from 'react';
import Script from 'next/script';

const VNOC_realtydaoscript = () => {
  return (
    <>
      <Script src="https://app.realtydao.com/widgets/Realtydao?d=dntrademark.com" />
      <div className="realtydao"></div>
    </>
  );
}

export default VNOC_realtydaoscript;