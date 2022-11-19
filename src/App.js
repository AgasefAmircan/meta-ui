import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Alert from "./components/alert/Alert";
import Intro from "./components/Intro";
import Home from "./Home";
import Badges from "./components/badges/Badges";
import Button from "./components/button/Button";
import Cards from "./components/cards/Cards";
import Grid from "./components/grid/Grid";
import { Image } from "./components/image/Image";
import Input from "./components/input/Input";
import List from "./components/list/List";
import Modal from "./components/modal/Modal";
import Navigation from "./components/navigation/Navigation";
import Rating from "./components/rating/Rating";
import Slider from "./components/slider/Slider";
import Text from "./components/text-utilities/Text";
import Toast from "./components/toast/Toast";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="home" element={<Home />}/>
          <Route path="/introduction" element={<Intro />}/>
          <Route path="/avatar" element={<Avatar />}/>
          <Route path="/alert" element={<Alert />}/>
          <Route path="/badges" element={<Badges />}/>
          <Route path="/button" element={<Button />}/>
          <Route path="/cards" element={<Cards />}/>
          <Route path="/grid" element={<Grid />}/>
          <Route path="/image" element={<Image />}/>
          <Route path="/input" element={<Input />}/>
          <Route path="/list" element={<List />}/>
          <Route path="/modal" element={<Modal />}/>
          <Route path="/navigation" element={<Navigation />}/>
          <Route path="/rating" element={<Rating />}/>
          <Route path="/slider" element={<Slider />}/>
          <Route path="/text" element={<Text />}/>
          <Route path="/toast" element={<Toast />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
