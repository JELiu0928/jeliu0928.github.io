import React, {useState} from 'react';
import test from './App.module.css';
// import A from "./A";
import B from "./B";

const App = () => {
    console.log("App組件重新渲染")

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        console.log("點擊按鈕")
        setCount(1);
    };

    return (
        <div>
            {count}
            <B/>
            <button onClick={clickHandler}>Click Me</button>
        </div>
    );
};

export default App;
