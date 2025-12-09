import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import MainContent from './components/Main';
// import Leaderboard from './components/Challenge_LB';
import Challenge from './components/Challenge';
// import Update from './components/Update';
// import Dataset from './components/Dataset';
// import Predict from './components/Predict';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Challenge />} />
        {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        {/* <Route path="/challenge" element={<Challenge />} /> */}
        {/* <Route path="/dataset" element={<Dataset />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<MainContent />} />
//         <Route path="/leaderboard" element={<Leaderboard />} />
//         <Route path="/challenge" element={<Challenge />} />
//         <Route path="/update" element={<Update />} />
//         <Route path="/dataset" element={<Dataset />} />
//         <Route path="/predict" element={<Predict />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

export default App;
