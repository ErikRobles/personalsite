import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import corporateImg from '../public/assets/projects/corporate.png';
import { RiRadioButtonFill } from 'react-icons/ri';

const Lionsfield = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={corporateImg}
          alt='School Corporate Website'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>School Corporate Website</h2>
          <h3>PHP / Laravel / CSS3 / MySQL / JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ea
            fugit consequuntur velit ullam aut, ipsum ab dolorem odio sequi est
            earum molestiae. Dolore iure quos, at dolores est numquam suscipit
            laudantium error sapiente, facilis quia perspiciatis aliquid enim
            nostrum! Dicta officiis tempore dolor recusandae facilis hic!
            Dignissimos, dolorem quo?
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

            <div className='grid grid-cols-3 md:grid-cols-1'>
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
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Lionsfield;
