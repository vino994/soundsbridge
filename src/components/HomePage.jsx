// src/components/HomePage.jsx
import Navbar from "./Navbar.jsx";
import heroImg from "../assets/hero-image.jpg";

const HomePage = () => {
  return (
    <div className="relative w-full">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] md:h-[85vh] flex items-center">
        {/* BACKGROUND IMAGE */}
        <img
          src={heroImg}
          alt="Hearing Aid"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-6 flex items-center h-full mt-10">
          <div className="max-w-xl bg-black/20 p-4 sm:p-6 md:p-10 rounded-lg animate-fadeLeft mt-12 sm:mt-16 md:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-snug sm:leading-tight md:leading-tight">
              soundsbridge hearing aids will change your life
            </h1>

            <p className="text-xs sm:text-sm md:text-lg text-gray-200 mb-4 sm:mb-6">
              Experience the best in hearing technology, delivered directly to your doorstep.
            </p>

            <a
              href="#trial"
              className="inline-block bg-orange-500 text-white px-3 sm:px-5 md:px-8 py-2 sm:py-3 md:py-4 rounded-md text-xs sm:text-sm md:text-lg font-semibold hover:bg-orange-600 transition"
            >
              CHECK IF YOU QUALIFY FOR A NO-RISK TRIAL
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
