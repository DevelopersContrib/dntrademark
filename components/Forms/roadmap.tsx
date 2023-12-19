import React from 'react';
import Script from 'next/script';

const VNOC_roadmap: React.FC = () => {
  console.log('VNOC_roadmap function started'); // added console.log
  
  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0" style={{height:1800}}>
        <div className="lizard-relative">
          <Script src="https://manage.vnoc.com/taskmanager/public/dntrademark.com/55564?container=tasks" />
          <div id="tasks" className="tasks"></div>
        </div>         
      </div>
    </section>
  )
}

export default VNOC_roadmap;
