import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Drawer, Dropdown, Menu } from "antd";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useTranslation } from "react-i18next";
import Login from "../Modals/login";
import { isLoggedIn, getCurrentUserData, logout } from "../firebase/firebase";
import {
  FaUser
} from "react-icons/fa";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (await isLoggedIn()) {
        const data = await getCurrentUserData();
        setUserData(data);
      }
    };
    checkUserStatus();
  }, []);

  const handleplatformShow = () => {
    setplatformshow(true);
  };
  const onsigninbtnClick = () => {

    setIsModalOpen(true);
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

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };


  const handleLogout = async () => {
    try {
      await logout();
      setUserData(null); // Update UI after logout
      window.location.reload();
    } catch (error) {
      console.error('Logout failed', error);
    }
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <NavLink to="/track-orders">{t("track_orders")}</NavLink>
      </Menu.Item>
      <Menu.Item key="1" onClick={() => {
        // Handle logout logic here
        handleLogout();
      }}>
        {t("logout")}
      </Menu.Item>
    </Menu>
  );


  return (
    <>
      <div className="navbar-container">
        <div className="navbar-inner-section">
          <div className="logo-container">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt={t("logo_alt")} />
            </NavLink>
          </div>
          <div className="menu-container">
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  {t("home")}
                </NavLink>
              </li>

              <div
                style={{ position: "relative" }}
                onMouseEnter={handleplatformShow}
                onMouseLeave={handleplatformClose}
              >
                <li
                  className={`li-platform cursor-pointer ${platformshow ||
                    location.pathname === "/platform" ||
                    location.pathname === "/work" ||
                    location.pathname === "/choose-us" ||
                    location.pathname === "/integrations"
                    ? "activeClass"
                    : ""
                    }`}
                >
                  <a className="v-center gap-1">
                    {t("products")}
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
                      <NavLink to="/products">
                        <div className="platform-items d-flex space-between">
                          <div className="left d-flex v-center">
                            <h6>{t("Miners")}</h6>
                          </div>
                        </div>
                      </NavLink>
                      <NavLink to="/work">
                        <div className="platform-items d-flex space-between">
                          <div className="left d-flex v-center">
                            <h6>{t("mining-containers")}</h6>
                          </div>
                        </div>
                      </NavLink>
                      <NavLink to="/choose-us">
                        <div className="platform-items d-flex space-between">
                          <div className="left d-flex v-center">
                            <h6>{t("mining-chips")}</h6>
                          </div>
                        </div>
                      </NavLink>
                      {/* <NavLink to="/integrations">
                        <div className="platform-items d-flex space-between">
                          <div className="left d-flex v-center">
                            <h6>{t("integration")}</h6>
                          </div>
                        </div>
                      </NavLink> */}
                    </div>
                  </div>
                )}
              </div>

              <li>
                <NavLink to="/hosting" activeClassName="active">
                  {t("hosting")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" activeClassName="active">
                  {t("about_us")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" activeClassName="active">
                  {t("blogs")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeClassName="active">
                  {t("gallery")}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="v-center gap-2">
            <div className="navbarbtn-container">
              {userData ? (
                <Dropdown overlay={menu} trigger={['click']}>
                  <span className="name-container">


                    <p>
                      {userData?.fullName}
                    </p>
                    <span className="icon">
                      <Icon
                        color="#FFF"
                        icon="mingcute:down-fill"
                        className="icon-rotate"
                      />
                    </span>
                  </span>


                </Dropdown>
              ) : (
                <button onClick={onsigninbtnClick}>{t("sign_in")}</button>
              )}
            </div>

            <div
              className="navbarbtn-container"
              onMouseEnter={handlelanguageShow}
              onMouseLeave={handlelanguagesClose}
            >
              <button className="dropdown-button v-center gap-2">
                {i18n.language === "en"
                  ? "English"
                  : i18n.language === "ru"
                    ? "Русский"
                    : i18n.language === "es"
                      ? "Español"
                      : "中文"}
                <Icon
                  color="#FFF"
                  icon="mingcute:down-fill"
                  className="icon-rotate"
                />
              </button>
              {languagesshow && (
                <div className="languages-main-outer">
                  <div className="platform-hover-container d-flex flex-column">
                    <div
                      onClick={() => i18n.changeLanguage("en")}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>English</h6>
                      </div>
                    </div>
                    <div
                      onClick={() => i18n.changeLanguage("ru")}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>Русский</h6>
                      </div>
                    </div>
                    <div
                      onClick={() => i18n.changeLanguage("es")}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>Español</h6>
                      </div>
                    </div>
                    <div
                      onClick={() => i18n.changeLanguage("zh")}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>中文</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


          </div>
        </div>
      </div>

      <div className="mobile-navbar">
        <NavLink to="/">
          <img src={logo} alt={t("logo_alt")} className="mobileLogo" />
        </NavLink>
        <Button
          onClick={showDrawer}
          className="menu-btn"
          type="button"
          aria-controls="offcanvasExample"
        >
          <Icon
            color="white"
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
          <img src={logo} alt={t("logo_alt")} className="logostyle" />

          <ul className="mt-5">
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                onClick={() => setOpen(false)}
              >
                {t("home")}
              </NavLink>
            </li>

            {/* <li
              className={` ${
                location.pathname === "/fabicare" || location.pathname === "/u"
                  ? "activeClass"
                  : ""
              }`}
            >
              <a onClick={handlesolutionSubmenu} className="v-center mt-3">
                {t("Products")}
                <Icon
                  icon="mingcute:down-line"
                  color="white"
                  width="20"
                  height="20"
                  className="ms-2"
                />
              </a>
            </li>
            {showsolSubmenu && (
              <>
                <ul className="mobil-dropdown">
                  <li>
                    <NavLink
                      className="d-flex gap-2"
                      exact
                      to="/hosting"
                      activeClassName="active"
                      onClick={() => setOpen(false)}
                    >
                      {t("dry_cleaning")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2"
                      exact
                      to="/life"
                      activeClassName="active"
                      onClick={() => setOpen(false)}
                    >
                      {t("life_insurance")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2"
                      exact
                      to="/automobile"
                      activeClassName="active"
                      onClick={() => setOpen(false)}
                    >
                      <img
                        src="../../../assets/images/automobileIcon.svg"
                        alt={t("auto_mobile")}
                      />
                      {t("auto_mobile")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2"
                      exact
                      to="/education"
                      activeClassName="active"
                      onClick={() => setOpen(false)}
                    >
                      <img
                        src="../../../assets/images/educationIcon.svg"
                        alt={t("education")}
                      />
                      {t("education")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="d-flex gap-2"
                      exact
                      to="/transport"
                      activeClassName="active"
                      onClick={() => setOpen(false)}
                    >
                      <img
                        src="../../../assets/images/transportIcon.svg"
                        alt={t("transportation")}
                      />
                      {t("transportation")}
                    </NavLink>
                  </li>
                </ul>
              </>
            )} */}
            <li className="my-3">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                onClick={() => setOpen(false)}
              >
                {t("Products")}
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                exact
                to="/hosting"
                activeClassName="active"
                onClick={() => setOpen(false)}
              >
                {t("Hosting")}
              </NavLink>
            </li>
            <li className="my-3">
              <NavLink
                exact
                to="/about-us"
                activeClassName="active"
                onClick={() => setOpen(false)}
              >
                {t("About us")}
              </NavLink>
            </li>
          </ul>

          <div className="d-flex flex-column gap-2">
            <div className="navbarbtn-container">
              {userData ? (
                <Dropdown overlay={menu} trigger={['click']}>
                  <span className="name-container">


                    <p>
                      {userData?.fullName}
                    </p>
                    <span className="icon">
                      <Icon
                        color="#FFF"
                        icon="mingcute:down-fill"
                        className="icon-rotate"
                      />
                    </span>
                  </span>


                </Dropdown>
              ) : (
                <button onClick={onsigninbtnClick}>{t("sign_in")}</button>
              )}
            </div>

            <div
              className="navbarbtn-container"
              onMouseEnter={handlelanguageShow}
              onMouseLeave={handlelanguagesClose}
            >
              <button className="dropdown-button v-center gap-2">
                {i18n.language === "en"
                  ? "English"
                  : i18n.language === "ru"
                    ? "Русский"
                    : i18n.language === "es"
                      ? "Español"
                      : "中文"}
                <Icon
                  color="#FFF"
                  icon="mingcute:down-fill"
                  className="icon-rotate"
                />
              </button>
              {languagesshow && (
                <div className="languages-main-outer">
                  <div className="platform-hover-container d-flex flex-column">
                    <div
                      onClick={() => {
                        i18n.changeLanguage("en");
                        onClose();
                      }}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>English</h6>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        i18n.changeLanguage("ru");
                        onClose();
                      }}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>Русский</h6>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        i18n.changeLanguage("es");
                        onClose();
                      }}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>Español</h6>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        i18n.changeLanguage("zh");
                        onClose();
                      }}
                      className="platform-items d-flex space-between"
                    >
                      <div className="left d-flex v-center">
                        <h6>中文</h6>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Drawer>
      </div>

      <Login isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Navbar;
