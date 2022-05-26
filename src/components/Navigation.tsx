import React, { Fragment } from "react";

const Navigation = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img
            src="../assets/pokemon.png"
            width="150"
            height="50"
            className="d-inline-block align-top"
            alt="logo"
          />
        </a>
      </nav>
      <br />
      {children}
    </Fragment>
  );
};

export default Navigation;
