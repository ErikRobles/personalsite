import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import radgarackImg from '../assets/projects/radgnarackHome.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Head from 'next/head';

const Radgnarack = () => {
  return (
    <>
      <Head>
        <title>ER Portfolio | Radgnarack Project</title>
        <meta
          name='description'
          content='Website for business selling Racks for Electric Bikes.'
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
            src={radgarackImg}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3'>
            <h2 className='py-2'>Radgnarack Corporate Sales Page</h2>
            <h3>Next JS / TailwindCSS / Sanity</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-3'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This website is both a corporate website and a blog as well as an e-commerce platform that is continuously evolving. It is built with Next JS, Tailwind CSS and Sanity.io. The site is mobile friendly and is also responsive.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-[103%]'>
              <a
                href='https://radgnarack.com'
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
                  <RiRadioButtonFill className='pr-1' /> React
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Tailwind CSS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Next JS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> JavaScript
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> CSS
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> HTML
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Sanity
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

export default Radgnarack;
