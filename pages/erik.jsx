import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import erikImg from '../assets/projects/erik.png';
import { RiRadioButtonFill } from 'react-icons/ri';

const Erik = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={erikImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Erik Robles Personal Website</h2>
          <h3>React JS / TailWind / Next JS / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This is a short description of the site you are looking at. It is an
            example of what can be done with Next.js and React. It uses Tailwind
            CSS and can be modified to suit any clients stylistic needs. For the
            backend I decided to use Google&apos;s FireBase as the backend. This
            will be an ongoing project where I will be adding new and more
            exciting features as time goes on. The design of this site is based
            on the work of Clint Briley who can be found on his{' '}
            <a
              href='https://www.instagram.com/fireclint/'
              target='_blank'
              rel='noreferrer'
              className='underline text-[#5651e5]'
            >
              twitter
            </a>
            &nbsp;account and you can also find his work on his{' '}
            <a
              href='https://github.com/fireclint/portfolio-nextjs'
              className='underline text-[#5651e5]'
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>{' '}
            page.
          </p>
          <button className='px-8 py-2 mt-4 mr-8 hover:scale-[103%]'>
            <a href='/' target='_blank' rel='noreferrer'>
              Demo
            </a>
          </button>
        </div>

        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>

            <div className='grid grid-cols-3 md:grid-cols-1'>
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
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Erik;
