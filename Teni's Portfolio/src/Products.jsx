import React from 'react'
import Handy from './assets/images/Handy.png'
import Growth from './assets/images/growth.png'

const Products = () => {
  return (
    <div className='bg-gray-900 py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-50 md:mb-6 lg:text-3xl'>
            Products
          </h2>

          <p className='mx-auto max-w-screen-md text-center text-gray-200 md:text-lg'>
            Explore the products I have built and collaborated on. Each project
            showcases unique design and functionality, reflecting my commitment
            to creating high-quality and impactful solutions.
          </p>
        </div>

        <div className='grid gap-6 sm:grid-cols-2'>
          <a
            href='#'
            className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
          >
            <img
              src={Handy}
              loading='lazy'
              alt='Photo by Fakurian Design'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <div className='relative flex flex-col'>
              <span className='text-lg font-semibold text-white lg:text-xl'>
                Resturant Web App
              </span>
            </div>
          </a>

          <a
            href='#'
            className='group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg'
          >
            <img
              src={Growth}
              loading='lazy'
              alt='Photo by Fakurian Design'
              className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
            />

            <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50'></div>

            <div className='relative flex flex-col'>
              <span className='text-lg font-semibold text-white lg:text-xl'>
                Growth Savings
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Products
