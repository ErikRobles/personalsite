import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hello, I&apos;m <span className='text-[#5651e5]'>Erik</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Your Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I&apos;m a front-end web developer specializing in building custom
            responsive web sites and web based applications.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn size={25} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub size={25} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <AiOutlineMail size={25} />
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <BsFillPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
