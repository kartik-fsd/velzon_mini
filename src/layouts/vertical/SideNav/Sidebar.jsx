/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Collapse } from "reactstrap";
import SimpleBar from "simplebar-react";
import "./Sidebar.css"

function Sidebar({menuItems}) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((item) => item !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };

  const renderChildItems = (childItems, parentId) => {
    if (!childItems || childItems.length === 0) {
      return null;
    }

    return (
      <Collapse isOpen={openItems.includes(parentId)}>
      <ul className="nav nav-sm flex-column test">
          {childItems.map((childItem, key) => (
            <li key={key} className="nav-item">
              <a
                href={childItem.link}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(childItem.id);
                }}
              >
                <span className="bullet">&#9702;</span>
                {childItem.label}
                {childItem.badgeName && (
                  <span
                    className={
                      "badge badge-pill bg-" +
                      childItem.badgeColor +
                      " float-end"
                    }
                    data-key="t-new"
                  >
                    {childItem.badgeName}
                  </span>
                )}
                {childItem.childItems && childItem.childItems.length > 0 && (
                  <i
                    className={`ri ${
                      openItems.includes(childItem.id)
                        ? "ri-arrow-drop-down-line"
                        : "ri-arrow-drop-right-line"
                    } float-end`}
                  ></i>
                )}
              </a>
              {renderChildItems(childItem.childItems, childItem.id)}
            </li>
          ))}
        </ul>
      </Collapse>
    );
  };

  const renderSubItems = (subItems, parentId) => {
    if (!subItems || subItems.length === 0) {
      return null;
    }

    return (
      <Collapse isOpen={openItems.includes(parentId)}>
        <ul className="nav nav-sm flex-column test">
          {subItems.map((subItem, key) => (
            <li key={key} className="nav-item">
              <a
                href={subItem.link}
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleItem(subItem.id);
                }}
              >
                <span className="bullet">&#45;</span>
                <i className={`ri ${subItem.icon}`}></i>
                {subItem.label}
                {subItem.badgeName && (
                  <span
                    className={
                      "badge badge-pill bg-" + subItem.badgeColor + " float-end"
                    }
                    data-key="t-new"
                  >
                    {subItem.badgeName}
                  </span>
                )}
                {subItem.childItems && subItem.childItems.length > 0 && (
                  <i
                    className={`ri ${
                      openItems.includes(subItem.id)
                        ? "ri-arrow-drop-down-line"
                        : "ri-arrow-drop-right-line"
                    } float-end`}
                  ></i>
                )}
              </a>

              {renderChildItems(subItem.childItems, subItem.id)}
            </li>
          ))}
        </ul>
      </Collapse>
    );
  };
  return (
    <SimpleBar id="scrollbar">
      <ul className="nav flex-column" >
        {menuItems.map((item, key) => (
          <React.Fragment key={key}>
            {item.isHeader ? (
              <li className="menu-title">
              <span data-key="t-menu">{item.label} </span>
            </li>
            ) : (
              <li className="sidebar-item">
                <a href="#"  className="nav-link menu-link" onClick={() => toggleItem(item.id)}>
                  <i className={`ri ${item.icon} mx-2`}></i>
                  <span data-key="t-apps"> {item.label}</span>
                  {item.badgeName && (
                    <span
                      className={
                        "badge badge-pill bg-" + item.badgeColor + " float-end"
                      }
                      data-key="t-new"
                    >
                      {item.badgeName}
                    </span>
                  )}
                  {item.subItems && item.subItems.length > 0 && (
                    <i
                      className={`ri ${
                        openItems.includes(item.id)
                          ? "ri-arrow-drop-down-line"
                          : "ri-arrow-drop-right-line"
                      } float-end`}
                    ></i>
                  )}
                </a>
                {renderSubItems(item.subItems, item.id)}
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </SimpleBar>
  );
}

export default Sidebar;
