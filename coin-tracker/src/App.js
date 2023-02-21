import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [loading, setloading] = useState(true)
  const [coins, setCoins] = useState([])
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
    setCoins(json)
    setloading(false)})
  },[])

  return (
    <div>
      <h1> {loading ? "" : coins.length } Coin Tracker!</h1>
      {loading ? <strong>Loading...</strong> : 
      <select>
        {coins.map((coin)=>(
          <option>
            {coin.name} {coin.symbol} : $ {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>}
      
    </div>
  );
}

export default App;
