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
      <div className="INDIA-Text">{currency.sana.data[3].updated_at}<p>روپیه هند</p></div> 
      <div className="INDIA-Sell"> {currency.sana.data[20].p}:فروش</div>
      <div className="INDIA-Buy"> {currency.sana.data[3].p}:خرید</div>
    </div>
  </div>

  <div className="ENGLAND">
    <div className="ENGLAND-Box">
      <div className="ENGLAND-Text">{currency.sana.data[11].updated_at}<p>پوند انگلیس</p></div> 
      <div className="ENGLAND-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="ENGLAND-Buy"> {currency.sana.data[11].p}:خرید</div>
    </div>
  </div>

  <div className="YORO">
    <div className="YORO-Box">
      <div className="YORO-Text">{currency.sana.data[11].updated_at}<p>یورو</p></div> 
      <div className="YORO-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="YORO-Buy"> {currency.sana.data[11].p}:خرید</div>
    </div>
  </div>

  <div className="CHINA">
    <div className="CHINA-Box">
      <div className="CHINA-Text">{currency.sana.data[6].updated_at}<p>یوان چین</p></div> 
      <div className="CHINA-Sell"> {currency.sana.data[22].p}:فروش</div>
      <div className="CHINA-Buy"> {currency.sana.data[6].p}:خرید</div>
    </div>
  </div>

  <div className="EMARAT">
    <div className="EMARAT-Box">
      <div className="EMARAT-Text">{currency.sana.data[2].updated_at}<p>درهم امارات</p></div> 
      <div className="EMARAT-Sell"> {currency.sana.data[19].p}:فروش</div>
      <div className="EMARAT-Buy"> {currency.sana.data[2].p}:خرید</div>
    </div>
  </div>

  <div className="TURKI">
    <div className="TURKI-Box">
      <div className="TURKI-Text">{currency.sana.data[4].updated_at}<p>لیر ترکیه</p></div> 
      <div className="TURKI-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="TURKI-Buy"> {currency.sana.data[4].p}:خرید</div>
    </div>
  </div>

  <div className="KORIA">
    <div className="KORIA-Box">
      <div className="KORIA-Text">{currency.sana.data[7].updated_at}<p>وون کره جنوبی</p></div> 
      <div className="KORIA-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="KORIA-Buy"> {currency.sana.data[7].p}:خرید</div>
    </div>
  </div>

  <div className="SOEES">
    <div className="SOEES-Box">
      <div className="SOEES-Text">{currency.sana.data[8].updated_at}<p>فرانک سوییس</p></div> 
      <div className="SOEES-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="SOEES-Buy"> {currency.sana.data[8].p}:خرید</div>
    </div>
  </div>

  <div className="SOED">
    <div className="SOED-Box">
      <div className="SOED-Text">{currency.sana.data[12].updated_at}<p>کرون سويد</p></div> 
      <div className="SOED-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="SOED-Buy"> {currency.sana.data[12].p}:خرید</div>
    </div>
  </div>

  <div className="JAPEN">
    <div className="JAPEN-Box">
      <div className="JAPEN-Text">{currency.sana.data[9].updated_at}<p>ین ژاپن</p></div> 
      <div className="JAPEN-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="JAPEN-Buy"> {currency.sana.data[9].p}:خرید</div>
    </div>
  </div>

  <div className="NORVEZH">
    <div className="NORVEZH-Box">
      <div className="NORVEZH-Text">{currency.sana.data[13].updated_at}<p>کرون نروژ</p></div> 
      <div className="NORVEZH-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="NORVEZH-Buy"> {currency.sana.data[13].p}:خرید</div>
    </div>
  </div>

  <div className="ARAQ">
    <div className="ARAQ-Box">
      <div className="ARAQ-Text">{currency.sana.data[14].updated_at}<p>دینار عراق</p></div> 
      <div className="ARAQ-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="ARAQ-Buy"> {currency.sana.data[14].p}:خرید</div>
    </div>
  </div>

  <div className="AUS">
    <div className="AUS-Box">
      <div className="AUS-Text">{currency.sana.data[15].updated_at}<p>دلار استرالیا</p></div> 
      <div className="AUS-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="AUS-Buy"> {currency.sana.data[15].p}:خرید</div>
    </div>
  </div>

  <div className="KANADA">
    <div className="KANADA-Box">
      <div className="KANADA-Text">{currency.sana.data[10].updated_at}<p>دلار کانادا</p></div> 
      <div className="KANADA-Sell"> {currency.sana.data[18].p}:فروش</div>
      <div className="KANADA-Buy"> {currency.sana.data[10].p}:خرید</div>
    </div>
  </div>
  </div>
      ):('')};

    </main>
    </div>
  );
}

export default App;
