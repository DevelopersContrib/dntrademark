import React from 'react';
import Script from 'next/script';

const VNOC_roadmap: React.FC = () => {
  console.log('VNOC_roadmap function started'); // added console.log
  
  return (
    <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
      <div className="lizard-relative">
        
          <Script src="https://manage.vnoc.com/taskmanager/public/dntrademark.com/36929?container=tasks" />
          <div id="tasks" className="tasks"></div>
        
      </div>         
    </div> 
  )
}

export default VNOC_roadmap;
