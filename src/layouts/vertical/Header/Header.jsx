import React, { useState } from "react";
import "./Header.css";
import SearchOption from "../Search/search";
import LanguageDropDown from "../../../common/LanguageDropDown";
import WebAppsDropdown from "../../../common/WebDropdown";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive((prevActive) => !prevActive);
    console.log("first");
  };
  return (
    <React.Fragment>
      <header id="page-topbar" className="topbar-shadow">
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box-horizontal-logo"></div>

              <div
                className={`menu-link-wrapper ${
                  isActive ? "menu-trigger-open" : ""
                }`}
                onClick={handleButtonClick}
              >
                <div className="menu-link">
                  <span className="lines"></span>
                </div>
              </div>
              <SearchOption/>
            </div>

            <div className="d-flex align-items-center">
              <LanguageDropDown/>
              <WebAppsDropdown/>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
