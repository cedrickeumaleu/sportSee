import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/header";
import "./App.css";
import Home from "./pages/home";
import Profil from "./pages/profil";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          logoUrl="/images/logo.png"
          homeLink="home"
          homeText="Accueil"
          profilLink="profil"
          profilText="Profil"
          reglageLink="reglage"
          reglageText="Réglage"
          communautyLink="communauty"
          communautyText="Communauté"
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          {/* <Route path="/accommodation/:id" element={<Reglage />} />
          <Route path="*" element={<Communaute />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
