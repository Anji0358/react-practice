import "./Child.css"

type ChildProps={
    color:string,
    num:number,
    fn:(arg:string)=>string,
    obj:{
        name:string,
        age:number
    };
};

const Child =({color,num,fn,obj}:ChildProps)=> {                                                     
    return(
        <div className={`component ${color}`}>
            <h3>Hello Component</h3>
            <h3>{num}</h3>
            <h3>{fn("Props")}</h3>
            <h3>{obj.name+obj.age}</h3>
        </div>
    )
}
export default Child;