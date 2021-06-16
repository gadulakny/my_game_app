import React from "react";
import axios from "axios";
import Game from "./Game.js";
import "./index.css";

class App extends React.Component {
  state = {
    isLoading: true,
    gamesList: [],
  };

  getGamesList = async () => {
    const API_KEY = "62fe8bc727a64d67a0ade87db18260ac";
    const {
      data: { results },
    } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    this.setState({ gamesList: results, isLoading: false });
  };

  componentDidMount() {
    this.getGamesList();
    this.getGamesPlatform();
  }

  getGamesPlatform = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.rawg.io/api/platforms/lists/parents?key=62fe8bc727a64d67a0ade87db18260ac`
    );
    results.map((platF) => console.log(platF.slug));
  };

  renderGames = () => {
    const { gamesList } = this.state;
    return gamesList.map((game) => {
      return (
        <Game
          key={game.id}
          id={game.id}
          name={game.name}
          genres={game.genres}
          image={game.background_image}
          platforms={game.parent_platforms}
          releasedDate={game.released}
        />
      );
    });
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div
        id="app"
        className="w-full h-full"
        style={{ "background-color": "#151515" }}
      >
        {isLoading ? (
          <div id="LoadContainer">
            <h2>Loading...</h2>
          </div>
        ) : (
          <div id="mainPage" className="w-full min-h-full">
            <header></header>
            <div id="mainPage__ALL" className="p-32 px-72">
              <div id="searchContainer"></div>
              <div id="gameContainer">
                <div className="grid grid-cols-3 gap-6">
                  {this.renderGames()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
