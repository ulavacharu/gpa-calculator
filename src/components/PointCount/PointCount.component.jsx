import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PointCount = ({point,pointChangeHandler,displayPoint}) => {
  //adding 0.5 credit and pointChangeHandler refers to a func which has setDisplayPoint in Card component
   const adding =()=> {
    if( point<4.5) {
      point=point+0.5;
      pointChangeHandler(point);
     }
 }
  //decreasing 0.5 credit and pointChangeHandler refers to a func which has setDisplayPoint in Card component
 const subtracting =()=> {
  
    if( point>0.0) {
      point=point-0.5;
      pointChangeHandler(point);
     }
}
  return (
      <div className="up-down">
        <KeyboardArrowUpIcon className="point-arrows" onClick={adding}/>
        {/* updates/ rerenders as it is a state in Card Component and we are setting State in above functions*/}
        {displayPoint}
        <KeyboardArrowDownIcon className="point-arrows" onClick={subtracting}/>
      </div>
  )
}

export default PointCount