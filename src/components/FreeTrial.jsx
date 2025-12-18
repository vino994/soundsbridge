import { useState } from "react";
import img1 from "../assets/her-image-1.webp";

const FreeTrial = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-gradient-to-l from-white via-sky to-sky-300 py-24">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            OUR FREE TRIAL
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* TRIAL CARD */}
        <div className="max-w-6xl h-[500px] sm:h-[450px] mx-auto bg-white bg-opacity-10 backdrop-blur-md p-4 md:p-8 rounded-xl shadow-lg relative overflow-hidden animate-fadeUp">
          <img
            src={img1}
            alt="Free Trial"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute inset-0 w-full bg-black/25 sm:bg-black/30 rounded-xl flex flex-col items-center justify-center p-6 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4">
              Start Your Free Trial Today!
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 max-w-2xl">
              Experience the difference with our no-risk free trial. Try our hearing aids for 30 days and hear the world like never before.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition"
            >
              Book Your Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center">
              Book Your Free Trial Appointment
            </h2>

            <form className="space-y-4">
              {[{ label: "Full Name", type: "text", placeholder: "John Doe" },
                { label: "Email", type: "email", placeholder: "example@email.com" },
                { label: "Phone", type: "tel", placeholder: "+1 234 567 890" },
                { label: "Preferred Date", type: "date" }].map((field, index) => (
                <div key={index} className="flex flex-col">
                  <label className="text-gray-700 font-medium mb-1 sm:mb-2 text-left text-sm sm:text-base">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder || ""}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm sm:text-base"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label className="text-gray-700 font-medium mb-1 sm:mb-2 text-left text-sm sm:text-base">Notes</label>
                <textarea
                  placeholder="Any special requirements?"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-600 focus:outline-none resize-none text-sm sm:text-base"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreeTrial;
