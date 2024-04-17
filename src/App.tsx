import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <>
      <div className="w-[95%] lg:w-[80%] mx-auto  ">
        <NavBar />
        <Hero />
      </div>
      <Footer />
    </>
  );
};

export default App;
