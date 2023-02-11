import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Navbar, Fav, Search, About, Article } from "./components/index";

import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:slug" element={<Article />} />
        <Route path="/tv/:slug" element={<Article />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Fav />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
