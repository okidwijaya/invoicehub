import React from 'react'
import loadingsvg from '@/../../public/assets/icon/tube-spinner.svg';
import Image from 'next/image';

export default function loading() {
  return (
    <div
      className="h-full mx-auto w-full flex max-w-[75px]"
      style={{
        color: "#121212",
      }}
    >
      <Image
        src={loadingsvg}
        priority={false}
        width={75}
        height={75}
        alt="Loading"
      />
    </div>
  )
}
