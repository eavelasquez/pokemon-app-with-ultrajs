import React from "react";

type MovesType = {
  move: { name: string; url: string };
  version_group_details: [];
};

type PokemonPropType = {
  name: string;
  height: number;
  weight: number;
  xp: number;
  image: string;
  moves: Array<MovesType>;
};

const renderMoves = (moves: Array<MovesType>) => {
  return moves.slice(0, 5).map(({ move }: MovesType) => {
    return <li>{move?.name}</li>;
  });
};

const Pokemon = ({ name, height, weight, image, moves }: PokemonPropType) => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <img className="card-img-top pokemon-image" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Height: {height} | Weight: {weight}
        </h6>
        <p className="card-text">
          <ul>{renderMoves(moves)}</ul>
        </p>
      </div>
    </div>
  );
};

export default Pokemon;
