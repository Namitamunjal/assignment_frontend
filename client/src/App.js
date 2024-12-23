// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Repo from "./components/repo";
// import './style/style.css'

// const App = () => (
//   <Router>
//     <Routes>
//       <Route path="/repo" element={<Repo />} />

//     </Routes>
//   </Router>
// );

// export default App;

import React from "react";
import Dashboard from "./components/Dashboard";
import '@fontsource/inter'; // Defaults to weight 400

const App = () => {
  return <Dashboard />;
};

export default App;

