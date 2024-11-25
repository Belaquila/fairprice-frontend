import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex-grow p-5">
      <h1>About FairPrice</h1>
      <p>
        FairPrice is a project aimed at providing business owners with the best tools to control their pricing strategies.
        It enables them create new products and offerings while ensuring a positive margin for their financial health.
      </p>

      <h2 className="mt-9">About the Author</h2>
      
      <div className="flex items-center mt-4">
        <img
          src="/Ahmed.jpeg"
          alt="Author"
          className="w-24 h-24 rounded-full mr-4"
        />
        <p>
          This project was developed by Ahmed, a passionate engineer with a keen interest in entrepreneurship and creating solutions that make everyday tasks easier and more efficient. 
          With a background in software development and data analysis and a love for technology, Ahmed strives to build applications that are both functional and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;