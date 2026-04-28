import { useState } from "react";

const animals=["dog","cat","rat"];

const Array=()=>{
    const [filterVal,setFilterVal]=useState("");
    return(
        <>
        <h3>配列のフィルター</h3>
        <input type="text" value={filterVal} onChange={(e)=>setFilterVal(e.target.value)}/>
        <div>
            <ul>
                {animals
                .filter(animal =>animal.indexOf(filterVal)!==-1)
                .map((animal)=>(
                    <li key={animal}>{animal}</li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Array;