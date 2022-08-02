import Image from 'next/image';
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque,
            earum dolorem at ducimus ex nesciunt dolore rerum quasi ea
            accusantium cupiditate iusto! Laborum quaerat illo quibusdam, sit
            totam non deleniti quos asperiores quis nobis modi nam expedita
            quasi? Enim voluptatem nesciunt perspiciatis rerum a commodi placeat
            asperiores deleniti modi!
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque,
            earum dolorem at ducimus ex nesciunt dolore rerum quasi ea
            accusantium cupiditate iusto! Laborum quaerat illo quibusdam, sit
            totam non deleniti quos asperiores quis nobis modi nam expedita
            quasi? Enim voluptatem nesciunt perspiciatis rerum a commodi placeat
            asperiores deleniti modi!
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
        <div className='w-[90%] h-auto m-auto shadow-xl  shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
            alt='laptop with reddish yellow glow'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
