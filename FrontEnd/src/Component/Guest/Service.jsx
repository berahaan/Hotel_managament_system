import { useState } from "react";
import { Link } from "react-router-dom";
function Services() {
  const [selectedFood, setSelectedFood] = useState("");
  const foodItems = [
    {
      name: "Pizza",
      price: "$10",
      description: "Delicious cheesy pizza with a crispy crust.",
    },
    {
      name: "Burger",
      price: "$8",
      description: "Juicy beef burger with fresh vegetables.",
    },
    {
      name: "Pasta",
      price: "$12",
      description: "Creamy pasta with a rich Alfredo sauce.",
    },
    {
      name: "Sushi",
      price: "$15",
      description: "Fresh sushi with a variety of fillings.",
    },
    {
      name: "Salad",
      price: "$7",
      description: "Healthy salad with fresh greens and dressing.",
    },
    {
      name: "Steak",
      price: "$20",
      description: "Grilled steak cooked to perfection.",
    },
    {
      name: "Sandwich",
      price: "$6",
      description: "Tasty sandwich with ham and cheese.",
    },
    {
      name: "Soup",
      price: "$5",
      description: "Warm and comforting bowl of soup.",
    },
    {
      name: "Tacos",
      price: "$9",
      description: "Spicy tacos with a variety of toppings.",
    },
    {
      name: "Fish and Chips",
      price: "$14",
      description: "Crispy fried fish with golden fries.",
    },
    {
      name: "Fried Chicken",
      price: "$11",
      description: "Crispy and juicy fried chicken.",
    },
    {
      name: "Ice Cream",
      price: "$4",
      description: "Creamy ice cream with multiple flavors.",
    },
    {
      name: "Fruit Salad",
      price: "$6",
      description: "Fresh fruit salad with a variety of fruits.",
    },
    {
      name: "Cheesecake",
      price: "$8",
      description: "Rich and creamy cheesecake.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto p-8 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Menu Food Items</h2>
        <Link
          to="/"
          className="text-green-800 hover:text-green-400 text-3xl mb-40"
        >
          Home
        </Link>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems.map((item) => (
            <li
              key={item.name}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <button
                className="w-full text-left"
                onClick={() => setSelectedFood(item.name)}
              >
                <div className="text-xl font-semibold mb-2">{item.name}</div>
                <div className="text-gray-600 mb-4">{item.price}</div>
                <div className="text-gray-700">{item.description}</div>
              </button>
              {selectedFood === item.name && (
                <div className="mt-4 text-blue-700">
                  Selected: {selectedFood}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Hotel Name. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms of Service
            </a>
          </div>
          <div className="mt-4">
            <p>123 Hotel Street, City, Country</p>
            <p>Email: info@hotel.com | Phone: (123) 456-7890</p>
          </div>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Twitter
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Services;
