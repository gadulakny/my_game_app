import React from "react";
import { Link } from "react-router-dom";
import PlatformIcon from "./PlatformIcon.js";

function Game({ id, name, genres, image, platforms, releasedDate }) {
  return (
    <Link
      to={{
        pathname: `/gamedetail/${id}`,
        state: {
          id,
          name,
          genres,
          image,
          platforms,
          releasedDate,
        },
      }}
    >
      <div
        id="movie"
        className="text-white rounded-3xl bg-gray"
        style={{ minWidth: "330px" }}
      >
        <img className="h-64 w-full rounded-t-3xl" src={image} alt={name} />
        <div id="movie__topBar" className="flex p-4 pb-0">
          <span className="flex-auto ">{releasedDate.slice(0, 4)}</span>
          <div id="platforms" className="flex flex-auto justify-end">
            {platforms.map((platform, index) => {
              //console.log(platform.platform.slug);
              if (platform.platform.slug !== "neo-geo") {
                return (
                  <PlatformIcon key={index} slug={platform.platform.slug} />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div id="movie__mainBar" className="p-4 pt-1">
          <h2 className="text-2xl font-bold">{name}</h2>
          <ul className="flex">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="mr-5">
                  {genre.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Game;
