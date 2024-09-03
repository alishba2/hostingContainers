import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Drawer } from "antd";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [platformshow, setplatformshow] = useState(false);
  const [languagesshow, setlanguagesshow] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [activeTab, setActiveTab] = useState("");
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showsolSubmenu, setShowsolSubmenu] = useState(false);
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleplatformShow = () => {
    setplatformshow(true);
  };

  const handleplatformClose = () => {
    setplatformshow(false);
  };
  const handlelanguageShow = () => {
    setlanguagesshow(true);
  };
  const handlelanguagesClose = () => {
    setlanguagesshow(false);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleTabHover = (tab) => {
    setActiveTab(tab);
  };
  const handleTabLeave = () => {
    setActiveTab("");
  };

  const handleNavigation = (link) => {
    navigate(link);
    setShow(false);
  };
  const handleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  const handlesolutionSubmenu = () => {
    setShowsolSubmenu(!showsolSubmenu);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth > 600) {
      onClose();
    }
  }, [windowWidth]);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-inner-section">
          <div className="logo-container">
            <NavLink class="navbar-brand" to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div className="menu-container">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>

              <div
                style={{ position: "relative" }}
                onMouseEnter={() => handleplatformShow()}
                onMouseLeave={() => handleplatformClose()}
              >
                <li
                  className={`li-platform cursor-pointer ${
                    platformshow ||
                    location.pathname === "/platform" ||
                    location.pathname === "/work" ||
                    location.pathname === "/choose-us" ||
                    location.pathname === "/integrations"
                      ? "activeClass"
                      : ""
                  }`}
                >
                  <a className="v-center gap-1">
                    {" "}
                    Products
                    <Icon
                      color="#FFF"
                      icon="mingcute:down-fill"
                      className="icon-rotate"
                    />
                  </a>
                </li>
                {platformshow && (
                  <div className="platform-main-outer">
                    <div className="platform-hover-container d-flex flex-column">
                      <NavLink to="/platform">
                        <div className="platform-items d-flex space-between ">
                          <div className="left d-flex v-center">
                            <h6>Platform Overview</h6>
                          </div>

                          {/* <Icon
                            color="#4b2e83"
                            icon="icon-park-outline:right"
                          /> */}
                        </div>
                      </NavLink>
                      <NavLink to="/work">
                        <div className="platform-items d-flex space-between ">
                          <div className="left d-flex v-center">
                            <h6>How it Works</h6>
                          </div>
                        </div>
                      </NavLink>
                      <NavLink to="/choose-us">
                        <div className="platform-items d-flex space-between ">
                          <div className="left d-flex v-center">
                            <h6>Why Choose Us</h6>
                          </div>
                        </div>
                      </NavLink>
                      <NavLink to="/integrations">
                        <div className="platform-items d-flex space-between ">
                          <div className="left d-flex v-center">
                            <h6>Integration</h6>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>

              <li>
                <NavLink to="/pricing" activeClassName="active">
                  Hosting
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-" activeClassName="active">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="v-center gap-2">
            <NavLink to="/demo">
              <div className="navbarbtn-container">
                <button onClick={() => navigate("/demo")}>Sign in</button>
              </div>
            </NavLink>
            <div
              className="navbarbtn-container"
              onMouseEnter={() => handlelanguageShow()}
              onMouseLeave={() => handlelanguagesClose()}
            >
              <button className="dropdown-button v-center gap-2">
                English{" "}
                <Icon
                  color="#FFF"
                  icon="mingcute:down-fill"
                  className="icon-rotate"
                />
              </button>
              {languagesshow && (
                <div className="languages-main-outer">
                  <div className="platform-hover-container d-flex flex-column">
                    <NavLink to="/platform">
                      <div className="platform-items d-flex space-between ">
                        <div className="left d-flex v-center">
                          <h6>English</h6>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="/work">
                      <div className="platform-items d-flex space-between ">
                        <div className="left d-flex v-center">
                          <h6>Arabic</h6>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink to="/choose-us">
                      <div className="platform-items d-flex space-between ">
                        <div className="left d-flex v-center">
                          <h6>Spanich</h6>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-navbar">
        <NavLink to="/">
          <img src="../../../assets/Logo.svg" alt="" className="mobileLogo" />
        </NavLink>
        <Button
          onClick={showDrawer}
          className="menu-btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <Icon
            color="black"
            icon="material-symbols:menu"
            className="menu-btn-icon"
          />
        </Button>
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          width="80%"
          className="mobile-menu-drawer"
        >
          <img src={logo} alt="" className="logostyle" />

          <ul className=" mt-5">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>

            <li
              className={` ${
                location.pathname === "/fabicare" || location.pathname === "/u"
                  ? "activeClass"
                  : ""
              }`}
            >
              <a onClick={handlesolutionSubmenu} className="v-center mt-3">
                Solutions
                <Icon
                  icon="mingcute:down-line"
                  color="#4B2E83"
                  width="20"
                  height="20"
                  className="ms-2"
                />
              </a>
            </li>
            {showsolSubmenu ? (
              <>
                <ul className="mobil-dropdown ">
                  <li>
                    <NavLink
                      className="d-flex  gap-2 "
                      exact
                      to="/fabicare"
                      activeClassName="active"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {" "}
                      <img
                        src="../../../assets/images/drycleanIcon.svg"
                        alt="Custom Icon 2"
                      />
                      Dry Cleaning
                      {/* <Icon
                        icon="mingcute:right-fill"
                        color="#4B2E83"
                        width="20"
                        height="20"
                      /> */}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2 "
                      exact
                      to="/life"
                      activeClassName="active"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {" "}
                      <img
                        src="../../../assets/images/lifeInsIcon.svg"
                        alt="Custom Icon 2"
                      />
                      Life Insurance
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2 "
                      exact
                      to="/life"
                      activeClassName="active"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <img
                        src="../../../assets/images/automobileIcon.svg"
                        alt="Custom Icon 2"
                      />
                      Auto Mobile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2 "
                      exact
                      to="/life"
                      activeClassName="active"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <img
                        src="../../../assets/images/educationIcon.svg"
                        alt="Custom Icon 2"
                      />
                      Education
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2 "
                      exact
                      to="/life"
                      activeClassName="active"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <img
                        src="../../../assets/images/transportIcon.svg"
                        alt="Custom Icon 2"
                      />
                      Transportation
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <></>
            )}
            <li className="my-3">
              <NavLink
                exact
                to="/pricing"
                activeClassName="active"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Pricing
              </NavLink>
            </li>
          </ul>

          <NavLink to="/demo">
            <button className="signupBtn  ">Demo</button>
          </NavLink>
        </Drawer>
      </div>
    </>
  );
};
export default Navbar;
