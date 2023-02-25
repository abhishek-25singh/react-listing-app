import TopBar from "./components/topbar/TopBar";
import CreateListing from "./pages/create-listing/CreateListing";
import Home from "./pages/homepage/Home";
import Detail from "./pages/listingdetail/Detail";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    // <div>
    //   <TopBar />
    //   {/* <Home /> */}
    //   {/* <Detail /> */}
    //   <CreateListing />
    // </div>
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/create" element={<CreateListing />} />
        </Routes>
      </div>
    </Router>
  );
}
