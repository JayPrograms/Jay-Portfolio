import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BASc Computer Engineering (Honors)"
            subTitle="University of Waterloo (2023 - 2028)"
            des="I’ve had the opportunity to collaborate with like-minded individuals in a competitive program, where I learned about computer fundamentals, software development, and mathematical concepts applied in computing."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="North Park Secondary School (2019-2023)"
            des="I enrolled in a regional program called International Business and Technology, where I focused on academics related to tech."
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="IESO - (Sep 2024 - Present)"
            des="Worked on the MAST application using SQL and Java (Apache Maven) maintain the application and develop the database."
          />
          <ResumeCard
            title="Backend Developer"
            subTitle="Watstreet - (Aug 2024 - Present)"
            des="Created and tested several Restful APIs using Flask, worked on the database of the services using Firebase."
          />
          <ResumeCard
            title="Software Engineering Intern"
            subTitle="Graze.ai - (Jan 2024 - Apr 2024)"
            des="Utilized Python Selenium, Scrapy, and Beautifulsoups to automate and optimize data gathering processes. Finetuned OLlama models to help with data classification."
          />
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Innoxa Inc. - (Apr 2023 - Sep 2023)"
            des="Developed features allowing for end-users to provide product requirements to the development teams using React.js, Node.js, Express.js using PostgreSQL for the database."
          />
        </div>
        
      </div>
    </motion.div>
  );
};

export default Education;
