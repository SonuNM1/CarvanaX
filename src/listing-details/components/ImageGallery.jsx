import React from 'react'

const ImageGallery = ({carDetail}) => {

  console.log('car detail: ', carDetail)

  return (
    <div>
      <img 
      src={carDetail?.images?.[0]}
      className='w-full h-[500px] rounded-xl object-cover'
      /> 
    </div>
  )
}

export default ImageGallery
