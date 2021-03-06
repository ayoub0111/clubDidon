import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");




  const notify = () => {
    toast.success("Envoyer avec succès !", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000,
    });
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
        //  console.log(result.text);
        },
        (error) => {
        //  console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="bodyBg">
      <div>
        {/* Preloader Start */}
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle" />
              <div className="preloader-img pere-text">
                <img src="assets/img/logo/11icon.png" alt="looding" />
              </div>
            </div>
          </div>
        </div>
        {/* Preloader Start */}
        <Header />
        <main>
          {/*? Hero Start */}
          <div className="slider-area166">
            <div className="slider-height2 hero-overly2 d-flex align-items-center">
              <div className="">
                <div className="row">
                  <div className="col-xl-12">
                    {/* className="text-center */}
                    <div className="hero-cap hero-cap2 text-right ">
                      <h2>
                        Bienvenue à
                        <Typical
                          loop={Infinity}
                          wrapper="a"
                          steps={[
                            " Contact",
                            1000,
                            "  Club didon de Carthage",
                            1000,
                          ]}
                        />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero End */}
          {/* ================ contact section start ================= */}
          <section className="contact-section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2 className="contact-title">Rester en contact</h2>
                </div>
                <div className="col-lg-8">
                  <form
                    //  onSubmit={sendEmail}
                    onSubmit={(e) => {
                      sendEmail(e);
                      notify();
                    }}
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            className="form-control "
                            style={{ background: "black" }}
                            name="name"
                            id="name"
                            type="text"
                           
               
                            placeholder="Nom et Prénom"
                            onChange={event => {setName(event.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            style={{ background: "black" }}
                            // className="form-control valid"
                            className="form-control"
                            name="email"
                            id="email"
                            type="email"
                         
                          
                            placeholder="Email"
                            onChange={event => {setEmail(event.target.value)}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          style={{ background: "black" }}
                          className="form-control"
                          name="subject"
                          id="subject"
                          type="text"
                       
                
                          placeholder="Objet"
                          onChange={event => {setObjet(event.target.value)}}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            style={{ background: "black" }}
                            className="form-control w-100"
                            name="message"
                            id="message"
                            cols={30}
                            rows={9}
                         
                          
                            placeholder=" Message"
                            defaultValue={""}
                            onChange={event => {setMessage(event.target.value)}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <button
                        type="submit" disabled={!name || !email || !objet || !message  }
                        className="boxed-btn"
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-lg-3 offset-lg-1">
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <i className="fas fa-university"></i>
                    </span>
                    <div className="media-body">
                      <h3>Maison des associations de Sidi Bou Said</h3>
                      <p></p>
                    </div>
                  </div>

                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <i className="far fa-paper-plane"></i>
                    </span>
                    <div className="media-body">
                      <h3>clubdidon@gmail.com</h3>
                      <p>Envoyez nous votre requete</p>
                    </div>
                  </div>
                  <div className="media contact-info">
                    <span className="contact-info__icon">
                      <i className="ti-tablet" />
                    </span>
                    <div className="media-body">
                      <h3>24525690 / 53087334</h3>
                      <p>Du lundi au vendredi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ================ contact section end ================= */}
        </main>
        <Footer />
        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
