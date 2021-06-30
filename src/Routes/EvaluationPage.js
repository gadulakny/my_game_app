import React from "react";
import axios from "axios";
import Game from "../Components/Game.js";

class EvaluationPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      gamesList: [],
      getMoreCount: 1, //무한스크롤용
    };
  }
  getGamesList = async () => {
    const API_KEY = "62fe8bc727a64d67a0ade87db18260ac";
    let { getMoreCount, gamesList } = this.state;
    const {
      data: { results },
    } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=32&page=${getMoreCount}`
    );

    this.setState({
      gamesList: [...gamesList, results],
      isLoading: false,
    });
  };

  infiniteScroll = () => {
    const { documentElement, body } = document;

    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    const clientHeight = documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState((current) => {
        return {
          getMoreCount: current.getMoreCount + 1,
        };
      });
      this.getGamesList();
    }
  };

  renderGames = () => {
    const { gamesList } = this.state;
    // 무한스크롤 구현을 위한 mapping 2번
    return gamesList.map((res) => {
      return res.map((game) => {
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
    });
  };

  componentDidMount() {
    this.getGamesList();
    window.addEventListener("scroll", this.infiniteScroll);
  }

  loadContainer = () => {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div
          id="LoadingContainer"
          className="flex grid w-full min-h-screen justify-center content-center "
        >
          <span className="text-white text-3xl text-center inset-1/2	">
            Loading...
          </span>
        </div>
      );
    } else {
      return (
        <>
          <span className="bg-gray w-60 h-5 text-justify border rounded-lg">
            정렬버튼
          </span>
          <div className="grid grid-cols-4 gap-6 mt-3">
            {this.renderGames()}
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div
        id="evaluationPage"
        className="w-full min-h-screen p-36 pt-20 bg-darkGray"
      >
        <div id="gameContainer" style={{ minWidth: "1392px" }}>
          {this.loadContainer()}
        </div>
      </div>
    );
  }
}

export default EvaluationPage;

// const contents = [
//   {
//     tab: "section 1",
//     content: "asdlfkjelwkmvelkmvlakmblkebmlkmvclkbmlxkb"
//   },
//   {
//     tab: "section 2",
//     content: "12381209481092845901385093185091840913840"
//   }
// ];

// const useTabs = (initialTap, allTabs) => {
//   const [currentTab, setCurrentTab] = useState(initialTap);

//   return { currentContent: allTabs[currentTab], changeTab: setCurrentTab };
// };

// const App = () => {
//   const { currentContent, changeTab } = useTabs(0, contents);
//   return (
//     <div className="App">
//       {contents.map((content, index) => (
//         <button onClick={() => changeTab(index)}>{content.tab}</button>
//       ))}
//       <div>
//         <p>{currentContent.content}</p>
//       </div>
//     </div>
//   );
// };
