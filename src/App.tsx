import Child from "./components/Child";

const clickHandler = () => {
  alert("ボタンがクリックされました。");
}

const App = () => {
  return (
    <>
      <button onClick={clickHandler}>クリック</button>
      <button>クリック</button>
    </>
  )
}

export default App;
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