import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logisticsImg from '../assets/projects/corporate2.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Head from 'next/head';

const Logistics = () => {
  return (
    <>
      <Head>
        <title>ER Portfolio | Custom WP Theme Project</title>
        <meta
          name='description'
          content='Custom WordPress Theme with PHP, Javascript, Bootstrap, and MySQL'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full overflow-hidden'>
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={logisticsImg}
            alt='Shipping and Logistics Website home page'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3'>
            <h2 className='py-2'>Corporate Logistics Website</h2>
            <h3>PHP / CSS3 / WordPress / Custom Theme</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-3'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              A custom WordPress Theme was created to help the company to manage
              courier services. It serves as a landing page but the template is
              designed to do so much more if the client wishes. It is built with
              PHP, Javascript and utilizes MYSQL for the backend while using
              WordPress to handle the admin and the Customer Content Management
              System. The theme is designed to be responsive and works on any
              device.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-[103%]'>
              <a
                href='https://securecourier.pro/'
                target='_blank'
                rel='noreferrer'
              >
                Demo
              </a>
            </button>
          </div>

          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>

              <div className='grid grid-cols-3 md:grid-cols-1 text-xs sm:text-base'>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> PHP
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> CSS3
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> MySQL
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> JavaScript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> WordPress
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> HTML
                </p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-pointer p-3'>Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Logistics;
