import React from 'react';
import { useRouter } from 'next/router';

export default function Verify() {
  const router = useRouter();
  const { email } = router.query;
  return (
    <div className='grid h-screen place-items-center mt-[-90px]'>
      <p className='text-xl tracking-widest uppercase text-[#5651e5] text-center'>
        To verify your Sign Up, please check your email: <br />
        <strong>{email}</strong>
      </p>
    </div>
  );
}
