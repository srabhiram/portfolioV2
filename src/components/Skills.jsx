import React from "react";

const Skills = () => {
  return (
    <section
      className="mt-16 px-3"
      id="skills"
      data-aos="fade-up"
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <div className="flex justify-center items-center flex-col">
        <span className="block px-8 py-3 border-b-2 border-green-500 text-black font-bold text-left text-[24px]">
          Skills
        </span>
        <div className="flex items-center justify-center gap-[50px] flex-wrap mt-4 px-4 py-3">
          <i
            title="HTML5"
            class="fa-brands fa-html5 text-[70px] text-green-600"
          ></i>
          <i
            title="CSS3"
            class="fa-brands fa-css3-alt text-[70px] text-green-600"
          ></i>
          <i
            title="JavaScript"
            class="fa-brands fa-js text-[70px] text-green-600"
          ></i>
          <i
            title="ReactJS"
            class="fa-brands fa-react text-[70px] text-green-600"
          ></i>
          <i
            title="NodeJS"
            class="fa-brands fa-node-js text-[70px] text-green-600"
          ></i>
          <i
            title="Git"
            class="fa-brands fa-git text-[70px] text-green-600"
          ></i>
        </div>
      </div>
    </section>
  );
};

export default Skills;
