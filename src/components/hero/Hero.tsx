import { cards, details } from "../../utils/db";
import Card from "./Card";
import Detail from "./Detail";

const Hero = () => {
  return (
    <>
      <div className="flex gap-5 items-center md:justify-between justify-center h-[70vh] mt-10">
        <div className="flex flex-col md:items-start items-center gap-5">
          <div>
            <h1 className="text-black  text-5xl font-bold leading-[1.3]">
              Lessons and insights <br />
              <span className="text-primary">from 8 years</span>
            </h1>
            <h2 className="text-grey mt-5">
              Where to grow your business as a photographer: site or social
              media?
            </h2>
          </div>
          <div>
            <button className="bg-primary hover:bg-info transition  mt-5 md:px-6 px-12 py-3 rounded-md text-white ">
              Register
            </button>
          </div>
        </div>
        <img
          className="hidden md:block w-1/2 h-[90%] object-contain"
          src="/hero/Hero-img-1.png"
          alt="hero-1"
        />
      </div>
      <div className="my-10">
        <h2 className="text-[36px] text-center font-medium text-secondary my-5">
          Our Client
        </h2>
        <p className="text-lg text-center text-grey mb-5">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex items-center justify-center md:justify-between mt-14 sm:w-full gap-5 flex-wrap w-1/2 mx-auto">
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-1.png"
            alt="client-1"
          />
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-2.png"
            alt="client-2"
          />
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-3.png"
            alt="client-3"
          />
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-4.png"
            alt="client-4"
          />
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-5.png"
            alt="client-5"
          />
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-6.png"
            alt="client-6"
          />
          <img
            className="w-[100px] md:w-[50px]"
            src="/hero/client-7.png"
            alt="client-7"
          />
        </div>
      </div>
      <div className="my-20">
        <h2 className="w-full lg:w-1/2 sm:w-2/3 md:w-2/3 mx-auto text-[36px] text-center text-secondary font-medium my-5">
          Manage your entire community in a single system
        </h2>
        <p className="text-lg text-center text-grey mb-5">
          Who is Nextcent suitable for?
        </p>
        <div className="flex flex-col md:flex-row justify-between mt-14 ">
          {cards.map((el, i) => (
            <Card
              key={i}
              title={el.title}
              img={el.img}
              description={el.description}
            />
          ))}
        </div>
      </div>
      <div>
        <Detail
          description={details[0].description}
          img={details[0].img}
          title={details[0].title}
        />
        <Detail
          description={details[1].description}
          img={details[1].img}
          title={details[1].title}
        />
      </div>
    </>
  );
};

export default Hero;
