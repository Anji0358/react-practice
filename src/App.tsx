import Child from "./components/Child";

const App = () => {
  const hello=(arg)=>`Hello ${arg}`;
  return (
    <>
      {/* <Child color="red"/> */}
      <Child 
      num={123}
      fn={hello}
      obj={{name:"Tom",age:18}}
      />
    </>
  );
}

export default App;