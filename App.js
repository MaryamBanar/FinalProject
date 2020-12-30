import React, { useState } from 'react'
const api="https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"
 
function App() {
 const [currency,setCurrency]=useState({});
  fetch(`${api}`)
  .then(res=>res.json())
  .then(result=> {
    setCurrency(result);
    console.log(result);
   });
  
  return (
    <div className="app">
      <main>
      <div className="Header"><h1>نرخ طلا و ارز</h1></div>

      {(typeof currency.sana != "undefined") ? (
        <div>
      <div className="USA">
        <div className="USA-Box">
          <div className="USA-Text">{currency.sana.data[0].updated_at}<p>دلار آمریکا</p></div> 
          <div className="USA-Sell"> {currency.sana.data[17].p}:فروش</div>
         <div className="USA-Buy"> {currency.sana.data[0].p}:خرید</div>
       </div>
      </div>


  <div className="RUS">
    <div className="RUS-Box">
      <div className="RUS-Text">{currency.sana.data[5].updated_at}<p>روبل روسیه</p></div> 
      <div className="RUS-Sell"> {currency.sana.data[21].p}:فروش</div>
      <div className="RUS-Buy"> {currency.sana.data[5].p}:خرید</div>
    </div>
  </div>

  <div className="INDIA">
    <div className="INDIA-Box">
      <div className="INDIA-Text">{currency.sana.data[3].updated_at}روپیه هند</div> 
      <div className="INDIA-Sell"> {currency.sana.data[20].p}:فروش</div>
      <div className="INDIA-Buy"> {currency.sana.data[3].p}:خرید</div>
    </div>
  </div>

  <div className="Coin">
    <div className="Coin-Box">
      <div className="Coin-Text">انواع سکه</div> 
      <div className="Coin-Sell"> :ربع</div>
      <div className="Coin-Buy"> :نیم</div>
      <div className="Coin-Buy"> :تمام</div>
    </div>
   </div>
  </div>
      ):('')};

    </main>
    </div>
  );
}

export default App;
