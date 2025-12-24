import React from "react";
import Card from "./components/Card";

// Safe Image Imports
import coffee from "./assets/coffee.jpg";
import laptop from "./assets/laptop.jpg";
import watch from "./assets/watch.jpg";
import cup from "./assets/cup.jpg";

function App() {
  const products = [
    {
      id: 1,
      title: "Stylish Coffee Mug",
      price: "$15.00",
      oldPrice: "$20.00",
      description: "Minimal ceramic mug for coffee or tea.",
      image: coffee,
      badge: "Sale",
    },
    {
      id: 2,
      title: "Modern Wrist Watch",
      price: "$120.00",
      description: "Elegant watch for everyday wear.",
      image: watch,
      badge: "New",
    },
    {
      id: 3,
      title: "Office Coffee Set",
      price: "$30.00",
      description: "Perfect cup set for office desks.",
      image: cup,
      badge: null,
    },
    {
      id: 4,
      title: "Laptop",
      price: "$2800.00",
      description: "Apple brand Laptop and personal computer",
      image: laptop,
      badge: "Limited",
    },
  ];

  return (
    <div className="p-4 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;






