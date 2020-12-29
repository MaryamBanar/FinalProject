
import React, { useState } from 'react'

const api={base:"https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json"}

function App() {

  const [currency,setCurrency]=useState({});
  fetch('${base}')
  .then(res=>res.json())
  .then(result=> {
    setCurrency(result);
    console.log(result);
   });

  return (
    <div className="app">
    <main>
      <div className="Header"><h1>نرخ طلا و ارز</h1></div>

      <div className="USA">
      <div className="USA-Box">
      <div className="USA-Text">دلار آمریکا</div> 
      <div className="USA-Sell"> :فروش</div>
      <div className="USA-Buy"> :خرید</div>
    </div>
     </div>


  <div className="RUS">
  <div className="RUS-Box">
      <div className="RUS-Text">روبل روسیه</div> 
      <div className="RUS-Sell"> :فروش</div>
      <div className="RUS-Buy"> :خرید</div>
  </div>
  </div>

    </main>
    </div>
  );
}

export default App;
