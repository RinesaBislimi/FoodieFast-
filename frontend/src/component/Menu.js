import React, { useState } from "react";
import Header from "./Header";
import menu from "../assets/home.png";
import "../style/menu.css";
import pizza from "../assets/pizza1.jpg"
import burger from "../assets/burger.jpg";
import pizza1 from "../assets/pizza2.jpg"
import sushi from "../assets/sushi.jpg";


function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const items = [
    { id: 1, category: "Burger", title: "Delicious Burger", img: menu },
    { id: 2, category: "Pizza", title: "Cheesy Pizza", img: pizza },
    { id: 3, category: "Burger", title: "Spicy Burger", img: burger },
    { id: 4, category: "Pizza", title: "Veggie Pizza", img: pizza1 },
    { id: 5, category: "Sushi", title: "Fresh Sushi", img: sushi },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
  
    <>
       <Header />
      <div className="container-fluid">
        <div className="container menu-page">
        
          <div className="row my-3">
            <div className="col">
              <button
                className={`btn ${selectedCategory === "All" ? "btn-primary" : "btn-outline-primary"} mx-1`}
                onClick={() => handleCategoryChange("All")}
              >
                All
              </button>
              <button
                className={`btn ${selectedCategory === "Burger" ? "btn-primary" : "btn-outline-primary"} mx-1`}
                onClick={() => handleCategoryChange("Burger")}
              >
                Burger
              </button>
              <button
                className={`btn ${selectedCategory === "Pizza" ? "btn-primary" : "btn-outline-primary"} mx-1`}
                onClick={() => handleCategoryChange("Pizza")}
              >
                Pizza
              </button>
              <button
                className={`btn ${selectedCategory === "Sushi" ? "btn-primary" : "btn-outline-primary"} mx-1`}
                onClick={() => handleCategoryChange("Sushi")}
              >
                Sushi
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <div className="row menu-items">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={item.img} className="card-img-top" alt="Card" />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <button  >
                    <a className="btn check">Add to Cart</a>
                  
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
     
      </>
  );
 
}

export default Menu;
