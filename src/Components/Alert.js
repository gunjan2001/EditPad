import React from 'react'

function Alert(props) {

    const Capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

   return (
    //this is the way of writing the if else condition see if the first props.alert is null then the div tag is not run at all 
    <div style={{height : "50px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
          <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>} {/* here we have to add the {} because we have directly write the js props.alert so thats why */}
    </div>
  )
}

export default Alert