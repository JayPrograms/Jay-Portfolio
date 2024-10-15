import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
const Resume = () => {
   const [educationData] = useState(true);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title= "Programming since 2017" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          
        </ul>
      </div>
      {educationData && <Education />} 
    </section>
  );
}

export default Resume