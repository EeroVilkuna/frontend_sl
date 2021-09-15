import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);

  /*
  litres: bottles * 0.33
  grams: litres * 8 * 4.5
  burning: weight / 10
  grams(left): grams – (burning * time)
  */

  function handleSubmit(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let burning = weight / 10;
    let grams = (litres * 8 * 4.5);
    let gramsleft = grams - (burning * time);
    let alkolvl = 0;

    if (gender === "male") {
      alkolvl = gramsleft / (weight * 0.7);
    } else {
     alkolvl = gramsleft / (weight * 0.6);
    } 
    if(alkolvl < 0){
      setResult(0);
    }else{
      setResult(alkolvl);
    }
  }
  
  return (
    <body>
      <form onSubmit={handleSubmit} style = {{margin: '30px'}}>
        <h3>Calculating alcohol blood level</h3>
        <div>
          <label>Weight</label>
          <input
            type="number"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
          />
        </div>
        <div>
          <label>Bottles</label>
          <input
            name="bottles"
            type="number"
            step="1"
            onChange={(e) => setBottles(e.target.value)}
          />
        </div>
        <div>
          <label>Time</label>
          <input
            name="time"
            type="number"
            step="1"
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div>
          <label>Gender: </label>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            defaultChecked
            onChange={(e) => setGender(e.target.value)}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
         
        </div>

        <div>
          <output>{result.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </body>
  );
}

export default App;
