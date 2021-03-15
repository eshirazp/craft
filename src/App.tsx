import { FunctionComponent } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./Content";
import logo from "./assets/logo.webp";
import "./App.scss";

const App: FunctionComponent = ({ children }) => (
  <div className="App">
    <Header logo={logo} />
    <div className="app-content">
      <Content />
    </div>
    <Footer text={"Worked on by Elush Shirazpour"} />
  </div>
);

export default App;
