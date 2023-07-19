import React from 'react';
// import lmsImg from '../assets/projects/lms.png';
// import cryptoAppImg from '../assets/projects/cryptoapp.png';
// import corp2Img from '../assets/projects/corporate2.png';
import zitalkImg from '../assets/projects/zitalk.png';
import radgarackImg from '../assets/projects/radgnarackHome.png';
import naplesdentalImg from '../assets/projects/naplesdental.png';
import quetzaImg from '../assets/projects/quetza.png';
import corporateImg from '../assets/projects/corporate.png';
import erikImg from '../assets/projects/erik.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240] mx-auto px-2 py-16'>
        <p className='text-xl tracking widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Project Highlights</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Radgnarack Corporate Website'
            backgroundImg={radgarackImg}
            projectUrl='/radgnarack'
            tech='JavaScript'
          />
          <ProjectItem
            title='Quetza E-commerce Website'
            backgroundImg={quetzaImg}
            projectUrl='/quetza'
            tech='WordPress'
          />
          <ProjectItem
            title='Zitalk Spanish Learning Website'
            backgroundImg={zitalkImg}
            projectUrl='/zitalk'
            tech='PHP'
          />
          <ProjectItem
            title="Naples Dental Customer Website"
            backgroundImg={naplesdentalImg}
            projectUrl='/naplesdental'
            tech='PHP'
          />
          <ProjectItem
            title='Lionsfield Corporate Website'
            backgroundImg={corporateImg}
            projectUrl='/lionsfield'
            tech='PHP'
          />
          <ProjectItem
            title='Erik Robles Personal Website'
            backgroundImg={erikImg}
            projectUrl='/erik'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
