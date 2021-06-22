import { useState } from "react";
import { connect } from "react-redux";
import { add } from "../Components/store";

const Home = () => {
  return (
    <section>
      <div></div>
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
