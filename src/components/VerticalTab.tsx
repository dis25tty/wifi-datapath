// import { useState } from "react";

interface Props {
  onClick: (menuVal: number) => void;
}
function VerticalTab({ onClick }: Props) {
  let a: number;

  return (
    <>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a
            className="nav-link"
            aria-current="page"
            href="#"
            style={{ color: "#dddada" }}
            onClick={() => onClick(-1)}
          >
            About
          </a>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#dddada", marginBottom: "8px", marginTop: "10px" }}
          >
            User Details
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(2)}>
                User View
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(3)}>
                User Add
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(4)}>
                User Modify
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(5)}>
                User Delete
              </a>
            </li>
          </ul>
        </li>
        {/* <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li> */}

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#dddada", marginBottom: "8px", marginTop: "10px" }}
          >
            VLAN Details
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(6)}>
                VLAN View
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(7)}>
                VLAN Add
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(8)}>
                VLAN Modify
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(9)}>
                VLAN Delete
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#dddada", marginBottom: "8px", marginTop: "10px" }}
          >
            AP Details
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(10)}>
                AP View
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(11)}>
                AP Add
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(12)}>
                AP Delete
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => onClick(13)}>
                AP Modify
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#dddada", marginBottom: "8px", marginTop: "10px" }}
          >
            Backup
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <a className="dropdown-item" href="#">
                User View
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                User Add
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                User Delete
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                User Modify
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
export default VerticalTab;
