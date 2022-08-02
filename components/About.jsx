import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 '>
      <div className='max-w-[1240px] md:grid grid-cols-3 gap-8 md:mx-auto'>
        <div className='col-span-2 p-3'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            One could say that I have always been into technology as early as my
            high school days. I started my career as a teacher later in life and
            it was from that where I began to look for technology to aid the
            students on their learning journey. Not satisfied with the
            technology that I found, I began to look for what was being used and
            how I could improve it. It was then I began my path into PHP, Moodle
            and WordPress. The further I went on my technological travels, I
            began to see that JavaScript was going to be the language for me. I
            was also introduced to the world of React.js and I was hooked. I can
            say without a doubt that becoming a React and JavaScript developer
            was the best choice I could have made. I am currently working on my
            portfolio and I am looking forward to working with you.
          </p>

          <p className='py-2 text-gray-600 underline cursor-pointer'>
            <Link href='/#projects'>
              <span className='underline text-[#5651e5]'>
                Check out some of my latest projects.
              </span>
            </Link>
          </p>
        </div>
        <div className='w-[90%] h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <picture>
            <source
              srcSet='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
              type='image/webp'
            />
            <img
              className='rounded-xl'
              src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
              alt='laptop with reddish yellow glow'
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
