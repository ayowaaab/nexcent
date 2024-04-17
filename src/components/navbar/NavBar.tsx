const NavBar = () => {
  return (
    <>
      <header className="py-5">
        <nav className="flex justify-between items-center">
          <img src="/nav/Logo.png" alt="logo" />
          <ul className="flex gap-9">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
          <ul className="flex gap-3 items-center">
            <button className="text-primary">Login</button>
            <button className="bg-primary px-5 py-2 rounded-md text-white raduis">Sign up</button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
