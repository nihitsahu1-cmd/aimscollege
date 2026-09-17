function Header() {
  return (
    <header className="college-header">
      <div className="container">
        <div className="row align-items-center justify-content-center g-3">

          {/* College Logo */}
          <div className="col-12 col-md-auto text-center">
            <img
              src="/Logo.png"
              alt="College Logo"
              className="college-logo"
            />
          </div>

          {/* College Information */}
          <div className="col-12 col-md text-center text-md-start">

            {/* AIM Group */}
            <div className="aim-group-highlight">
              <i className="bi bi-building-fill me-2"></i>
              AIM GROUP OF INSTITUTION
            </div>

            {/* College Name */}
            <h1 className="college-name">
              DR. DHARMENDRA SINGH B.S MAHAVIDYALAYA
            </h1>

            {/* Hindi Name */}
            <h2 className="college-hindi">
              डॉ. धर्मेंद्र सिंह बंशीधर सचन महाविद्यालय
            </h2>

            {/* Address */}
            <p className="college-address">
              <i className="bi bi-geo-alt-fill me-1"></i>
              Raipur, Patara, Ghatampur, Kanpur Nagar,
              Uttar Pradesh - 209308
            </p>

            {/* Badges */}
            <div className="college-badges">
              <span className="badge badge-affiliated">
                CSJM Affiliated
              </span>

              <span className="badge badge-code">
                Code: KN145
              </span>
            </div>

          </div>

          {/* Admission Box */}
          <div className="col-12 col-md-8 col-lg-auto">
            <div className="admission-box">

              <span>
                <i className="bi bi-megaphone-fill me-2"></i>
                ADMISSION OPEN
              </span>

              <strong>
                2026-27
              </strong>

              <small>
                Applications are now open
              </small>

            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;