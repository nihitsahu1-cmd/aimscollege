function Hero() {
  return (
    <div
      id="hero"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
    >

      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="0"
          className="active"
          aria-label="Slide 1"
        ></button>

        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>

        <button
          type="button"
          data-bs-target="#hero"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel */}
      <div className="carousel-inner">

        {/* ================= SLIDE 1 ================= */}
        <div className="carousel-item active">

          <img
            src="/hero1.jpg"
            className="d-block w-100 hero-image"
            alt="Dr. Dharmendra Singh B.S. Mahavidyalaya"
          />

          <div className="hero-overlay"></div>

          <div className="carousel-caption hero-content">

            <div className="container">

              <div className="row align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-lg-8 text-start">

                  <p className="text-uppercase fw-semibold mb-3 hero-kicker">
                    Welcome to
                  </p>

                  <h1 className="display-3 fw-bold mb-3">
                    Dr. Dharmendra Singh
                    <br />
                    <span>B.S. Mahavidyalaya</span>
                  </h1>

                  <div className="hero-line mb-4"></div>

                  <p className="lead mb-4 hero-affiliation">
                    Affiliated with
                    <strong>
                      {" "}Chhatrapati Shahu Ji Maharaj University
                    </strong>
                    <br />
                    (C.S.J.M.U), Kanpur
                  </p>

                  <p className="mb-4 hero-organizer">
                   Organized By: A Proud Initiative of
                    <strong> AIM Group of Institutions</strong>
                  </p>

                  <div className="d-flex flex-wrap gap-3">

                    <a
                      href="#admission"
                      className="btn btn-warning btn-lg px-4 py-3 rounded-2 fw-semibold"
                    >
                      Apply Online
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </a>

                    <a
                      href="#contact"
                      className="btn btn-outline-light btn-lg px-4 py-3 rounded-2 fw-semibold"
                    >
                      Admission Enquiry
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>

                  </div>

                </div>


                {/* RIGHT ADMISSION CARD */}
                <div className="col-lg-4 d-none d-lg-block">

                  <div className="admission-card">

                    <div className="admission-icon">
                      <i className="bi bi-mortarboard-fill"></i>
                    </div>

                    <p className="small text-uppercase fw-semibold mb-2">
                      Admissions Open
                    </p>

                    <h3 className="fw-bold mb-3">
                      2026
                    </h3>

                    <p className="small mb-4">
                      Begin your journey towards a
                      brighter academic future.
                    </p>

                    <a
                      href="#admission"
                      className="btn btn-light w-100 rounded-2 fw-semibold"
                    >
                      Apply Now
                      <i className="bi bi-arrow-right ms-2"></i>
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= SLIDE 2 & 3 ================= */}
        {[2, 3].map((number) => (

          <div
            className="carousel-item"
            key={number}
          >

            <img
              src={`/hero${number}.jpg`}
              className="d-block w-100 hero-image"
              alt="College activities"
            />

            <div className="hero-overlay"></div>

          </div>

        ))}

      </div>


      {/* Previous */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#hero"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>


      {/* Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#hero"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Hero;