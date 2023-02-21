import './App.css';
import { ParallaxProvider, Parallax } from 'react-parallax';

function App() {

const Car2 = {
  wheels : 4,
  drive() {
    console.log("drive")
  }
}

const Casper = {
  color : "White",
  navigation : 1
}

Casper.__ proto__ = Car2;

const Ray = {
  color : "blue",
  ADS : 1
}

Ray.__proto__ = Casper;
}

export default App;
