import React, {useState} from 'react'

export default function TextFrom(props) {

    
    // //word count
    // const countWord = () =>{
    //     return text.split(' ').filter(a => a.trim()).length;
    // }

    //handle extra spaces
    const handleExtraSpace = () =>{
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed","success");
    }

    //copy text
    const handleCopy = ()=>{
        // let newText = document.getElementById("mybox");
        // newText.select();
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to ClipBoard","success");
        // document.getSelection().removeAllRanges();
    }

    //find and replce
    const handleFindChange = (event) => {
        findWord(event.target.value) ;
    };

    const handleReplaceChange = (event) => {
        replaceWord(event.target.value);
    };

    const handleReplaceClick = ()=>{
        let newText = text.replaceAll(fWord,rWord);
        setText(newText);
        props.showAlert("Text Is Replaced With New Text","success");
    }


    //capitalize the each word
    const handleCzClick = ()=>{
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("All Text Is Converted To CamelCase","success");
    }


    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = "";
        findWord(newText)
        replaceWord(newText)
        setText(newText)
        props.showAlert("Cleared","success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("All Text Is Converted To Small","success");
    }

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("All Text Is Converted To Capital","success");
    }
    
    const onChangehandle = (event)=>{
        // console.log("change");
        setText(event.target.value)
    }
    
    const [text, setText] = useState("");
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");
    
  return (
    <>
    <div className = "container" style={{color: props.mode==='dark'?'white':'#010c14'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3" > 
            <textarea className="form-control" value={text} onChange={onChangehandle} style={{backgroundColor: props.mode==='dark'?'#010c14':'white', 
            color: props.mode==='dark'?'white':'#010c14'}} id="mybox" rows="8" placeholder="Enter text"></textarea>
            <textarea className="form my-2" value={fWord} onChange={handleFindChange}  style={{backgroundColor: props.mode==='dark'?'#010c14':'white', 
            color: props.mode==='dark'?'white':'#010c14'}}  id="mybox1" rows="1" placeholder="Enter find text"></textarea>
            <textarea className="form my-2 mx-2"  value={rWord} onChange={handleReplaceChange}  style={{backgroundColor: props.mode==='dark'?'#010c14':'white', 
            color: props.mode==='dark'?'white':'#010c14'}} id="mybox2" rows="1" placeholder="Enter replace text"></textarea>
        </div>
        
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCzClick}>Convert To Capitalized</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleReplaceClick}>Find & Replace</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#010c14'}}> 

        <h2>Summary</h2>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Read time: {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}