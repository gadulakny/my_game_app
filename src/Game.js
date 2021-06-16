import React from "react";
import PlatformIcon from "./PlatformIcon";

function Game({ id, name, genres, image, platforms, releasedDate }) {
  return (
    <div
      id="movie"
      className=" rounded-3xl"
      style={{ "background-color": "#252525" }}
    >
      <img className="h-64 mt-6" src={image} alt={name} />
      <div className="p-4 text-white">
        <h3 className="">{name}</h3>
        <h4>{releasedDate}</h4>
        <ul>
          {genres.map((genre, index) => {
            return <li key={index}>{genre.name}</li>;
          })}
        </ul>
        <div id="platforms" className="flex">
          {platforms.map((platform, index) => {
            //console.log(platform.platform.slug);
            if (platform.platform.slug !== "neo-geo") {
              return <PlatformIcon key={index} slug={platform.platform.slug} />;
            } else {
              return false;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Game;
