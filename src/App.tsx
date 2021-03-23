import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MissionContainer from './components/Mission';
import MissionList from './components/MissionInfo';

function App() {

const [dataId, setDataId] = useState("1")

const setId = (data:any) =>{

  setId(data)

}

  return (
    <div className="AppContainer">
      <MissionContainer getId={(data:any)=>setDataId(data)} />
      <MissionList id={dataId} />
    </div>
  );
}

export default App;
