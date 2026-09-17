import ThemeToggle from "../components/ThemeToggle";

function Login({ isDarkMode, onToggleTheme }) {
  return (
    <div className="login-page container py-5">

      {/* Theme Toggle */}
      <div className="d-flex justify-content-end mb-3">
        <ThemeToggle
          isDarkMode={isDarkMode}
          onToggle={onToggleTheme}
        />
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5">

          <div className="card ui-card login-card shadow p-4">

            {/* College Logo */}
            <div className="text-center mb-3">
              <img
                src="/Logo.png"
                alt="College Logo"
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* College Name */}
            <div className="text-center mb-4">

              <h4 className="mb-1 text-body">
                DR. DHARMENDRA SINGH B.S MAHAVIDYALAYA
              </h4>

              <p className="mb-1 text-body">
                डॉ. धर्मेंद्र सिंह बंशीधर सचन महाविद्यालय
              </p>

              <small className="text-body-secondary">
                CSJM Affiliated | Code: KN145
              </small>

            </div>

            <hr />

            {/* Login Heading */}
            <h2 className="text-center mb-4 text-body">
              Login
            </h2>

            {/* Login Form */}
            <form>

              {/* Email */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label text-body"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label text-body"
                >
                  Password
                </label>

                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 my-3"
              >
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Login
              </button>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;