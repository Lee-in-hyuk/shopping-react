import Buttons from './components/Buttons';
import Lists from './components/Lists';
import itemsdata from './data/data.json';
import { useState } from 'react';
import './App.css';

function App() {
  // console.log(itemsdata);
  const [ itemLists, setItemLists ] = useState(itemsdata.items);
  console.log(itemLists);
  function onButton(e){
    // console.log(e.target);
    const dataset = e.target.dataset;
    // console.log(dataset);
    const { key, value } = dataset;
    const lists = itemsdata.items.filter(item=>item[key] === value);
    setItemLists(lists);
    console.log(value);
  }
  return (
    <div className="App">
      <div className="logoDiv">
        <img src="imgs/logo.png" alt="logo" className="logo"/>
      </div>
      <Buttons onButton={onButton}/>
      <Lists itemLists={itemLists}/>
    </div>
  );
}

export default App;
