import Card from "./Card";

const Hero = () => {
  const cards = [
    {
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      title: "Membership Organisations",
      img: "membre-1.png",
    },
    {
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      title: "National Associations",
      img: "membre-2.png",
    },
    {
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      title: "Clubs And Groups",
      img: "membre-3.png",
    },
  ];
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
            <button className="bg-primary hover:bg-info transition  mt-5 md:px-6 px-12 py-3  rounded-md text-white ">
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
        <h2 className="text-[36px] text-center text-secondary my-5">
          Our Client
        </h2>
        <p className="text-lg text-center text-grey mb-5">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-between mt-14">
          <img className="w-[50px]" src="/hero/client-1.png" alt="client-1" />
          <img className="w-[50px]" src="/hero/client-2.png" alt="client-2" />
          <img className="w-[50px]" src="/hero/client-3.png" alt="client-3" />
          <img className="w-[50px]" src="/hero/client-4.png" alt="client-4" />
          <img className="w-[50px]" src="/hero/client-5.png" alt="client-5" />
          <img className="w-[50px]" src="/hero/client-6.png" alt="client-6" />
          <img className="w-[50px]" src="/hero/client-7.png" alt="client-7" />
        </div>
      </div>
      <div className="my-20">
        <h2 className=" w-1/2 mx-auto text-[36px] text-center text-secondary my-5">
          Manage your entire community in a single system
        </h2>
        <p className="text-lg text-center text-grey mb-5">
          Who is Nextcent suitable for?
        </p>
        <div className="flex justify-between mt-14">
          {cards.map((el) => (
            <Card title={el.title} img={el.img} description={el.description} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
