const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white max-w-lg w-full mx-4 rounded-xl p-8 relative animate-fadeUp">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover rounded-lg mb-6"
        />

        <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.fullDescription}</p>

        <p className="text-xl font-semibold text-blue-600 mb-6">
          {product.price}
        </p>

        <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
          Book Free Consultation
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
