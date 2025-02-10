import React from 'react'

export default function Table() {
  return (
    <div>
      <div className='flex justify-between items-center w-full pb-[38px] max-w-[1024px] mx-auto'>
        <h2 className='text-[26px] font-semibold w-full text-left'>
          Add Invoice
        </h2>
        <div className='grid grid-cols-2 w-full max-w-[400px] gap-2 items-center'>
          <label className='flex flex-row flex-wrap content-center items-center w-full'>
            <input className='w-full border border-inputBorderColor rounded-md py-[11px] px-[22px]' type="text" name='search' placeholder="Search" required />
          </label>

          <div className='flex flex-row flex-wrap content-center items-center w-full'>
            <select name="cars" id="cars" className='border border-inputBorderColor rounded-md w-full py-[13px] px-[22px]'>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div className='bg-white w-full max-w-[1024px] mx-auto border border-[#E2E8F0] py-[30px] px-[35px]'>
          <div className='grid grid-cols-5 bg-[#F7F9FC] w-full max-w-[920px] mx-auto rounded-md py-[15px] px-[35px]'>
            <p className='font-[600] text-tableHeadingTextColor text-left'>invoice</p>
            <p className='font-[600] text-tableHeadingTextColor text-center'>due date</p>
            <p className='font-[600] text-tableHeadingTextColor text-center'>status</p>
            <p className='font-[600] text-tableHeadingTextColor text-center'>amount</p>
            <p className='font-[600] text-tableHeadingTextColor text-right'>actions</p>
          </div>
          <div className='grid grid-cols-5 items-center justify-center w-full max-w-[920px] mx-auto py-[15px] px-[35px] border-b border-b-secondaryColor'>
            <div className='text-left'>
              <p className='text-tableHeadingTextColor'>Internet Subscription</p>
              <p className='text-tableSubHeadingTextColor'>INV202501</p>
            </div>
            <div className='w-full flex justify-center items-center py-2 px-4'>
              <p className='text-tableHeadingTextColor'>Jan 13,2025</p>
            </div>
            <div className='w-full flex justify-center items-center py-2 px-4'>
              <p className='paid'>paid</p>
            </div>
            <div className='w-full flex justify-center items-center py-2 px-4'>
              <p className='text-tableHeadingTextColor'>Rp 582.901</p>
            </div>
            <div className='w-full flex justify-end items-center py-2 px-4'>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="#7E7E7E"/>
              </svg>
            </div>
          </div>
      </div>
    </div>
  )
}
