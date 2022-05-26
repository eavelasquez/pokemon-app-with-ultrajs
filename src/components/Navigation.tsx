import React, { Fragment } from "react";
import { Link } from "wouter"

const Navigation = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link href="/" className="navbar-brand">
          <a className="active">
            <img
              src="../assets/pokemon.png"
              width="150"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </a>
        </Link>
      </nav>
      <br />
      {children}
    </Fragment>
  );
};

export default Navigation;
