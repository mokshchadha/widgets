import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Accordion
      </a>
      <a href="/dropdown" className="item">
        Drop down
      </a>
      <a href="/translate" className="item">
        Translate{" "}
      </a>
      <a href="/search" className="item">
        Wiki Search
      </a>
    </div>
  );
};

export default Header;
