import React,{useState} from 'react';
import {Test} from './test.component'


const Edit=()=>{
    const [count,setCount]=useState(0);
    return(
            <div>
                <Test increment={()=>setCount(count+1)}/>
                <div>count:{count}</div>
            </div>
    )
    
};
export default Edit;
