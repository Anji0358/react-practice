import { useState } from "react";

// POINT 複数チェックボックスの実装
const Form2 = () => {
    const [fruits, setFruits] = useState([
        { label: "Apple", value: 100, checked: false },
        { label: "Banana", value: 200, checked: false },
        { label: "Cherry", value: 300, checked: false },
    ]);

    const [sum, setSum] = useState(0);

    const handleChange = (e) => {
        const newFuruits = fruits.map(fruit => {
            const newfruit = { ...fruit };
            if (newfruit.label === e.target.value) {
                newfruit.checked = !fruit.checked;
            }
            return newfruit;
        })

        setFruits(newFuruits);
        
        let sumval=0;
        newFuruits.forEach(fruit=>{
            if(fruit.checked){
                sumval+=fruit.value;
            }
        });
        setSum(sumval);
    }

    return (
        <div>
            {fruits.map(fruit => {
                return (
                    <div key={fruit.label}>
                        <input
                            id={fruit.label}
                            type="checkbox"
                            value={fruit.label}
                            checked={fruit.checked}
                            onChange={handleChange}
                        />
                        <label htmlFor={fruit.label}>{fruit.label}:{fruit.value}</label>
                    </div>

                )
            })}

            <div>合計：{sum}</div>
        </div>
    );
};

export default Form2;
