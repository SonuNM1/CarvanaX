import React from 'react'

const InfoSection = () => {
  return (
    <section className='mt-15' >
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          Thousands of Cars, One Trusted Marketplace
          </h2>

          <p className="mt-4 text-gray-700">
          Discover a vast collection of high-quality cars from trusted sellers. Whether you're looking for a family SUV or a sporty coupe, we've got the perfect ride for you. 
          
          Enjoy seamless browsing, secure transactions, and expert assistance at every step. Your dream car is just a few clicks away!" 🚗💨
          </p>
        </div>
      </div>

      <div>
        <img
          src="section_image.png"
          className="rounded"
          alt="sectionImage"
        />
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection
