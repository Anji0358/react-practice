import { useState, type ChangeEvent } from "react";

type Person = {
    name: string;
    age: number;
};

const State2 = () => {
    const personObj: Person = {
        name: "Tom",
        age: 18,
    };

    const [person, setPerson] = useState<Person>(personObj);

    
    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        //上書きするプロパティだけを後ろに記述
        setPerson({
            ...person,
            name: e.target.value,
        });
    };

    const changeAge = (e: ChangeEvent<HTMLInputElement>) => {
        setPerson({
            ...person,
            age: Number(e.target.value),
        });
    };

    const reset = () => {
        setPerson({
            name: "",
            age: 0,
        });
    };

    return (
        <>
            <h3>Name: {person.name}</h3>
            <h3>Age: {person.age}</h3>

            <input
                type="text"
                value={person.name}
                onChange={changeName}
            />

            <input
                type="number"
                value={person.age}
                onChange={changeAge}
            />

            <div>
                <button onClick={reset}>リセット</button>
            </div>
        </>
    );
};

export default State2;