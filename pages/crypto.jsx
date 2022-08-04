import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cryptoAppImg from '../assets/projects/cryptoapp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Head from 'next/head';

const Crypto = () => {
  return (
    <>
      <Head>
        <title>ER Portfolio | Crypto Project</title>
        <meta
          name='description'
          content='Web3, Solidity, React, Material UI based crypto web application information page.'
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
            src={cryptoAppImg}
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-3'>
            <h2 className='py-2'>Crypto Funding Application</h2>
            <h3>React JS / Material UI / MongoDB</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 px-3'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              This web application was created to help people to fund their
              dreams, emergencies, inventions etc. with cryptocurrency. It is
              built on the Binance network and is a decentralized application.
              Using Web3, Solidity and React along with MongoDB, it is a fully
              functional application set to help millions of people around the
              globe to fund their needs or dreams.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-[103%]'>
              <a
                href='https://test.iwill.fund'
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
                  <RiRadioButtonFill className='pr-1' /> Material UI
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> MongoDB
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
                  <RiRadioButtonFill className='pr-1' /> Solidity
                </p>
                <p className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> Web3.JS
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

export default Crypto;
