import React from "react";
import useSWR from "swr";
import { useLocation } from "wouter";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

type Pokemon = {
  name: string;
  url: string;
};

type SetLocationType = {
  (to: string, options?: { replace?: boolean | undefined } | undefined): void;
};

const getId = (url: string): string => {
  return url.substring(url.lastIndexOf("/") - 1, url.lastIndexOf("/"));
};

const renderItems = (pokemons: Pokemon[], setLocation: SetLocationType) => {
  return pokemons?.map(({ name, url }: Pokemon) => {
    return (
      <div
        className="card"
        onClick={() => {
          setLocation(`/pokemon/${getId(url)}`);
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    );
  });
};

const List = () => {
  const [_location, setLocation] = useLocation();
  const { data, error } = useSWR<Pokemon[]>(
    `https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0`,
    fetcher
  );

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Unable to fetch data from pokemon API
      </div>
    );
  }

  return (
    <div className="card-columns">
      {renderItems(data?.results, setLocation)}
    </div>
  );
};

export default List;
