import React,{useState} from 'react'
import PointCount from '../PointCount/PointCount.component'
import './Card-component.css';
const Card = ({subject,className}) => {
    // state for credit/point which is being displayed between up and down icons   
    const [displayPoint, setDisplayPoint]= useState(0.0);
    // updates subject.grade but doesn't re render because we are not setting state
    const gradeChangeHandler = (val) => {
        subject.grade=val;
      }
    // updates subject.points and updating displaPoint as it needs to be re rendered and updated on page unlike subject.grade
    const pointChangeHandler = (val) => {
        subject.points=val;
        setDisplayPoint(val);
      }

    return (
    <div className={className}>
        <p>{subject.name}</p>
        <form>
            <select name="grades" id="gpa-selector" onChange={(event) => gradeChangeHandler((parseInt(event.target.value)))}>
                <option value="10">O</option>
                <option value="9">A+</option>
                <option value="8">A</option>
                <option value="7">B+</option>
                <option value="6">B</option>
                <option value="5">C</option>
                <option value="0">F</option>
                <option value="0">Ab</option>
            </select>
        </form>
        {/* points/credits increaser or decreaser */}
        <PointCount  point={subject.points} pointChangeHandler={pointChangeHandler} displayPoint={displayPoint}/>

    </div>
  )
}

export default Card;