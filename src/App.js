import React, { useState} from 'react';
import Card  from "./components/Card/Card.component.jsx";
import SubCount from "./components/SubCount/SubCount.component";
import "../src/App.css"

const App = () => {
  const [numOfSubs, setNumOfSubs] = useState(2);
  const [result, setResult] = useState();
  const [sumOfPoints, setSumOfPoints] = useState();
  const [subjects, setSubjects] = useState([
    {name:'Subject 1',id:1,grade:10,points:0.0},
    {name:'Subject 2',id:2,grade:10,points:0.0}
  ])
  
  const error_display =document.getElementById('error-display');
  async function displayError(e_msg) {
    error_display.setAttribute("style", "display:flex;");
    error_display.innerHTML =`<p>${e_msg}</p>`;
    setTimeout(() => {
      error_display.setAttribute("style", "display:none;");
    }, 2000);
  }

  const calcResult = () => { 
    //array of product of credits and grades
      let product =subjects.map((sub)=>{
        return sub.grade*sub.points
      })
      //sum of points 
      let accumlatedPoints=0;
      subjects.forEach(sub => {
        accumlatedPoints=accumlatedPoints +sub.points;
      });
      // sum of product array aka numerator
      let numerator=product.reduce((accu,curr)=> parseFloat(accu+curr))
     
      if(isNaN(accumlatedPoints)||accumlatedPoints===0  ) {
        //Hanlding division by sumofpoints i.e zero exception
        displayError("Sum Of Points Cannot Be Zero")
      }
      else {
           //updating sum of points to render sum of credits/points 
          setSumOfPoints(accumlatedPoints)
          //num/acc is the formula for gpa calculation and fixing/limiting it to 3 decimals 
          setResult(parseFloat(numerator/accumlatedPoints).toFixed(3));
          window.scrollTo(0, document.body.scrollHeight);
      }
      
    }
  return (
    <center >
      <header ><span className="heading">Gpa Calculator</span></header>
      {/* subject counter aka adder and remover of Card component */}
      <SubCount max={10} min={1} numOfSubs={numOfSubs} changeHandler={setNumOfSubs} subjects={subjects}/>
      {/* mapping every subject in subjects as a card*/}
      <div className='card-container'>{subjects.map((subject,index)=>{
        return <Card key={index} subject={subject} className="card" />
      })}</div>
      {/* result calculator*/}
      <div className='result'>
        <button onClick={calcResult} className='result-button'>Result</button>
        <h1>{result}</h1>
        <h3>{ sumOfPoints&&
              `Sum of Credits/Points is ${sumOfPoints}`}
        </h3>
      </div> 
    </center>
  )
}

export default App