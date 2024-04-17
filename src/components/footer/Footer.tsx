const Footer = () => {
  return (
    <>
      <footer className="flex justify-between bg-secondary py-10 px-20 text-white">
        <ul className="flex flex-col gap-5">
          <img src="/footer/FooterLogo.png" alt="LogoImg" />
          <p className="text-lg">
            Copyright © 2020 Nexcent ltd.
            <br /> All rights reserved
          </p>
          <div className="flex gap-5">
            <a href=""><img  className="w-[32px]" src="/footer/instagram.png" alt="social"/></a>
            <a href=""><img className="w-[32px]" src="/footer/dribble.png" alt="social" /></a>
            <a href=""><img className="w-[32px]" src="/footer/twitter.png" alt="social" /></a>
            <a href=""><img className="w-[32px]" src="/footer/youtube.png" alt="social" /></a>
          </div>
        </ul>
        <ul className="flex flex-col gap-1">
          <h4 className="font-medium text-2xl mb-5">Company</h4>
          <a href="" className="font-light hover:underline">About us</a>
          <a href="" className="font-light hover:underline">Blog</a>
          <a href="" className="font-light hover:underline">Contact us</a>
          <a href="" className="font-light hover:underline">Pricing</a>
          <a href="" className="font-light hover:underline">Testimonials</a>
        </ul>
        <ul className="flex flex-col gap-1">
          <h4 className="font-medium text-2xl mb-5">Support</h4>
          <a href=""  className="font-light hover:underline">Help center</a>
          <a href=""  className="font-light hover:underline">Terms of service</a>
          <a href=""  className="font-light hover:underline">Legal</a>
          <a href=""  className="font-light hover:underline">Privacy policy</a>
          <a href=""  className="font-light hover:underline">Status</a>
        </ul>
        <ul className="flex flex-col gap-1">
          <h4 className="font-medium text-2xl mb-5">Stay up to date</h4>
          <input className="px-3 py-2 rounded-md bg-grey placeholder:text-white outline-none" placeholder="Your email address" type="text" />
        </ul>
      </footer>
    </>
  );
};

export default Footer;
