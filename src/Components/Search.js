import { useState } from "react";

const useInput = (v) => {
  const [value, setValue] = useState(v);
  const [searchFocus, setSearchFocus] = useState("bg-gray");
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onFocus = (e) => {
    e.target.focus(setSearchFocus("bg-white"));
  };
  const onBlur = (e) => {
    e.target.blur(setSearchFocus("bg-gray"));
  };
  return { value, onChange, searchFocus, onFocus, onBlur };
};

const Search = () => {
  const { value, onChange, searchFocus, onFocus, onBlur } = useInput("");
  return (
    <form className={`w-full h-10 rounded-md flex ${searchFocus}`}>
      <div className="w-full grid content-center">
        <input
          type="text"
          className="w-full h-10 text-black text-lg px-10 bg-transparent"
          style={{ outline: "none" }}
          placeholder="찾고 싶은 게임 검색 고고"
          {...{ value, onChange, onFocus, onBlur }}
          onSubmit={(e) => e.preventDefault()}
        ></input>
      </div>
      <button>asdf</button>
    </form>
  );
};

export default Search;

// const useInput = (v) => {
//   const [value, setValue] = useState(v);
//   const onChange = (e) => setValue(e.target.value);
//   return { value, onChange };
// };

// const App = () => {
//   const name = useInput("Mr.");
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Edit to see some magic happen!</h2>
//       <input value={name.value} onChange={name.onChange} />
//     </div>
//   );
// };
