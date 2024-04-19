import { cards, details } from "../../utils/db";
import { Card, ReadMoreCard } from "./Cards";
import Detail from "./Detail";
import Reach from "./Reach";

const MainSection = () => {
  return (
    <>
      <div className="my-24 w-[95%] lg:w-[80%] mx-auto">
        <h2 className="text-[36px] text-center font-medium text-secondary my-5">
          Our Client
        </h2>
        <p className="text-lg text-center text-grey mb-5">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex items-center justify-center md:justify-between mt-14 sm:w-full gap-5 flex-wrap w-1/2 mx-auto">
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-1.png"
            alt="client-1"
          />
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-2.png"
            alt="client-2"
          />
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-3.png"
            alt="client-3"
          />
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-4.png"
            alt="client-4"
          />
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-5.png"
            alt="client-5"
          />
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-6.png"
            alt="client-6"
          />
          <img
            className="w-[70px] md:w-[50px]"
            src="/hero/client-7.png"
            alt="client-7"
          />
        </div>
      </div>
      <div className="my-20 w-[95%] lg:w-[80%] mx-auto">
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
        <div className="flex text-center md:text-start gap-10 md:flex-row flex-col items-center justify-between bg-silver px-[10%] py-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-medium text-black">
              Helping a local 
              <br />
              <span className="text-primary">business reinvent itself</span>
            </h1>
            <p className="text-grey">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid gap-x-10 gap-y-3 grid-cols-1 sm:grid-cols-2">
            <Reach
              img="/mainSection/membre.png"
              title="Members"
              description="2,245,341"
            />
            <Reach
              img="/mainSection/club.png"
              title="Clubs"
              description="46,328"
            />
            <Reach
              img="/mainSection/event.png"
              title="Event Bookings"
              description="828,867"
            />
            <Reach
              img="/mainSection/payement.png"
              title="Payments"
              description="1,926,436"
            />
          </div>
        </div>
        <Detail
          description={details[1].description}
          img={details[1].img}
          title={details[1].title}
        />
        <div className="bg-silver py-10 flex flex-col md:items-stretch items-center md:flex-row px-5 md:px-20 justify-between gap-5 md:gap-20 md:max-h-[400px] mb-20">
          <img
            className="w-1/3 object-contain"
            src="/mainSection/homme-2.jpg"
            alt="img-Tim"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-secondary text-xs md:text-md">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h2 className="text-lg text-primary font-medium">Tim Smith</h2>
              <p className="text-sm text-grey mb-5">
                British Dragon Boat Racing Association
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-2">
              <div className="grid grid-cols-6 gap-5 md:mb-0 mb-5">
                <img className="w-[32px] md:w-[50px]" src="/hero/client-1.png" alt="img" />
                <img className="w-[32px] md:w-[50px]" src="/hero/client-2.png" alt="img" />
                <img className="w-[32px] md:w-[50px]" src="/hero/client-3.png" alt="img" />
                <img className="w-[32px] md:w-[50px]" src="/hero/client-4.png" alt="img" />
                <img className="w-[32px] md:w-[50px]" src="/hero/client-5.png" alt="img" />
                <img className="w-[32px] md:w-[50px]" src="/hero/client-6.png" alt="img" />
              </div>
              <button className="text-primary font-medium whitespace-nowrap">
                Meet all customers →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center mb-5 font-bold text-dgrey">
          Caring is the new marketing
        </h1>
        <p className="text-grey text-center w-full px-5 md:px-0 md:w-1/2 mx-auto ">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.
        </p>
        <div className="flex flex-col md:flex-row justify-around gap-14 my-20 w-4/5 mx-auto">
          <ReadMoreCard title="Creating Streamlined Safeguarding Processes with OneRen" />
          <ReadMoreCard title="What are your safeguarding responsibilities and how can you manage them?" />
          <ReadMoreCard title="Revamping the Membership Model with Triathlon Australia" />
        </div>
      </div>
      <div className="flex flex-col items-center bg-silver py-14 gap-5">
        <h1 className="text-secondary leading-[1.2] text-3xl md:text-5xl w-full md:w-2/3 text-center font-bold">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="bg-primary text-xs md:text-sm text-white font-medium rounded-md py-2 md:py-3 px-3 md:px-6">
          Get a Demo →
        </button>
      </div>
    </>
  );
};

export default MainSection;
