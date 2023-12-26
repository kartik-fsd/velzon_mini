import "./App.css";
import Sidebar from "./layouts/layout";
import Header from "./layouts/vertical/Header/Header";

function App() {
  return (
    <>
      <div id="layout-wrapper">
        <Header />
        <Sidebar />
        {/* <div className="main-content">
            {props.children}
            <Footer />
        </div> */}
      </div>
      {/* <RightSidebar /> */}
    </>
  );
}

export default App;
