import "react-vertical-timeline-component/style.min.css";
import { softskills, projects3, projects4 } from "../constants"; // projects를 추가로 가져옵니다.

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="text-white head-text">
        <span className="blue-gradient_text font -semibold drop-shadow-sm">
          Showcase 2
        </span>
      </h1>

      <div className="flex flex-col gap-3 mt-5 text-slate-700">
        <p className="leading-relaxed">
          {" "}
          문제 해결을 위해 최선을 다하는{" "}
          <span className="font-semibold">Problem Solver</span>입니다. 팀원들과
          협력하여 효율적인 솔루션을 만들어내는 것을 목표로 하고 있습니다.
          실전에서 좋은 솔루션을 찾아내어 프로젝트를 성공으로 이끈 경험이
          있습니다. 아래에서 저의 Soft Skill과 관련 프로젝트를 확인해보세요.
        </p>
      </div>

      <div className="flex flex-wrap gap-16 my-20">
        <h3 className=" subhead-text">Soft Skills</h3>

        <div className="flex flex-wrap gap-12 ">
          {softskills.map((project) => (
            <div className="lg:w-[420px] w-full" key={project.name}>
              <div className="w-12 h-12 block-container">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="flex items-center justify-center btn-front rounded-xl">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="object-contain w-1/2 h-1/2"
                  />
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <h4 className="text-2xl font-semibold font-pretendard">
                  {project.name}
                </h4>
                <p className="mt-2 font-light text-slate-500">
                  {project.description}
                </p>
                <div className="gap-2 mt-5 flex-items-center font-pretendard"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="flex flex-col ">
          <h3 className=" subhead-text">Projects</h3>

          {projects3.map((project, index) => (
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
                <h4 className="text-xl font-medium ">{project.title}</h4>
              </div>
              <div className="flex flex-col gap-3 mt-5 font-light text-slate-700">
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col py-20">
          {projects4.map((project, index) => (
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
                <h4 className="text-xl font-medium ">{project.title}</h4>
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

export default Projects;
