/* eslint-disable react/display-name */
import Link from 'next/link';
import React, { useState, forwardRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { firestore } from '../utils/firebase';
import { toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      toast.error('Please enter your name');
      return;
    }
    if (email === '') {
      toast.error('Please enter your email');
      return;
    }
    if (subject === '') {
      toast.error('Please enter your subject');
      return;
    }
    if (message === '') {
      toast.error('Please enter your message');
      return;
    }
    firestore
      .collection('contacts')
      .add({
        name,
        email,
        subject,
        message,
        phone,
      })
      .then(() => {
        toast.success('Message sent successfully');
      })
      .catch((error) => {
        toast.error(error.message);
      });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setPhone('');
  };

  const CustomLinkWrapper = forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  ));

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <picture>
                  <source
                    srcSet='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                    type='image/webp'
                  />
                  <img
                    className='rounded-xl hover:scale-105 md:hover:scale-[103%] ease-in duration-300'
                    src='https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                    alt='hands on laptop'
                  />
                </picture>
              </div>
              <div>
                <h2 className='py-2'>Erik Robles</h2>
                <p>Front-End Web Developer</p>
                <p className='py-4'>
                  I am available for large or small freelance website or
                  application projects. Contact me and we can talk about your
                  project.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a
                      href='https://www.linkedin.com/in/erik-james-245067a8/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaLinkedinIn size={25} />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a
                      href='https://github.com/ErikRobles'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <FaGithub size={25} />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <a href='mailto:erobles@chainblocklabs.com'>
                      <AiOutlineMail size={25} />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
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
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={90}
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone <small>(Optional)</small>
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='tel'
                      pattern='^[\+\(\s.\-\/\d\)]{5,30}$'
                      placeholder='Format: 123-456-7890'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={50}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    maxLength={90}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    maxLength={150}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    maxLength={500}
                  ></textarea>
                </div>
                <button
                  className='w-full p-4  mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white'
                  type='submit'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 text-[#5651e5] p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp size={30} className='text-[#5651e5]' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
