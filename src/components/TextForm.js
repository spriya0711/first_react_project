import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleLoClick =()=>{
        //console.log("Uppercase was clicked")
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleClearClick =()=>{
        //console.log("Uppercase was clicked")
        let newText="";
        setText(newText)
    }

    const handleOnChange =(event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#050d2b', color:props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container" my-3 style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split (" ").length-1} words, {text.length} characters</p>
        <p>{0.008*text.split (" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Write something to preview"}</p>

    </div>
    </>
  )
}
