import React from "react";

function Card({ product }) {
  const handleBuy = () => {
    alert(`You bought: ${product.title} for ${product.price}`);
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Sale":
        return "bg-red-500";
      case "New":
        return "bg-green-500";
      case "Limited":
        return "bg-violet-500";
    }
  };

  return (
    <div
      className="relative bg-white rounded-xl p-4 flex flex-col items-center text-center gap-2
                 hover:shadow-md transition-shadow
                 w-full max-w-[300px]"
    >
      
      {product.badge && (
        <span
          className={`${getBadgeColor(product.badge)} text-white text-xs px-2 py-1 rounded absolute top-2 left-2`}
        >
          {product.badge}
        </span>
      )}

      
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-cover rounded-md"
      />

      
      <h2 className="font-semibold text-lg">{product.title}</h2>

      
      <p className="text-gray-500 text-sm">{product.description}</p>

      
      <div className="w-full flex justify-between items-center mt-2">
        <div className="flex items-center gap-2">
          <p className="font-bold text-gray-800">{product.price}</p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through">{product.oldPrice}</p>
          )}
        </div>
        <button
          onClick={handleBuy}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Card;






