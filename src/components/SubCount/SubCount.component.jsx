import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//should have named subject count :[
const SubCount = ({numOfSubs,subjects,changeHandler}) => {
  const pushing =()=> {
      if( numOfSubs<10) {
        subjects.push({name:`Subject ${numOfSubs+1}`,id:numOfSubs+1,grade:10,points:0.0})  
        changeHandler(numOfSubs+1);
      }
  }
  const poping =()=> {
    if(numOfSubs>1 ) {
      subjects.pop()
      changeHandler(numOfSubs-1);
      }
  }
  return (
    <div className="sub-adjuster">
        <h3>Subject Count</h3>
        <div className='up-down'>
          <KeyboardArrowUpIcon className="arrows" onClick={pushing}/>
          {numOfSubs}
          <KeyboardArrowDownIcon className="arrows" onClick={poping}/>
        </div>
    </div>
  )
}

export default SubCount