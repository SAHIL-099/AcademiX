import Navbar from "./Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LearnX from "./pages/LearnX"
import Tools from "./pages/Tools"
import BoothsAlgorithm from "./pages/tools/BoothsAlgorithm"
import NumberConversion from "./pages/tools/NumberConversion"
import AdditionSubtraction from "./pages/tools/AdditionSubtraction"
import POSET from "./pages/tools/POSET"
import EulerianPath from "./pages/tools/EulerianPath"


const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/learn-x' element={<LearnX />} />
          <Route path="/tools/booths-algorithm" element={<BoothsAlgorithm />} />
          <Route path="/tools/number-conversion" element={<NumberConversion />} />
          <Route path="/tools/binary-arithmetic" element={<AdditionSubtraction/>} />
          <Route path="/tools/poset" element={<POSET/>} />
          <Route path="/tools/eulerian-path" element={<EulerianPath/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;