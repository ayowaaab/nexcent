
const Hero = () => {
  return (
    <>

      <div className="flex justify-between h-[70vh] mt-10">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-black text-5xl font-bold leading-[1.3]">
              Lessons and insights <br />
              <span className="text-primary">from 8 years</span>
            </h1>
            <h2 className="text-grey mt-5">
              Where to grow your business as a photographer: site or social
              media?
            </h2>
          </div>
          <div>
            <button className="bg-primary mt-5 px-6 py-3 rounded-md text-white raduis ">
              Register
            </button>
          </div>
        </div>

        <img
          className="w-1/2 object-contain"
          src="/hero/Hero-img-1.png"
          alt="hero-1"
        />
      </div>
    </>
  );
};

export default Hero;
