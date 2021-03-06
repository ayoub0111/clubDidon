import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Typical from "react-typical";
import { useState } from "react";
import moment from "moment";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Blog = (props) => {
  const [actualitedetail, setActualitedetail] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/actualite/" + props.match.params.id)
      .then((res) => res.json())
      .then((result) => {
        setActualitedetail(result);
      });
  });
  const clockevent = (newDate) => {
    return moment(new Date(newDate)).format("DD/MM/YYYY");
  };
  return (
    <div>
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle" />
            <div className="preloader-img pere-text">
            <LazyLoadImage src="assets/img/logo/11icon.png" alt="looding" />
            </div>
          </div>
        </div>
      </div>
      {/* Preloader Start */}
      <Header />
      <main>
        {/*? Hero Start */}
        <div className="slider-area202">
          <div className="slider-height2 hero-overly2 d-flex align-items-center">
            <div className="">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-right">
                    <h2>
                      Bienvenue à
                      <Typical
                        loop={Infinity}
                        wrapper="a"
                        steps={[" Details", 1000]}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/*================Blog Area =================*/}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="blog_left_sidebar">
                  <article className="blog_item">
                    <div className="blog_item_img">
                    <LazyLoadImage
                        className="card-img rounded-0"
                        src={actualitedetail.imageUrl}
                        alt=""
                      />
                      <a href="#" className="blog_item_date">
                        {clockevent(actualitedetail.Date)}
                        <p>{actualitedetail.lieux}</p>
                      </a>
                    </div>
                    <div className="blog_details">
                      <h2>{actualitedetail.titre}</h2>
                      <p className="blog">{actualitedetail.description}</p>
                      <br></br>
                      <p className="blog">{actualitedetail.descriptionDetail}</p>
                      <a href={actualitedetail.fbUrl} hidden={!actualitedetail.fbUrl}>Page fb
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget instagram_feeds">
                    <h4 className="widget_title">Photos</h4>
                    <ul className="instagram_row flex-wrap">
                      <li>
                        <a href="#">
                        <LazyLoadImage
                            className="img-fluid"
                            src={actualitedetail.imageUrl1}
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <LazyLoadImage
                            className="img-fluid"
                            src={actualitedetail.imageUrl2}
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <LazyLoadImage
                            className="img-fluid"
                            src={actualitedetail.imageUrl3}
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <LazyLoadImage
                            className="img-fluid"
                            src={actualitedetail.imageUrl4}
                            alt
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                        <LazyLoadImage
                            className="img-fluid"
                            src={actualitedetail.imageUrl5}
                            alt
                          />
                        </a>
                      </li>
                      <li>
                      
                      <LazyLoadImage
                            className="img-fluid"
                            src={actualitedetail.imageUrl6}
                            alt
                          />
                      
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================Blog Area =================*/}
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
  );
};

export default Blog;
