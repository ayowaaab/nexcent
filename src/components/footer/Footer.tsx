const Footer = () => {
  return (
    <>
      <footer className="flex flex-col gap-5 md:flex-row justify-between bg-secondary p-10 lg:px-28 text-white">
        <ul className="flex flex-col gap-8">
          <img className="w-1/2 pt-2" src="/footer/FooterLogo.png" alt="LogoImg" />
          <p className="text-sm leading-6 text-silver">
            Copyright © 2020 Nexcent ltd.
            <br />All rights reserved
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
          <a href="" className="font-light hover:underline text-silver">About us</a>
          <a href="" className="font-light hover:underline text-silver">Blog</a>
          <a href="" className="font-light hover:underline text-silver">Contact us</a>
          <a href="" className="font-light hover:underline text-silver">Pricing</a>
          <a href="" className="font-light hover:underline text-silver">Testimonials</a>
        </ul>
        <ul className="flex flex-col gap-1">
          <h4 className="font-medium text-2xl mb-5">Support</h4>
          <a href=""  className="font-light hover:underline text-silver">Help center</a>
          <a href=""  className="font-light hover:underline text-silver">Terms of service</a>
          <a href=""  className="font-light hover:underline text-silver">Legal</a>
          <a href=""  className="font-light hover:underline text-silver">Privacy policy</a>
          <a href=""  className="font-light hover:underline text-silver">Status</a>
        </ul>
        <ul className="flex flex-col gap-1">
          <h4 className="font-medium text-2xl mb-5">Stay up to date</h4>
          <input className="text-sm p-2 rounded-md bg-grey placeholder:text-white outline-none" placeholder="Your email address" type="text" />
        </ul>
      </footer>
    </>
  );
};

export default Footer;
