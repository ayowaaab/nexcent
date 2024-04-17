import MainSection from "./components/detail/MainSection";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/navbar";

const App = () => {
  return (
    <>
      <div className="bg-silver">
        <div className="w-[95%] lg:w-[80%] mx-auto ">
          <NavBar />
          <Hero />
        </div>
      </div>

      <MainSection />

      <Footer />
    </>
  );
};

export default App;
