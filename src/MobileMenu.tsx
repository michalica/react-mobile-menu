import React, { useState } from "react";
import { css } from "emotion";

const MobileMenu = () => {
  const demo1Animation = css`
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    -khtml-transform: scale(0.85);
    -o-transform: scale(0.85);
    transform: scale(0.85);
    margin-left: 260px;
  `;

  const demo2Animation = css`
    margin-left: 320px;
    -webkit-opacity: 0.4;
    -moz-opacity: 0.4;
    -khtml-opacity: 0.4;
    -o-opacity: 0.4;
    opacity: 0.4;
  `;

  const demo3Animation = css`
    -webkit-opacity: 0;
    -moz-opacity: 0;
    -khtml-opacity: 0;
    -o-opacity: 0;
    opacity: 0;
    -webkit-transform: scale(0.85);
    -moz-transform: scale(0.85);
    -khtml-transform: scale(0.85);
    -o-transform: scale(0.85);
    transform: scale(0.85);
    visibility: hidden;
  `;

  const [nav, setNav] = useState(false);

  return (
    <div>
      <div
        id="mobile"
        onClick={() => setNav(!nav)}
        className={`"demo1" ${nav ? "navigation" : ""}`}
      >
        <div id="burgerBtn" />
        <ul id="nav">
          <li />
          <li />
          <li />
          <li />
        </ul>
        <div id="mobileBodyContent" className={`${nav ? demo2Animation : ""}`}>
          <div id="header" />
          <div id="image">
            <img
              src="https://s3-eu-west-1.amazonaws.com/ugly.cloud/2017/02/codepen-pure-css-mobile-nav-anim.jpg"
              alt=""
            />
          </div>
          <div id="title" />
          <div id="text">
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
            <div className="item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
