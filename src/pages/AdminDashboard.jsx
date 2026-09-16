import { Link } from "react-router-dom";

function AdminDashboard({ isDarkMode, onToggleTheme }) {
  return (
    <div className="min-vh-100 bg-body">

      {/* ================= SIDEBAR ================= */}
      <aside
        className="bg-dark text-white position-fixed top-0 start-0 vh-100 p-3"
        style={{ width: "260px" }}
      >

        {/* Brand */}
        <div className="d-flex align-items-center gap-3 border-bottom border-secondary pb-3">
          <div
            className="bg-warning text-dark rounded-3 d-flex align-items-center justify-content-center fw-bold fs-4"
            style={{ width: "45px", height: "45px" }}
          >
            A
          </div>

          <div>
            <h5 className="mb-0">AIMS College</h5>
            <small className="text-secondary">Admin Panel</small>
          </div>
        </div>

        {/* Menu */}
        <nav className="nav flex-column mt-4 gap-1">

          <Link
            to="/admin"
            className="nav-link active bg-warning text-dark rounded-2 fw-semibold"
          >
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>

          <Link
            to="/admin/gallery"
            className="nav-link text-white rounded-2"
          >
            <i className="bi bi-images me-2"></i>
            Gallery
          </Link>

          <Link
            to="/admin/courses"
            className="nav-link text-white rounded-2"
          >
            <i className="bi bi-book me-2"></i>
            Courses
          </Link>

          <Link
            to="/admin/notices"
            className="nav-link text-white rounded-2"
          >
            <i className="bi bi-megaphone me-2"></i>
            Notices
          </Link>

          <Link
            to="/admin/admissions"
            className="nav-link text-white rounded-2"
          >
            <i className="bi bi-mortarboard me-2"></i>
            Admissions
          </Link>

          <Link
            to="/admin/settings"
            className="nav-link text-white rounded-2"
          >
            <i className="bi bi-gear me-2"></i>
            Settings
          </Link>

        </nav>

        {/* Bottom Menu */}
        <div className="position-absolute bottom-0 start-0 w-100 p-3">

          <Link
            to="/"
            className="nav-link text-white rounded-2"
          >
            <i className="bi bi-house me-2"></i>
            View Website
          </Link>

          <Link
            to="/login"
            className="nav-link text-danger rounded-2"
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </Link>

        </div>

      </aside>


      {/* ================= MAIN CONTENT ================= */}
      <main
        className="p-4"
        style={{ marginLeft: "260px" }}
      >

        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold mb-1">
              Dashboard
            </h2>

            <p className="text-secondary mb-0">
              Welcome back, Administrator 👋
            </p>
          </div>

          <div className="d-flex align-items-center gap-3">

            {/* Theme Button */}
            <button
              className="btn btn-outline-secondary rounded-circle"
              onClick={onToggleTheme}
              title="Toggle Theme"
              style={{ width: "42px", height: "42px" }}
            >
              <i
                className={
                  isDarkMode
                    ? "bi bi-sun"
                    : "bi bi-moon"
                }
              ></i>
            </button>

            {/* Profile */}
            <div className="d-flex align-items-center gap-2">

              <div
                className="bg-warning rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "42px", height: "42px" }}
              >
                <i className="bi bi-person text-dark fs-5"></i>
              </div>

              <div className="d-none d-md-block">
                <strong className="d-block">
                  Administrator
                </strong>

                <small className="text-secondary">
                  Admin
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* ================= STATISTICS ================= */}
        <div className="row g-4 mb-4">

          {/* Gallery */}
          <div className="col-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center gap-3">

                <div className="bg-primary-subtle text-primary rounded-3 p-3">
                  <i className="bi bi-images fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Total Gallery
                  </small>

                  <h3 className="fw-bold mb-0">
                    24
                  </h3>
                </div>

              </div>
            </div>
          </div>


          {/* Courses */}
          <div className="col-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center gap-3">

                <div className="bg-success-subtle text-success rounded-3 p-3">
                  <i className="bi bi-book fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Total Courses
                  </small>

                  <h3 className="fw-bold mb-0">
                    13
                  </h3>
                </div>

              </div>
            </div>
          </div>


          {/* Notices */}
          <div className="col-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center gap-3">

                <div className="bg-warning-subtle text-warning-emphasis rounded-3 p-3">
                  <i className="bi bi-megaphone fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Active Notices
                  </small>

                  <h3 className="fw-bold mb-0">
                    08
                  </h3>
                </div>

              </div>
            </div>
          </div>


          {/* Admissions */}
          <div className="col-6 col-xl-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex align-items-center gap-3">

                <div className="bg-danger-subtle text-danger rounded-3 p-3">
                  <i className="bi bi-people fs-4"></i>
                </div>

                <div>
                  <small className="text-secondary">
                    Admissions
                  </small>

                  <h3 className="fw-bold mb-0">
                    156
                  </h3>
                </div>

              </div>
            </div>
          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}
        <div className="mb-4">

          <h4 className="fw-bold mb-1">
            Quick Actions
          </h4>

          <p className="text-secondary">
            Manage your college website
          </p>

          <div className="row g-4">

            <div className="col-md-4">
              <Link
                to="/admin/gallery"
                className="card border-0 shadow-sm text-decoration-none h-100"
              >
                <div className="card-body">

                  <div className="bg-primary-subtle text-primary rounded-3 d-inline-flex p-3 mb-3">
                    <i className="bi bi-cloud-arrow-up fs-4"></i>
                  </div>

                  <h5 className="text-body fw-bold">
                    Upload Gallery
                  </h5>

                  <p className="text-secondary mb-0">
                    Add new campus photos
                  </p>

                </div>
              </Link>
            </div>


            <div className="col-md-4">
              <Link
                to="/admin/courses"
                className="card border-0 shadow-sm text-decoration-none h-100"
              >
                <div className="card-body">

                  <div className="bg-success-subtle text-success rounded-3 d-inline-flex p-3 mb-3">
                    <i className="bi bi-plus-circle fs-4"></i>
                  </div>

                  <h5 className="text-body fw-bold">
                    Add Course
                  </h5>

                  <p className="text-secondary mb-0">
                    Create a new course
                  </p>

                </div>
              </Link>
            </div>


            <div className="col-md-4">
              <Link
                to="/admin/notices"
                className="card border-0 shadow-sm text-decoration-none h-100"
              >
                <div className="card-body">

                  <div className="bg-warning-subtle text-warning-emphasis rounded-3 d-inline-flex p-3 mb-3">
                    <i className="bi bi-file-earmark-plus fs-4"></i>
                  </div>

                  <h5 className="text-body fw-bold">
                    New Notice
                  </h5>

                  <p className="text-secondary mb-0">
                    Publish a college notice
                  </p>

                </div>
              </Link>
            </div>

          </div>
        </div>


        {/* ================= RECENT ACTIVITY ================= */}
        <div>

          <h4 className="fw-bold mb-1">
            Recent Activity
          </h4>

          <p className="text-secondary">
            Latest changes made in the admin panel
          </p>

          <div className="card border-0 shadow-sm">

            <div className="list-group list-group-flush">

              <div className="list-group-item bg-transparent d-flex align-items-center gap-3 p-3">

                <div className="bg-primary-subtle text-primary rounded-3 p-2">
                  <i className="bi bi-images"></i>
                </div>

                <div className="flex-grow-1">
                  <strong>
                    Gallery updated
                  </strong>

                  <small className="d-block text-secondary">
                    New campus images were added.
                  </small>
                </div>

                <small className="text-secondary">
                  Today
                </small>

              </div>


              <div className="list-group-item bg-transparent d-flex align-items-center gap-3 p-3">

                <div className="bg-success-subtle text-success rounded-3 p-2">
                  <i className="bi bi-book"></i>
                </div>

                <div className="flex-grow-1">
                  <strong>
                    Course information updated
                  </strong>

                  <small className="d-block text-secondary">
                    BCA course details were modified.
                  </small>
                </div>

                <small className="text-secondary">
                  Yesterday
                </small>

              </div>


              <div className="list-group-item bg-transparent d-flex align-items-center gap-3 p-3">

                <div className="bg-warning-subtle text-warning-emphasis rounded-3 p-2">
                  <i className="bi bi-megaphone"></i>
                </div>

                <div className="flex-grow-1">
                  <strong>
                    New notice published
                  </strong>

                  <small className="d-block text-secondary">
                    Admission notice has been published.
                  </small>
                </div>

                <small className="text-secondary">
                  2 days ago
                </small>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default AdminDashboard;
