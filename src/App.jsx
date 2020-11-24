import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AdultsCatigory from "./components/AdultsCatigory/AdultsCatigory";
import ChildCategory from "./components/ChildCategory/ChildCategory";
import ClothesCategory from "./components/Clothes/ClothesCategory/ClothesCategory";
import AccessoriesCategory from "./components/AccessoriesCategory/AccessoriesCategory";
import MotorCategory from "./components/MotorCategory/MotorCategory";
import ToolsCategory from "./components/ToolsCategory/ToolsCategory";
import Mirrors from "./components/Mirrors/Mirrors";
import Bells from "./components/Bells/Bells";
import Mudguards from "./components/Mudguards/Mudguards";
import Lighting from "./components/Lighting/Lighting";
import Locks from "./components/Locks/Locks";
import Gear from "./components/Gear/Gear";
import ContactUs from "./components/ContactUs/ContactUs";
import BaseLayers from "./components/Clothes/BaseLayers/BaseLayers";
import BibShorts from "./components/Clothes/BibShorts/BibShorts";
import BibTights from "./components/Clothes/BibTights/BibTights";
import BodyArmour from "./components/Clothes/BodyArmour/BodyArmour";
import Compression from "./components/Clothes/Compression/Compression";
import Gilets from "./components/Clothes/Gilets/Gilets";
import Gloves from "./components/Clothes/Gloves/Gloves";
import Headwear from "./components/Clothes/Headwear/Headwear";
import Jackets from "./components/Clothes/Jackets/Jackets";
import Kids from "./components/Clothes/Kids/Kids";
import LongSleeved from "./components/Clothes/LongSleeved/LongSleeved";
import Safety from "./components/Clothes/Safety/Safety";
import Shorts from "./components/Clothes/Shorts/Shorts";
import Skin from "./components/Clothes/Skin/Skin";
import Warmers from "./components/Clothes/Warmers/Warmers";
import ShortSleeved from "./components/Clothes/ShortSleeved/ShortSleeved";
import Socks from "./components/Clothes/Socks/Socks";
import ThreeQuarters from "./components/Clothes/ThreeQuarters/ThreeQuarters";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/race" component={AdultsCatigory} />
        <Route path="/children" component={ChildCategory} />
        <Route path="/clothes" component={ClothesCategory} />
        <Route path="/accesories" component={AccessoriesCategory} />
        <Route path="/motor" component={MotorCategory} />
        <Route path="/tools" component={ToolsCategory} />
        <Route path="/mirrors" component={Mirrors} />
        <Route path="/Bells" component={Bells} />
        <Route path="/Mudguards" component={Mudguards} />
        <Route path="/Lighting" component={Lighting} />
        <Route path="/Locks" component={Locks} />
        <Route path="/BaseLayers" component={BaseLayers} />
        <Route path="/BibShorts" component={BibShorts} />
        <Route path="/BibTights" component={BibTights} />
        <Route path="/BodyArmour" component={BodyArmour} />
        <Route path="/Compression" component={Compression} />
        <Route path="/Gilets" component={Gilets} />
        <Route path="/Gloves" component={Gloves} />
        <Route path="/Headwear" component={Headwear} />
        <Route path="/Jackets" component={Jackets} />
        <Route path="/Kids" component={Kids} />
        <Route path="/LongSleeved" component={LongSleeved} />
        <Route path="/Safety" component={Safety} />
        <Route path="/Shorts" component={Shorts} />
        <Route path="/ShortSleeved" component={ShortSleeved} />
        <Route path="/Skin" component={Skin} />
        <Route path="/Socks" component={Socks} />
        <Route path="/Warmers" component={Warmers} />
        <Route path="/ThreeQuarters" component={ThreeQuarters} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
