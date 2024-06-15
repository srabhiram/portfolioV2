import { Link } from "react-router-dom";

let ProjectsCard = () => {
  return (
    <div className="flex justify-start items-center gap-[24px] flex-col">
      <div
        className="grid grid-cols-1 md:grid-cols-2 mx-2 mt-10
            place-content-center content-center gap-[28px] md:gap-[48px] bg-white"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
      >
        <div
          className="box-shad p-[20px] rounded-[14px] h-full bg-white"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <div className="flex justify-between items-center">
            <a href="https://github.com/srabhiram/ShopNest" target="_blank">
              <i className="fab fa-github text-4xl text-green-500"></i>
            </a>
            <a href="https://shopnnest.netlify.app/" target="_blank">
              <i className="fa fa-link text-4xl text-green-500"></i>
            </a>
          </div>
          <h1 className="font-bold text-3xl my-4">ShopNest</h1>
          <p className="text-xl"></p>
          <div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              React
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              JavaScript
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              Tailwind CSS
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              Redux
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              Firebase
            </p>
          </div>
        </div>
        <div
          className="box-shad p-[20px] rounded-[14px] h-full bg-white"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <div className="flex justify-between items-center">
            <a
              href="https://github.com/srabhiram/Weather-Application-Assignment"
              target="_blank"
            >
              <i className="fab fa-github text-4xl text-green-500"></i>
            </a>
            <a href="https://weather-opal-eight.vercel.app/" target="_blank">
              <i className="fa fa-link text-4xl text-green-500"></i>
            </a>
          </div>
          <h1 className="font-bold text-3xl my-4">
            Weather Forecast with City Tables
          </h1>
          <p className="text-xl"></p>
          <div className="flex justify-start items-center flex-wrap mt-3 gap-3 w-9/12">
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              React
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              TypeScript
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              Tailwind CSS
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              API
            </p>
            <p className="text-xl text-white px-3 py-1 bg-black font-bold">
              Redux
            </p>
          </div>
        </div>
      </div>
      <a
        href="/projects"
        className="block bg-green-500 text-white py-[12px] px-[28px] text-[20px] font-bold text-center rounded-[12px] hover:bg-green-400"
      >
        See more...
      </a>
    </div>
  );
};

export default ProjectsCard;
