import React from "react";
import useSWR from "swr";

type BerriesType = {
  name: string;
  url: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const getId = (url: string): string => {
  return url.substring(url.lastIndexOf("/") - 1, url.lastIndexOf("/"));
};

const renderItems = (berries: BerriesType[]) => {
  return berries?.map(({ name, url }: BerriesType) => {
    return (
      <div key={getId(url)} className="list-group-item">
        <h5 className="clickable">{name}</h5>
      </div>
    );
  });
};

const Berries = () => {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/berry`, fetcher);

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Unable to fetch data from pokemon API
      </div>
    );
  }

  return <div className="list-group">{renderItems(data?.results)}</div>;
};

export default Berries;
