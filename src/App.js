import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";

import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";

import Price from "./Components/Pricing/Price";
import Class from "./Components/Classes/Class";
import Footer from "./Components/Footer/Footer";

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
            <Class></Class>
          </Route>
          <Route path="/class">
            <Class></Class>
          </Route>
          <Route path="/price">
            <Price></Price>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/price">
            <Price></Price>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <div className="text-center">
              <img
                className="w-75 m-5"
                src="http://ummah-reactjs.wpocean.com/static/media/error-404.8cf02993.png"
                alt=""
              />
              <h5 className="text-secondary text-center m-5">
                We’re sorry but we can’t seem to find the page you requested.
                This might be because you have typed the web address
                incorrectly.
              </h5>
              <a className="btn btn-success" href="/">
                Back to home
              </a>
            </div>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
