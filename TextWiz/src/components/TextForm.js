import React,{useState} from 'react'



export default function TextForm(props,handleUpclick,handleOnchange,handleDownclick,handleClearclick,handleCopyclick,handleSpacesclick) {
  handleUpclick=()=>{
    console.log("upper case was clicked")
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" Text has been converted to Upperr Case","success");
  }
  handleDownclick=()=>{
    console.log("upper case was clicked")
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Text has been converted to Lower Case","success");
  }
  handleClearclick=()=>{
    console.log("upper case was clicked")
    let newtext = "";
    setText(newtext);
    props.showAlert(" Text has been Cleared","success");
  }
  handleCopyclick=()=>{
    console.log("upper case was clicked");
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text has been Copied","success");
  }
  handleSpacesclick=()=>{
    console.log("upper case was clicked")
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert(" Spaces has been Cleared","success");

  }
  handleOnchange=(event)=>{
    console.log("onchange was clicked")
    setText(event.target.value)
  }
  const [text,setText] = useState("Try a sample value here");
  // settext="type here" ////wrong way
  // settext("type here") ////correct
  return (
    <>
  <div className="container my-3" >
    <div>
      <h2>{"Enter the Text Below"}</h2>
        <div className="MyBox">
          <textarea className="form-control" onChange={handleOnchange} style={{color:props.mode==='dark'?'green':'light'}} value={text} id="MyBox" row="8"></textarea>
    <label htmlFor="MyBox"></label>
  </div>
    </div>
  <button type='button'  className='btn btn.primary mx-2 my-2' onClick={handleUpclick} id='btn1'>Convert to Upper Case</button>
  <button type='button'  className='btn btn.primary mx-2 my-2' onClick={handleDownclick} id='btn1'>Convert to Lower Case</button>
  <button type='button'  className='btn btn.primary mx-2 my-2' onClick={handleClearclick} id='btn1'>Clear</button>
  <button type='button'  className='btn btn.primary mx-2 my-2' onClick={handleCopyclick} id='btn1'>Copy To Clipboard</button>
  <button type='button'  className='btn btn.primary mx-2 my-2' onClick={handleSpacesclick} id='btn1'>Remove Extra Spaces</button>
</div>

<div className="container my-3">
<h2>Your Text Summary</h2>
<p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {(text.length)} letters</p>
<h3>Read Time</h3>
<p>{0.08*(text.split("").filter((element)=>{return element.length !==0}).length)} sec</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter something to Preview it here"}</p>
</div>

</>
)
}
