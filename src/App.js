import { Route, Routes } from "react-router-dom";
import "./App.css";
import Todos from "./components/todos/Todos";
import Navbar from "./components/navbar/Navbar";
import About from "./routes/About";
const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Todos />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
