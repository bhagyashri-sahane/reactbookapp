import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
  
// );

function booklist(){
  return(
  <section>
   <div>
   <a href='https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194'>'Rich dad Poor Dad'</a>
   
    <img src={require('./images/rich_dad_poor_dad.jpg')}  />
    </div>
    <br></br>
    <div>
    <a href='https://www.bookganga.com/eBooks/Books/Details/5051337234459474401'>'Rich Mother rich son'</a>
    <br></br>
    <img src={require('./images/rich_mother_rich_son.jpg')} ></img>
    <br></br>
    </div>
    <div>
    <a href='https://en.wikipedia.org/wiki/Wings_of_Fire_(autobiography)'>Wings of fire</a>
    <br></br>
    <img src={require('./images/wings_of_fire.jpg')} ></img>
    <br></br>
    </div>
    <div>
    <a href='mazon.com/Ikigai-Japanese-Secret-Long-Happy/dp/0143130722'>Ikigai</a>
    <br></br>
    <img src={require('./images/ikegai.jpg')} ></img>
    <br></br>
    </div>
    <div>
    <a href='https://www.amazon.in/s?k=7+habits+of+highly+effective+peopl&adgrpid=56414816862&ext_vrnc=hi&hvadid=596933951902&hvdev=c&hvlocphy=1007788&hvnetw=g&hvqmt=e&hvrand=14790875505208630978&hvtargid=kwd-376158750719&hydadcr=23578_2222195&tag=googinhydr1-21&ref=pd_sl_7a2wakep8k_e'>7 habbits of highly effective people</a>
    <br></br>
    <img src={require('./images/habbits_of_highely_effective_people.jpg')} ></img>
    </div>
  </section>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(booklist())



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
