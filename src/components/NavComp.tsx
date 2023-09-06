interface Props {
  onClick: (menuVal: number) => void;
}
function NavComp({ onClick }: Props) {
  // const ima = document.getElementById("imagenav");
  // if (ima != null) {
  //   ima.style.height = "70px";
  //   ima.style.width = "150px";
  // }
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              id="imagenav"
              src="src/assets/bsnl.jpg"
              alt=""
              style={{ height: "70px", width: "150px" }}
            />{" "}
            <div
              style={{ padding: "10px", display: "inline", fontSize: "30px" }}
            >
              BHARAT SANCHAR NIGAM LIMITED
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Other
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => onClick(-1)}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={() => onClick(100)}>
                    Logout
                  </a>
                </li>
              </ul>
              {/* <form className="d-flex mt-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavComp;
