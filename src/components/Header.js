import React from "react";
// import bg from "../imgs/bg.png"; // Tell webpack this JS file uses this image

function Header() {
  return (
    <header class="bg-white shadow top-0 w-full z-50 fixed">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 class="text-3xl font-bold leading-tight">
          <a href="/#">NeurIPS 2025 Open Polymer Challenge</a>
        </h1>
        <nav>
          <ul class="flex space-x-6">
            <li>
              <a class="text-gray-600 hover:text-blue-800" href="/#">
                Overview
              </a>
            </li>
            {/* <li>
              <a
                className="text-gray-600 hover:text-gray-800"
                href="/#track1_prediction"
              >
                Property Prediction
              </a>
            </li> */}
            <li>
              <a className="text-gray-600 hover:text-gray-800" href="/#dates">
                Important Dates
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800" href="/#news">
                News
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800" href="/#team">
                Organizers
              </a>
            </li>
            <li>
              <a className="text-gray-600 hover:text-gray-800" href="/#acknowledgements">
                Acknowledgements
              </a>
            </li>
            {/* <li>
              <a class="text-gray-600 hover:text-blue-800" href="/leaderboard">
                Leaderboard
              </a>
            </li> */}
            {/* <li>
              <a
                class="text-gray-600 hover:text-gray-800"
                href="https://github.com/open-polymer-challenge/challenge-code"
              >
                Github
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

// function Header() {
//   return (
//   <header class="bg-white shadow top-0 w-full z-50 fixed">
//     <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//      <h1 class="text-3xl font-bold leading-tight">
//       Open Polymer Challenge
//      </h1>
//      <nav>
//       <ul class="flex space-x-6">
//        <li>
//         <a class="text-gray-600 hover:text-blue-800" href="/#">
//          Home
//         </a>
//        </li>
//        <li>
//         <a class="text-gray-600 hover:text-blue-800" href="/leaderboard">
//          Leaderboard
//         </a>
//        </li>
//        <li>
//         <a class="text-gray-600 hover:text-gray-800" href="/dataset">
//          Datasets
//         </a>
//        </li>
//       <li class="relative group">
//         <div class="text-gray-600 hover:text-gray-800 flex items-center cursor-pointer">
//           AI Tools
//           <span class="ml-1"> &#9662;</span>
//         </div>
//         <ul class="absolute left-0 w-48 mt-2 space-y-2 bg-white text-gray-600 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 delay-150 invisible group-hover:visible">
//           <li>
//             <a class="block px-4 py-2 hover:bg-gray-100" href="/predict">
//               Property Prediction
//             </a>
//           </li>
//           <li>
//             <a class="block px-4 py-2 hover:bg-gray-100" href="/#">
//               Inverse Design
//             </a>
//           </li>
//         </ul>
//       </li>
//        <li>
//         <a class="text-gray-600 hover:text-gray-800" href="/challenge">
//          Challenge (Target: NeurIPS 2024)
//         </a>
//        </li>
//        <li>
//         <a class="text-gray-600 hover:text-gray-800" href="/update">
//          Updates
//         </a>
//        </li>
//        <li>
//         <a class="text-gray-600 hover:text-gray-800" href="/#">
//          Doc.
//         </a>
//        </li>
//       </ul>
//      </nav>
//     </div>
//    </header>
//   );
// }

export default Header;
