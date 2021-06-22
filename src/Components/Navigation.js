import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navigation() {
  return (
    <header
      className="fixed w-full h-16 bg-darkGray text-gray-400 border-b text-md"
      style={{ borderColor: "#252525" }}
    >
      <nav>
        <div>
          <div className="mx-40">
            <ul className="flex h-16 items-center">
              <li className="flex-shrink-0 text-3xl font-thin	tracking-widest hover:text-red-400 text-white">
                <Link to="/home">PLAYA</Link>
              </li>
              <li className="w-full mx-10">
                <Search></Search>
              </li>
              <li className="flex-shrink-0 mr-10">
                <Link to="/games">평가하기</Link>
              </li>
              <li className="flex-shrink-0 mr-10">Log in</li>
              <li className="flex-shrink-0">Sign in</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;

// import React from "react";
// import { Link } from "react-router-dom";
// import Search from "./Search";

// function Navigation() {
//   return (
//     <header
//       className="fixed w-full h-60 bg-darkGray text-white border-b block"
//       style={{ borderColor: "#252525" }}
//     >
//       <nav className="block">
//         <div className="block">
//           <div className="flex w-96 justify-center text-5xl font-thin tracking-widest hover:text-red-400 grid content-center">
//             <Link to="/home">PLAYA</Link>
//           </div>
//           <div
//             id="searchContainer"
//             className="w-full flex-grow grid content-center"
//           >
//             <Search></Search>
//           </div>
//           <div className="flex ml-10 font-normal text-lg w-96">
//             <span className="flex-1  grid content-center text-center">
//               <Link to="/games">평가하기</Link>
//             </span>
//             <span className="flex-1 ml-10 grid content-center text-center">
//               Log in
//             </span>
//             <span className="flex-1 grid content-center text-center">
//               Sign in
//             </span>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Navigation;
