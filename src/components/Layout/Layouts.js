import React from "react";
import "./../../assets/sass/pages/home.scss";

import Header from "./Header";
import Footer from "./Footer";

const LayoutOne = ({children }) => {
    return (
      <div>
          <Header />
          {children }
          <Footer />
      </div>
    );
}

const LayoutTwo = ({children }) => {
    return (
      <div>
          <Header />
          {children }
      </div>
    );
}

export { LayoutOne, LayoutTwo };
