import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import corporateImg from '../assets/projects/corporate.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Head from 'next/head';

const Lionsfield = () => {
  return (
    <>
      <Head>
        <title>ER Portfolio | Lionsfield Corporate Project</title>
        <meta
          name='description'
          content='Laravel, PHP, Javascript, Bootstrap Corporate website for providing information about the company to the students and companies throughout Mexico.'
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
            src={corporateImg}
            alt='School Corporate Website'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3'>
            <h2 className='py-2'>School Corporate Website</h2>
            <h3>PHP / Laravel / CSS3 / MySQL / JavaScript</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-3'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              The Lionsfield Corporate School Website is actually a small scale
              web application used to invite clients to know more about the
              school and provide information to potential students. Built with
              Laravel and PHP, the website is a great way to get more
              information about the school and its services. The site is mobile
              friendly and is also responsive.
            </p>
            <button className='px-8 py-2 mt-4 mr-8'>
              <a
                href='http://lionsfield.com.mx/'
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

export default Lionsfield;
