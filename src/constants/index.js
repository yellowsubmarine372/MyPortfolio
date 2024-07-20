import {
  c,
  comfyUI,
  figma,
  illustrator,
  java,
  mysql,
  numpy,
  pandas,
  photoshop,
  python,
  scikitlearn,
  css,
  git,
  github,
  html,
  javascript,
  react,
  threads,
} from "../assets/icons";

import leader from "../assets/icons/leader.svg";
import teamwork from "../assets/icons/teamwork.svg";

import meltingpot from "../assets/images/meltingpot.png";
import ethon from "../assets/images/ethon.png";
import news from "../assets/images/news.png";
import conference from "../assets/images/conference.jpg";
import comfyui from "../assets/images/comfyui.png";
import yoloworld from "../assets/images/yoloworld.gif";

import ideathon from "../assets/images/ideathon.jpg";
import poster from "../assets/images/poster.png";
import team from "../assets/images/team.jpg";
import event from "../assets/images/event.jpg";
import insta from "../assets/images/insta.png";
import session from "../assets/images/session.jpg";

export const skills = [
  {
    id: 1,
    imageUrl: python,
    name: "Python",
    type: "ML",
  },
  {
    id: 2,
    imageUrl: numpy,
    name: "Numpy",
    type: "FrameWork",
  },
  {
    id: 3,
    imageUrl: pandas,
    name: "Pandas",
    type: "FrameWork",
  },
  {
    id: 4,
    imageUrl: scikitlearn,
    name: "ScikitLearn",
    type: "FrameWork",
  },
  {
    id: 6,
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    id: 7,
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    id: 9,
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    id: 8,
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    id: 5,
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    id: 10,
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    id: 11,
    imageUrl: c,
    name: "C",
    type: "backend",
  },
  {
    id: 12,
    imageUrl: java,
    name: "Java",
    type: "backend",
  },
  {
    id: 13,
    imageUrl: mysql,
    name: "MySQL",
    type: "backend",
  },
  {
    id: 14,
    imageUrl: illustrator,
    name: "Illustrator",
    type: "Design",
  },
  {
    id: 15,
    imageUrl: photoshop,
    name: "PhotoShop",
    type: "Design",
  },
  {
    id: 16,
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    id: 17,
    imageUrl: comfyUI,
    name: "ComfyUI",
    type: "Design",
  },
];

export const projects = [
  {
    title: "AI 담당자가 프론트엔드도 맡을 때",
    images: [meltingpot, ethon, news],
    description:
      "학교 해커톤에서 AI 담당으로 참여하여, 머신러닝 텍스트 분석 기술을 이용해 문서 분류와 확률 계산 기능을 구현했습니다. 프론트엔드 작업이 완료되지 않아 프론트엔드도 담당하게 되었습니다. 당시 리액트에 대한 기초적인 지식만 있었지만, Figma 디자인 능력과 ChatGPT를 활용해 작업을 설계함으로써 효율적으로 화면을 구현할 수 있었습니다. 그 결과, 이화 해커톤에서 1위를 차지하였고, 이후 여러 프론트엔드 프로젝트에도 도전할 수 있는 계기가 되었습니다.",
  },
];

export const projects2 = [
  {
    title: "Experience → Think → Act!",
    images: [conference, yoloworld, comfyui],
    description:
      "AI 컨퍼런스에 참여했을 때, 많은 스타트업 부스에서 OpenCV 기술이 활용되는 것을 보고 영감을 받았습니다. 이를 계기로 Object Detection 기술을 활용해 마스킹한 이미지를 생성형 이미지로 Impaint하는 개인 프로젝트를 진행했습니다. Yolo World를 사용해 이미지와 영상을 마스킹하고, Comfy UI를 배워 생성형 이미지를 생성했습니다. ",
  },
];

export const softskills = [
  {
    iconUrl: leader,
    theme: "btn-back-red",
    name: "리더십",
    description:
      "다양한 프로젝트에서 팀장을 맡아 조직을 이끌며, 결단력을 키울 수 있었고 팀의 목표를 달성하기 위해 방향성을 제시할 수 있었습니다.",
  },
  {
    iconUrl: teamwork,
    theme: "btn-back-green",
    name: "팀워크",
    description:
      "항상 좋은 동료로 발전하기 위해 고민하고 있습니다. 업무에 최선을 다하며 먼저 그레이영역을 채우는 팀원이 되기 위해 노력합니다.",
  },
];

export const projects3 = [
  {
    title: "Wrtn X Ewha Ideathon",
    images: [poster, team, ideathon],
    description:
      "아이디어톤을 주최하면서 학생이 주최하는 대회에 많은 제약이 있어 어려움이 있었습니다. 공식적인 교내 대회로 인정받을 필요성을 느껴 교내 산학협력단과의 미팅을 통해 후원을 받아냈습니다. 행사 총괄 팀장으로서 운영사무국과 기업가센터 두 팀과 협력하며 팀워크와 리더십을 발휘했습니다. 12일간의 지원 기간 동안 14팀이 대회에 지원하는 성과를 거두었고, 행사를 성공적으로 마무리했습니다.",
  },
];

export const projects4 = [
  {
    title: "대학생활의 절반을 알켐 회장으로 보내며",
    images: [insta, session, event],
    description:
      "학내에서 AI에 대한 관심을 증대하기 위해 IT 비전공자도 참여할 수 있는 AI 머신러닝 동아리 AIchemist(알켐)를 조직했습니다. 현재 3기를 모집 중이며, 회장으로서 기초부터 동아리를 조직하고 발전시켰습니다. 운영진 4명과 함께 동아리 커리큘럼 기획, 정기적인 동아리원 모집, 세션 진행, 아이디어톤 및 컨퍼런스 행사를 성공적으로 진행하고 있습니다.",
  },
];
