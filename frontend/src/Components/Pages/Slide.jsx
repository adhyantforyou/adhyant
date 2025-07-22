import React from "react";
import "../../assets/css/Slide.css";
import { Link } from "react-router-dom";

export default function Slide() {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-touch="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/img/carousel-2.jpg" alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                    <h6 className="text-primary text-uppercase mb-2 animated slideInDown">
                      Premier Coaching & Mentorship Hub
                    </h6>
                    <h1 className="display-4 text-white animated slideInDown">
                      Empower Your Future with ADHYANT For You
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
  Where ambition meets <strong>expert guidance</strong>.
  <br />
  Learn from the minds who’ve made it — <span className="text-warning fw-bold">IITians</span> & <span className="text-warning fw-bold">industry leaders</span>.
  <br /><br />
  <em>From Fundamentals to Flight.

  Mentorship that lifts you beyond limits.</em>
</p>

                      <Link
                        to="/courses"
                        className="btn btn-primary py-md-3 px-md-4 animated slideInRight"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="/img/carousel-1.jpg" alt="" />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                style={{ background: "rgba(24, 29, 56, .7)" }}
              >
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-sm-10 col-lg-8">
                    <h6 className="text-primary text-uppercase mb-2 animated slideInDown">
                      Premier Coaching & Mentorship Hub
                    </h6>
                    <h1 className="display-4 text-white animated slideInDown">
                      Empower Your Future with ADHYANT For You
                    </h1>
                    <p className="fs-5 text-white mb-4 pb-2">
  Where ambition meets <strong>expert guidance</strong>.
  <br />
  Learn from the minds who’ve made it — <span className="text-warning fw-bold">IITians</span> & <span className="text-warning fw-bold">industry leaders</span>.
  <br /><br />
  <em>From Fundamentals to Flight.

  Mentorship that lifts you beyond limits.</em>
</p>

                      <Link
                        to="/courses"
                        className="btn btn-primary py-md-3 px-md-4 animated slideInRight"
                      >
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
