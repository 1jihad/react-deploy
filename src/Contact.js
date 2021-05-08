import React,{useState} from 'react';

function Contact(props) {
    
    function inputBoxVal(e){
        console.log("Value: ", e.target.value);
        setVal(e.target.value);
    }

    const [val, setVal] = useState("Jihad Hassan");

    return (
        <div>
            <h1>Contact Us</h1>
            <input type="text" value={val} onChange={inputBoxVal} />
            <button onClick={() => alert(val)}>Hit me</button>
        </div>
    )
}

export default Contact