import { useState } from "react";
import type{ChangeEvent  } from "react";

const App = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      {" = "}
      {value}
    </>
  );
};

export default App;
// const clickHandler = () => {
//   alert("ボタンがクリックされました。");
// }
// const App=()=>{
//   return (
//     <>
//     <div>
//       <h3>コンソールを確認してください</h3>
//       <label>
//         入力値のイベント:
//         <input
//         type="text"
//         onChange={()=>console.log("onChange検知")}
//         // フォーカスを失ったときに検知
//         onBlur={()=>console.log("onBlur検知")}
//         onFocus={()=>console.log("onFocus検知")}
//         />
//       </label>
//     </div>

//     <div>
//       <label>
//         入力値を取得:
//         <input type="text" onChange={(e)=>console.log(e.target.value)}/>
//       </label>
//     </div>

//     <div
//       className="hover-event"
//       onMouseEnter={()=>console.log("カーソルが入ってきました。")}
//       onMouseLeave={()=>console.log("カーソルが出ていきました。")}
//       >
//         ホバーしてください
//     </div>
//     </>

//   )
// }

// const App = () => {
//   return (
//     <>
//     {/* clickHandler()とすると実行したものとみなされるので付けない */}
//       <button onClick={clickHandler}>クリック</button>
//       <button>クリック</button>
//     </>
//   )
// }
// const App = () => {
//   const hello = (arg: string): string => `Hello ${arg}`;

//   return (
//     <>
//       <Child
//         color="red"        // string
//         num={123}          // number
//         fn={hello}         // (arg: string) => string
//         obj={{ name: "Tom", age: 18 }} // { name: string; age: number }
//       />
//     </>

//   );
// }