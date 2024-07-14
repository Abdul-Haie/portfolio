import {COPYRIGHT} from "../constants";
import React from 'react'

const Copyright = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <div className='text-center tracking-tighter'>
        <p className='my-4 pt-10'>{COPYRIGHT.copyright_note}</p>
        </div>
      
    </div>
  );
};

export default Copyright;
