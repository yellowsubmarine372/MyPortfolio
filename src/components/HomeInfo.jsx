import React from "react";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="my-3 -mt-5 text-base font-light text-center text-white">
      {text}
    </p>
    <div className="flex justify-center">
      <Link to={link} className="flex items-center space-x-2 neo-btn">
        {btnText}
      </Link>
    </div>
  </div>
);

const renderContent = {
  1: (
    <h1 className="mx-5 font-light text-center text-white">
      안녕하세요, 세은 입니다
      <br />제 포트폴리오를 소개합니다.
    </h1>
  ),
  2: (
    <InfoBox
      text={
        <>
          저는 <span className="font-medium">quick Learner</span> 입니다.
          <br />
          새로운 기술을 빠르게 습득해 프로젝트를 성공적으로 이끕니다.
        </>
      }
      link="/about"
      btnText="Showcase 1 →"
    />
  ),
  3: (
    <InfoBox
      text={
        <>
          저는 <span className="font-medium">Problem Solver</span> 입니다.
          <br />
          팀의 성과를 높이기 위해 문제 해결에 집중합니다.
        </>
      }
      link="/projects"
      btnText="Showcase 2 →"
    />
  ),
  4: (
    <InfoBox
      text={
        <>
          함께 이야기 나누고 싶으시면{" "}
          <span className="font-medium">연락 주세요!</span> <br />
          언제든 환영합니다
        </>
      }
      link="/contact"
      btnText="Contact me"
    />
  ),
  5: (
    <h1 className="mx-5 font-light text-center text-white">
      Drag up/down to zoom
      <br /> left/right to rotate!
    </h1>
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
