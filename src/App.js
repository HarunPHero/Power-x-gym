import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";

import Price from './Components/Pricing/Price'
import Class from "./Components/Classes/Class";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/class">
            <Class></Class>
          </Route>
          <Route path="/price">
            <Price></Price>
          </Route>
        </Switch>
        <Route exact path="/"><Home></Home></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
