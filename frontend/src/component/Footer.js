import React from 'react'

function Footer() {
    return (
        <div>
             <footer className="container-fliud text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              FoodieFast brings the best from the kitchen right to your doorstep.
              Experience delicious meals without stepping out of your home.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-telephone"></i> +123 456 789</li>
              <li><i className="bi bi-envelope"></i> support@foodiefast.com</li>
              <li><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</li>
            </ul>
          </div>

          {/* Google Map Section */}
          <div className="col-md-4">
            <h5>Find Us</h5>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.748388733024!2d144.9630583153198!3d-37.81421797975148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d48df3c5a93%3A0x19b4c6c09a8d74a2!2sMelbourne%20Central%20Shopping%20Centre!5e0!3m2!1sen!2sau!4v1600453107786!5m2!1sen!2sau"
                width="100%"
                height="200"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-muted">&copy; 2024 FoodieFast. All rights reserved.</p>
            <div>
              <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Footer
