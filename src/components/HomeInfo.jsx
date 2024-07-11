import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium text-lg sm:text-xl text-white text-center my-4">
      {text}
    </p>
    <Link
      to={link}
      className="neo-btn text-black hover:underline flex items-center space-x-2"
    >
      {btnText}
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl text-center text-white mx-5">
      안녕하세요, <span className="font-semibold">세은</span> 입니다 😁
      <br />
      디자인과 개발을 배우고 있습니다
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link="/about"
      btnText="더보기"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/projects"
      btnText="Profile"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
