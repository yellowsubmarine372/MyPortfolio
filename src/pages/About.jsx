import "react-vertical-timeline-component/style.min.css";
import { skills, projects, projects2 } from "../constants"; // projects를 추가로 가져옵니다.

const About = () => {
  return (
    <section className="max-container ">
      <h1 className=" head-text">
        <span className="blue-gradient_text font -semibold drop-shadow-sm">
          Showcase 1
        </span>
      </h1>

      <div className="flex flex-col gap-3 mt-5 font-medium text-slate-700">
        <p className="leading-relaxed">
          저는 새로운 것을 빠르게 배우고 적용하는{" "}
          <span className="font-semibold">quick learner </span>입니다. 실전에서
          새로운 기술을 습득하고 프로젝트에 성공적으로 응용한 경험이 있습니다.
          효율적으로 학습하고 활용하는 능력을 통해 완성도 높은 결과물을 만들어낼
          수 있습니다. 새로운 도전을 두려워하지 않고 지속적으로 성장하고
          있습니다. 아래에서 제가 다룰 수 있는 기술과 관련 프로젝트를
          확인해보세요.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <br />
        <h3 className=" subhead-text">Skills</h3>

        <div className="flex flex-wrap gap-12 mt-10">
          {skills.map((skill) => (
            <div
              key={skill.id} // id를 key prop으로 설정합니다.
              className="w-20 h-20 block-container"
            >
              <div className="flex items-center justify-center btn-front rounded-xl">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="object-contain w-1/2 h-1/2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col py-20">
        <div className="flex flex-col ">
          <h3 className=" subhead-text">Projects</h3>

          {projects.map((project, index) => (
            <div key={index} className="flex flex-col mt-10 ">
              <div className="flex w-full gap-6">
                {project.images.map((image, idx) => (
                  <div key={idx} className="w-[35%] h-40 overflow-hidden">
                    <div className="flex items-center justify-center w-full h-full bg-gray-800">
                      <img
                        src={image}
                        alt={`${project.title} image ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <h4 className="text-xl font-medium text-black">
                  {project.title}
                </h4>
              </div>
              <div className="flex flex-col gap-3 mt-5 font-light text-slate-700">
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col py-20">
          <br />
          <br />
          <h3 className=" subhead-text">Side-Projects</h3>

          {projects2.map((project, index) => (
            <div key={index} className="flex flex-col mt-10 ">
              <div className="flex w-full gap-6">
                {project.images.map((image, idx) => (
                  <div key={idx} className="w-[35%] h-40 overflow-hidden">
                    <div className="flex items-center justify-center w-full h-full bg-gray-800">
                      <img
                        src={image}
                        alt={`${project.title} image ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <h4 className="text-xl font-medium text-black">
                  {project.title}
                </h4>
              </div>
              <div className="flex flex-col gap-3 mt-5 font-light text-slate-700">
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
