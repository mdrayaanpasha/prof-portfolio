import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/home";
import Writing from "./pages/writing";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/writing" element={<Writing/>} />
        
      </Routes>
    </Router>
  )
}