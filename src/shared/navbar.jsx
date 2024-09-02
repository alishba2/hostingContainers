import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";
import cross2 from "../assets/Icons/arrow.png";
import resourceDown from "../assets/Icons/arrow-down-24.png";
import menu from "../assets/Icons/menu.webp";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <div className="navbar-main w-full v-center space-between">
        <div className="left v-center">
          <div>
            <a className="active" href="/home">
              <img src={logo} alt="" className="cursor-pointer logo" />
            </a>
          </div>
          <ul className="li-items v-center gap-16">
            <li className="fw-medium cursor-pointer">
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="fw-medium cursor-pointer">
              <NavLink exact to="/pricing" activeClassName="active">
                Pricing
              </NavLink>
            </li>
            <li
              className="d-flex align-items-center justify-content-center gap-1 resourceList"
              onClick={toggleDropdown}
            >
              RESOURCES
              <img className="resourceDropDown" src={resourceDown} alt="" />
              {dropdownOpen && (
                <ul className="drop-downss">
                  <li>Blog</li>
                  <li>Blogs</li>
                  <li>Videos</li>
                  <li>Free Resources</li>
                </ul>
              )}
            </li>
            <li className="fw-medium cursor-pointer">
              <NavLink exact to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li className="fw-medium cursor-pointer">
              <NavLink exact to="/about-us" activeClassName="active">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/contact-us">
          <button className="button">Sign in</button>
        </Link>
      </div>

      <div className="mobile-navbar">
        <NavLink className="d-flex" to="/">
          <img className="mobileLogo" src={logo} alt="" />
        </NavLink>
        <button onClick={handleShow} className="menu-btn">
          <img src={menu} alt="Menu" />
        </button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <NavLink to="/">
                <img src={logo} alt="..." className="logostyle" />
              </NavLink>
            </Offcanvas.Title>
            <img onClick={handleClose} src={cross2} alt="Close" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="p-0">
              <li>
                <NavLink className="active" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About</NavLink>
              </li>
            </ul>
            <div className="d-flex gap-3">
              <NavLink to="/contact-us">
                <button className="signupBtn">Waiting List</button>
              </NavLink>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Nav;
