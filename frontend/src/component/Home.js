import React ,{useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import home from "../assets/home1.png";
import menu1 from "../assets/home.png";
import oferta from "../assets/oferta1.png"
import oferta1 from "../assets/oferta2.png"
import oferta2 from "../assets/oferta3.png"
import pizza from "../assets/pizza1.jpg"
import burger from "../assets/burger.jpg";
import pizza1 from "../assets/pizza2.jpg"
import Footer from "./Footer";
import Header  from "./Header";

function Home() {

  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} item(s) to cart.`);
    handleCloseModal();
  };

 
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
    return () => {
      document.body.classList.remove('blur');
    };
  }, [showModal]);

  return (
    <>
    <Header/>
    <div>
      <div className="container home">
        <div className="row align-items-center">
          <div className="col-md-6 side1  text-md-left">
            <h5 style={{ textTransform: "uppercase" }}>
              Shijoni më të mirën nga{" "}
              <span style={{ color: "red" }}>kuzhina</span>, pa dalë nga{" "}
              <span style={{ color: "red" }}>shtëpia</span>!
            </h5>
            <button className="btn-order"><a href="/menu">Porosit Tani!
              </a></button>
          </div>
          <div className="col-md-6 side2 text-center">
            <img src={home} alt="Home" className="img-home img-fluid" />
          </div>
        </div>
      </div>

      <div className="container-fluid menu">
        <div className="container">
          <h3 className="menu-title">Menu</h3>
          <div className="row">
          <div className="col-md-3">
    <div className="card" style={{ width: "18rem" }}>
        <img src={menu1} className="card-img-top" alt="Card image" />
        <div className="card-body">
            <h5 className="card-title">Menu 1</h5>
            <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <button onClick={handleShowModal} className="btn check">
                Go somewhere
            </button>
        </div>
    </div>
</div>

            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={pizza} className="card-img-top" alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Menu 2</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button onClick={handleShowModal} className="btn check">
    Go somewhere
</button>

                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={burger} className="card-img-top" alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Menu 3</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button onClick={handleShowModal} className="btn check">
    Go somewhere
</button>


                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src={pizza1} className="card-img-top" alt="Card image" />
                <div className="card-body">
                  <h5 className="card-title">Menu 4</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button onClick={handleShowModal} className="btn check">
    Go somewhere
</button>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-more">
          <btn className="see-more">
            <a href="/menu">See More
              </a></btn>
        </div>
      </div>


      {/* Modal -Menu */}
      {showModal && (
    <div
        className="modal fade show"
        style={{ display: "block", zIndex: 1050 }}
        tabIndex="-1"
        role="dialog"
        onClick={handleCloseModal}
    >
        <div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Order Menu 1</h5>
                    <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex">
                    <div className="modal-image">
                        <img src={menu1} alt="Menu 1" className="img-fluid mb-3" />
                    </div>
                    <div className="modal-details ms-3">
                        <p>Delicious food item description goes here.</p>
                        <div className="d-flex align-items-center">
                            <button onClick={decreaseQuantity} className="btn btn-light">-</button>
                            <span className="mx-2">{quantity}</span>
                            <button onClick={increaseQuantity} className="btn btn-light">+</button>
                        </div>
                        <p className="mt-2">Price: $10.00</p>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
)}


      
      {/* Oferta -section */}

      <div className="container-fluid oferta">
      <div className="container">
        <h3 className="oferta-title">Oferta</h3>
        <div className="row">
          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
              <button 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide-to="0" 
                className="active" 
                aria-current="true" 
                aria-label="Slide 1"
              ></button>
              <button 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide-to="1" 
                aria-label="Slide 2"
              ></button>
              <button 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide-to="2" 
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={oferta} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Oferta 1</h5>
                  <p>Super oferta për super ekipin.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={oferta1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Oferta 2</h5>
                  <p>Super oferta 2</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={oferta2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Oferta 3</h5>
                  <p>Super oferta 3</p>
                </div>
              </div>
            </div>
            <button 
              className="carousel-control-prev" 
              type="button" 
              data-bs-target="#carouselExampleCaptions" 
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              data-bs-target="#carouselExampleCaptions" 
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    </div>
    <Footer/>
    </>
  );
}

export default Home;
