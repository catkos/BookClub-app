import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Views/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LogIn from "./Views/LogIn.tsx";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);
