/* eslint-disable react/prop-types */

import "./index.css";
import Sidebar from "./SideNav/Sidebar";

const VerticalSidebar = ({ menuItems }) => {


  return (
      <>
       <div className="scrollable-content">
        <Sidebar menuItems={menuItems} />
        <div className="sidebar-background"></div>
      </div>
      </>
  );
};

export default VerticalSidebar;


