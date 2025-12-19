import { useRef, useState } from "react";
import { products } from "../data/products";
import ProductModal from "./ProductModal";

const ShopByCategory = () => {
  const sliderRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = (direction) => {
    if (direction === "left") {
      sliderRef.current.scrollLeft -= 280; // smaller for mobile
    } else {
      sliderRef.current.scrollLeft += 280;
    }
  };

  return (
    <section className="bg-gradient-to-l from-white via-sky-200 to-sky-300 py-16 md:py-24"id="hearing-loss">
      <div className="container mx-auto px-4 md:px-6">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 md:mb-4">
            Shop by Categories
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        {/* SLIDER */}
        <div className="relative">
          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100 transition"
          >
            ◀
          </button>

          {/* CARDS */}
          <div
            ref={sliderRef}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide px-2 md:px-0"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[250px] sm:w-[260px] md:w-[280px] bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-105 rounded-tr-[50px] rounded-bl-[50px] flex flex-col p-4 sm:p-5"
              >
                <div className="bg-gray-200 rounded h-40 flex justify-center items-center mb-4 sm:mb-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {product.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  {product.description}
                </p>

                <p className="font-bold text-blue-700 text-md mb-4">
                  {product.price}
                </p>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="self-start bg-blue-700 text-white py-2 px-5 rounded-md hover:bg-blue-800 transition text-sm"
                >
                  View Card
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full z-10 hover:bg-gray-100 transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default ShopByCategory;
