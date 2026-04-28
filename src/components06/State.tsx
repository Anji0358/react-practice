import { useState } from "react";

const State = () => {
    const [val, setVal] = useState(0);
    const inc = () => setVal(val + 1);
    const dec = () => setVal(val - 1);

    return (
        <>
            <p>現在のカウント数:{val}</p>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </>
    )
}

export default State;