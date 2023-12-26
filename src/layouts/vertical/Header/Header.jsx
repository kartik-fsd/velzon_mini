import React, { useState } from "react";
import "./Header.css";
import SearchOption from "../Search/search";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import LanguageDropdown from "../../../common/LanguageDropDown";
import WebAppsDropdown from "../../../common/WebAppsDropDown";
//import { Form } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);

  const [search, setSearch] = useState(false);
  const toogleSearch = () => {
      setSearch(!search);
  };

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
              <SearchOption />
            </div>

            <div className="d-flex align-items-center">
              <Dropdown
                isOpen={search}
                toggle={toogleSearch}
                className="d-md-none topbar-head-dropdown header-item"
              >
                <DropdownToggle
                  type="button"
                  tag="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                >
                  <i className="bx bx-search fs-22"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                  <form className="p-3">
                    <div className="form-group m-0">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </DropdownMenu>
              </Dropdown>
              <LanguageDropdown/>
              <WebAppsDropdown/>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
