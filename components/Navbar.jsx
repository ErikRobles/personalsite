/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ERLogo from '../assets/navLogo.png';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/property') {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [shadow]);

  const handleNav = () => {
    setNav(!nav);
  };

  const CustomLinkWrapper = React.forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  ));

  return (
    <>
      <nav
        style={{ backgroundColor: `${navBg}` }}
        className={
          shadow
            ? 'sticky top-0 w-full h-20 shadow-xl z-[100]'
            : 'sticky top-0 w-full h-20 z-[100]'
        }
      >
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Link href='/'>
            <CustomLinkWrapper>
              <Image
                src={ERLogo}
                alt='Logo'
                width='125'
                height='50'
                className='cursor-pointer'
              />
            </CustomLinkWrapper>
          </Link>
          <div>
            <ul
              style={{ color: `${linkColor}` }}
              className='hidden md:flex md:mr-3'
            >
              <Link href='/'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='md:hidden mr-3' onClick={handleNav}>
              <AiOutlineMenu size={25} fill={linkColor} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }
        >
          <div
            className={
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                : 'fixed left-[-135%] top-0 p-10 ease-in duration-500'
            }
          >
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link href='/'>
                  <CustomLinkWrapper>
                    <Image
                      src={ERLogo}
                      alt='Logo'
                      width='87'
                      height='35'
                      className='cursor-pointer'
                    />
                  </CustomLinkWrapper>
                </Link>
                <div
                  className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3'
                  onClick={handleNav}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] py-4'>
                  Let&apos;s build something awesome together
                </p>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  <Link href='/'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                      Home
                    </li>
                  </Link>
                  <Link href='/#about'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                      About
                    </li>
                  </Link>
                  <Link href='/#skills'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                      Skills
                    </li>
                  </Link>
                  <Link href='/#projects'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                      Projects
                    </li>
                  </Link>
                  <Link href='/#contact'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>
                      Contact
                    </li>
                  </Link>
                </ul>
                <div className='pt-40'>
                  <p className='uppercase tracking-widest text-[#5651e5]'>
                    Let&apos;s Connect
                  </p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <a
                        href='https://www.linkedin.com/in/erik-james-245067a8/'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaLinkedinIn size={25} />
                      </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <a
                        href='https://github.com/ErikRobles'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <FaGithub size={25} />
                      </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <a href='mailto:erobles@chainblocklabs.com'>
                        <AiOutlineMail size={25} />
                      </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <Link href='/#contact'>
                        <CustomLinkWrapper>
                          <BsFillPersonLinesFill size={25} />
                        </CustomLinkWrapper>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
