import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";

import Alert from "../components/Alert";
import Pokemon from "../components/Pokemon";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

type SelectedProps = { params: { id: string } };

const Selected = ({ params }: SelectedProps) => {
  const [mounted, setMounted] = useState(false);

  const { data, error } = useSWR(
    mounted && params?.id
      ? `https://pokeapi.co/api/v2/pokemon/${params.id}`
      : null,
    fetcher
  );

  if (error) {
    return <Alert message="Unable to fetch data from pokemon API" />;
  }

  if (!data) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5"></div>

          <div className="col-2">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>

          <div className="col-5"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>

        <div className="col-10">
          <Pokemon
            name={data?.name}
            height={data?.height}
            weight={data?.weight}
            xp={data?.base_experience}
            image={data?.sprites?.front_default}
            moves={data?.moves}
          />
        </div>

        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Selected;
