import Image from 'next/image';
import HTML from '../assets/skills/html.png';
import CSS from '../assets/skills/css.png';
import JS from '../assets/skills/javascript.png';
import REACT from '../assets/skills/react.png';
import TailWind from '../assets/skills/tailwind.png';
import MONGO from '../assets/skills/mongo.png';
import FIREBASE from '../assets/skills/firebase.png';
import GITHUB from '../assets/skills/github1.png';

import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>Tech Focus</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={HTML} width='64px' height='64px' alt='html5' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={CSS} width='64px' height='64px' alt='css3' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={JS} width='64px' height='64px' alt='javascript' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={REACT} width='64px' height='64px' alt='react' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={TailWind}
                  width='64px'
                  height='64px'
                  alt='tailwind'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={MONGO} width='64px' height='64px' alt='Mongo DB' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={FIREBASE}
                  width='64px'
                  height='64px'
                  alt='firebase'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>FireBase</h3>
              </div>
            </div>
          </div>
          <div className='p-6 w-[90%] mx-auto shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={GITHUB} width='64px' height='64px' alt='github' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
