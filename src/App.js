import React, {useState, useEffect} from 'react';
import './App.css';
import Circuit from './Circuit';


const App = () => {

  const [circuits, setCircuits] = useState([]);
  const [search, setSearch] = useState("1");

  useEffect(() => {
    getCircuits();
  }, [search]);

  const getCircuits = async () => {
    const response = await fetch(`https://ergast.com/api/f1/2020/${search}.json`);
    const data = await response.json();
    const circuitArray = Object.values(data.MRData.RaceTable);
    const circuitArray2 = Object.values(circuitArray[2]);
    setCircuits(circuitArray2);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  return(
    <div className="App">
      <h1 className="mt-4"><i className="fa fa-flag-checkered mr-3"></i>2020 F1 Circuits</h1>
      <p className="pl-2 pr-2">F1 circuit list for the 2020 season, built using React.js.</p>
      <form className="search-form mt-4">

        <select className="search-bar custom-select" value={search} onChange={updateSearch}>
          <option value="1">Australia</option>
          <option value="2">Bahrain</option>
          <option value="3">Vietnam</option>
          <option value="4">China (*Postponed)</option>
          <option value="5">Netherlands</option>
          <option value="6">Spain</option>
          <option value="7">Monaco</option>
          <option value="8">Azerbaijan</option>
          <option value="9">Canada</option>
          <option value="10">France</option>
          <option value="11">Austria</option>
          <option value="12">Britain</option>
          <option value="13">Hungary</option>
          <option value="14">Belgium</option>
          <option value="15">Italy</option>
          <option value="16">Singapore</option>
          <option value="17">Russia</option>
          <option value="18">Japan</option>
          <option value="19">USA</option>
          <option value="20">Mexico</option>
          <option value="21">Brazil</option>
          <option value="22">Abu Dhabi</option>
        </select>

      </form>  
      
      <div className="circuits">
        {circuits.map(circuit =>(                
          <Circuit round={circuit.round}
          title={circuit.raceName}
          track={circuit.Circuit.circuitName}
          date={circuit.date}
          key={circuit.round}
          />
        ))}
      </div>    
    </div>
  );
};


export default App;
