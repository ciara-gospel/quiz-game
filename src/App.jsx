
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Score from "./pages/score";
import { UseData } from "./context/context";


function App() {
  

  return (
      <UseData>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Quiz/:number"
          element={<Quiz/>}
        />
        <Route path="/ScorePage" element={<Score />} />
      </Routes>
    </BrowserRouter>
    </UseData>
  )
}

export default App
