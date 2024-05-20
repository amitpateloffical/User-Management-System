import React from 'react'
import { IoIosMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className='h-10 w-full bg-white flex justify-between items-center p-2 sm:px-4 lg:px-8'>
    <div className='flex'>
      <p>Copyright © </p><b> VidyaGxP Pvt. Ltd.</b>
    </div>
    <div className='flex justify-center items-center'>
      <IoIosMailOpen className='mr-1' />- vidyagxp.com
    </div>
  </div>
    )
}

export default Footer