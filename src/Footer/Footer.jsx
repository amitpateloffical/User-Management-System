import React from 'react'
import { IoIosMailOpen } from "react-icons/io";

const Footer = () => {
  return (
    <div className='h-10 w-full bg-white flex justify-between items-center'>
        <div className='flex'>
        <p>Copyright © </p><b> VidyaGxP Pvt. Ltd.</b>
        </div>
        <div className='flex justify-center items-center'>
        <IoIosMailOpen />:-vidyagxp.com
        </div>
    </div>
  )
}

export default Footer