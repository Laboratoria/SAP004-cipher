import cipher from './cipher.js';

document.getElementById("encodeButton").addEventListener("click",getText);
document.getElementById("decodeButton").addEventListener("click",getText);

function getText() {
    
    const textEorD = document.getElementById("insertTextForCD").value;         
    const offsetValue = document.getElementById("insertOffset").value;   
    
    if(document.activeElement.id === "encodeButton"){
               
        document.getElementById("showTextCD").innerHTML = cipher.encode(offsetValue, textEorD);

    }else{        
       
        document.getElementById("showTextCD").innerHTML = cipher.decode(offsetValue, textEorD);

    }

 }