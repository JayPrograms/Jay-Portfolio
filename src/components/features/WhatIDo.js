import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaDatabase, FaMobile, FaBrain, FaCalculator } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { TbSettingsAutomation } from "react-icons/tb";
import Title from '../layouts/Title';
import Card from './Card';

const WhatIDo = () => {
  return (
    <section
      id="whatIDo"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Frontend Development"
          des="I build interactive and responsive user interfaces using modern JavaScript frameworks like React.js."
          icon={<CgScreen />}
        />
        <Card
          title="Backend Development"
          des="I design and maintain RESTful APIs and microservices using Flask and Node.js, ensuring high performance and scalability."
          icon={<FaCog />}
        />
        <Card
          title="Database Management"
          des="Skilled in managing databases like PostgreSQL, Firebase, and Oracle, I ensure secure, efficient data storage and retrieval."
          icon={<FaDatabase />}
        />
        <Card
          title="AI/ML"
          des="Leveraging TensorFlow and Scikit-Learn, I implement machine learning models to solve problems like image recognition and data analysis."
          icon={<FaBrain />}
        />
        <Card
          title="Data Science"
          des="I enjoy working with data, utilizing Python, Keras, and Matplotlib to extract meaningful insights and build predictive models."
          icon={<FaCalculator />}
        />
        <Card
          title="Automation"
          des="From process automation to web scraping, I develop efficient solutions using tools such as Selenium and Scrapy to save time and reduce manual effort."
          icon={<TbSettingsAutomation />}
        />
      </div>
    </section>
  );
}

export default WhatIDo