
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
    </>
  );
};

export default Hero;
