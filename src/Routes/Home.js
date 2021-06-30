import { useEffect, useState } from "react";
import axios from "axios";
import Game from "../Components/Game";

const Home = () => {
  const [dataOne, setDataOne] = useState({
    data: null,
    isLoading: true,
  });
  const [dataTwo, setDataTwo] = useState({
    data: null,
    isLoading: true,
  });
  const [dataThree, setDataThree] = useState({
    data: null,
    isLoading: true,
  });
  const [dataFour, setDataFour] = useState({
    data: null,
    isLoading: true,
  });
  const setDataArray = [setDataOne, setDataTwo, setDataThree, setDataFour];
  const dataArray = [dataOne, dataTwo, dataThree, dataFour];

  const API_URL = "https://api.rawg.io/api/games";
  const API_KEY = "?key=62fe8bc727a64d67a0ade87db18260ac";
  // const FILTER_TO_RATING = "&ordering=rating";
  const PAGE_SIZE = "&page_size=8";
  const introductionTitle = [
    {
      id: 0,
      url: `${API_URL + API_KEY + PAGE_SIZE}&dates=2021-01-01,2021-12-31`,
      name: "따끈따끈한 2021년 신작",
    },
    {
      id: 1,
      url: `${API_URL + API_KEY + PAGE_SIZE}&metacritic=90,100`,
      name: "메타스코어 90점을 넘어",
    },
    {
      id: 2,
      url: `${API_URL + API_KEY + PAGE_SIZE}&publishers=918`,
      name: "유비소프트 추천작",
    },
    {
      id: 3,
      url: `${API_URL + API_KEY + PAGE_SIZE}&platforms=187&platforms_count=1`,
      name: "오직 PlayStation 5 에서만",
    },
  ];

  const axiosSetData = async (url, index) => {
    try {
      const response = await axios.get(url).then((res) => {
        return res.data.results;
      });
      setDataArray[index]({ data: response, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  };

  const getData = () => {
    introductionTitle.map(async (title) => {
      await axiosSetData(title.url, title.id);
    });
  };

  const filterData = (index) => {
    if (dataArray[index].isLoading) {
      return <div>...Loading</div>;
    } else {
      console.log(dataArray[index]);
      return dataArray[index].data.map((game) => {
        return (
          <div>
            <Game
              key={game.id}
              id={game.id}
              name={game.name}
              genres={game.genres}
              image={game.background_image}
              platforms={game.parent_platforms}
              releasedDate={game.released}
            />
          </div>
        );
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="">
      <div className="text-gray-100 tracking-wider m-32 mb-0 font-medium	">
        {introductionTitle.map((title, index) => {
          return (
            <div key={index} className="mb-20">
              <div className="mb-10 text-3xl">{title.name}</div>
              <div className="h-full flex no-wrap overflow-x-scroll">
                {filterData(title.id)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Home;

// const Home = ({ toDos, dispatch }) => {
//   const [value, setValue] = useState("");
//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(add(value));
//     setValue("");
//   };
//   const onChange = (e) => {
//     setValue(e.target.value);
//   };
//   return (
//     <div id="home" className="h-screen w-full text-white">
//       <div className="pt-20">
//         <h3>To Do List</h3>
//         <form {...{ onSubmit }} className="my-16">
//           <input {...{ value, onChange }} className="bg-gray"></input>
//         </form>
//         <ul>{JSON.stringify(toDos)}</ul>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   console.log(state);
//   return { toDos: state };
// };
// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
