import gsap from "gsap/all";
import { useLayoutEffect, useRef, useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const app = useRef(null);
  const tl = useRef<GSAPTimeline>();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline();
      tl.current
        .from(app.current, {
          x: -50,
          duration:.4,
          opacity: 0,
        });
       
    }, app);
    return () => ctx.revert();
  }, [app]);
  return (
    <>
      <header ref={app} className="py-5 hidden md:block">
        <nav className="flex justify-between gap-2 items-center ">
          <img className="object-cover" src="/nav/Logo.png" alt="logo" />
          <ul className="flex sm:gap-5">
            <a href="#" className="text-xs md:text-[16px]">
              Home
            </a>
            <a href="#" className="text-xs md:text-[16px]">
              Service
            </a>
            <a href="#" className="text-xs md:text-[16px]">
              Feature
            </a>
            <a href="#" className="text-xs md:text-[16px]">
              Product
            </a>
            <a href="#" className="text-xs md:text-[16px]">
              Testimonial
            </a>
            <a href="#" className="text-xs md:text-[16px]">
              FAQ
            </a>
          </ul>
          <ul className="flex gap-3 items-center">
            <button className="text-primary  hover:text-info ">Login</button>
            <button className="bg-primary hover:bg-info transition px-5 py-2 rounded-md text-white raduis whitespace-nowrap">
              Sign up
            </button>
          </ul>
        </nav>
      </header>
      {/* Header Mobile */}
      <img
        className="object-cover w-[30px] md:hidden z-10 top-5 fixed cursor-pointer"
        src={"/nav/" + (!visible ? "burger.png" : "Close.png")}
        style={
          visible
            ? {
                filter:
                  "brightness(0) saturate(100%) invert(84%) sepia(87%) saturate(0%) hue-rotate(333deg) brightness(108%) contrast(103%)",
              }
            : { backdropFilter: "-moz-initial" }
        }
        alt="logo"
        onClick={() => setVisible(!visible)}
      />
      <header
        className={
          "py-5 md:hidden w-1/2 bg-primary fixed top-0 left-0 p-5 pt-16 h-[100vh] transition translate-x-[-200%] " +
          (!visible ? "translate-x-[-200%]" : "translate-x-[0]")
        }
      >
        <nav className="flex flex-col justify-between gap-2 items-start">
          <ul className="flex flex-col gap-5 mt-5">
            <a href="#" className="text-white text-xs md:text-[16px]">
              Home
            </a>
            <a href="#" className="text-white text-xs md:text-[16px]">
              Service
            </a>
            <a href="#" className="text-white text-xs md:text-[16px]">
              Feature
            </a>
            <a href="#" className="text-white text-xs md:text-[16px]">
              Product
            </a>
            <a href="#" className="text-white text-xs md:text-[16px]">
              Testimonial
            </a>
            <a href="#" className="text-white text-xs md:text-[16px]">
              FAQ
            </a>
            <div className="flex gap-3 items-center mt-5">
              <button className="text-white">Login</button>
              <button className="bg-white px-5 py-2 rounded-md text-primary raduis whitespace-nowrap">
                Sign up
              </button>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
