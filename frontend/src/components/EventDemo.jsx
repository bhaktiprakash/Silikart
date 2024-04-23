import { useState } from "react";

function EventDemo({name}){
    // let i = 0
    // const v = useState(0)
    // console.log(v);
    // const [i, myfunction] = useState(0)
    const [i, setI] = useState(0)
    const [show, setShow] = useState(true)
    function handleClick(){
        // i++;
        let newI = i+1;
        // myfunction(newI);
        // setI(i+1)
        setI(newI)
        console.log("Button is Clicked "+newI+" times");
    }
    // function test(data){
    //     console.log(data);
    // }
    // function anotherFunction(){
    //     test(10)
    // }
    function handleToggle(){
        setShow(!show)
    }
    console.log("Component "+name+" Rendered");

    return(
        <>
            {/* {show ? (
                <>
                    <h1>Event Demo</h1>
                    <h2>You have clicked {i} times</h2>
                </>
            ) : ("") } */}

            {show && <>
                <h1>Event Demo</h1>
                <h2>You have clicked {i} times</h2>
            </>}
            {/* <h1>Event Demo</h1>
            <h2>You have clicked {i} times</h2> */}
            <button onClick={handleClick}>Click</button>
            <button onClick={handleToggle}>Toggle</button>
            {/* <button onClick={anotherFunction}>Click</button> */}
            {/* <button onClick={()=>test(10)}>Click</button> */}
        </>
    )
}

export default EventDemo