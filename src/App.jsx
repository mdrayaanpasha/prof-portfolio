import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/home";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
      </Routes>
    </Router>
  )
}