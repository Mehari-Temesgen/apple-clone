import React, { Component } from "react";
import Home from "./Components/Home/Home";
import Iphones from "./Pages/Iphone";
import Productpage from "./Pages/Productpage/Productpage";
import Mac from "./Pages/Mac/Mac";
import Fouro4 from "./Pages/Four04/Four04";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphones />} />
          <Route path="/iphone/:productID" element={<Productpage />} />
          <Route path="*" element={<Fouro4 />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
