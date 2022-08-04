import React from 'react';
import Editor from '../components/Editor';

const AddPost = () => {
  return (
    <div className='container mx-auto'>
      <div className='w-full lg:h-screen '>
        <div className='max-w-[1240] m-auto px-2 py-16 w-full'>
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
