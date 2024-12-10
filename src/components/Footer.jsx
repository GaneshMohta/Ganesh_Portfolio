import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer text-center">
        <p className="text-gray-400">
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="" target="_blank">
            {" "}
            Ganesh Mohta
          </a>
          😎
        </p>
      </div>
    );
  };

  export default Footer;
