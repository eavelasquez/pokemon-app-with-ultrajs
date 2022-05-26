import React, { Suspense } from "react";

import List from "../components/List.tsx";
import Berries from "../components/Berries.tsx";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <h3>Pokemons</h3>
        </div>

        <div className="col-md-4">
          <h3>Berries</h3>
        </div>
        <div className="col-md-2"></div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <Suspense fallback={<div>Loading...</div>}>
            <List />
          </Suspense>
        </div>

        <div className="col-md-5">
          <Suspense fallback={<div>Loading...</div>}>
            <Berries />
          </Suspense>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Home;
