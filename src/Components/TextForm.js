import React,  {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("UpperCase was clicked")
        let newtext = text.toUpperCase()
        setText(newtext)
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }

    const handleDownClick = () => {
        let newDownText = text.toLowerCase()
        setText(newDownText)
    }

    const handleClearClick = () => {
        let newtext = " "
        setText(newtext)
    }
    
    const handleCopyClick = () => {
        let newText = document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('');
    
  return (
      <>
      <div className = "container" style={{ color: props.mode === 'dark'?'white':'#042723'}} >
        <h3>{props.heading} </h3>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'black':'white' }} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{ color: props.mode === 'dark'?'white':'#042723'}}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview "}</p>
    </div>
      </>
    
  )
}
