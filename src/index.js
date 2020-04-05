import cipher from './cipherHacker.js';

document.getElementById("encodeButton").addEventListener("click",getText);
document.getElementById("decodeButton").addEventListener("click",getText);

document.getElementById("encodeButton").addEventListener("mouseover",mouseOverColorE);
document.getElementById("decodeButton").addEventListener("mouseover",mouseOverColorD);

document.getElementById("encodeButton").addEventListener("mouseout",mouseOutColorE);
document.getElementById("decodeButton").addEventListener("mouseout",mouseOutColorD);


function getText() {
    
    const textEorD = document.getElementById("insertTextForCD").value;         
    const offsetValue = document.getElementById("insertOffset").value;   
    
    if(document.activeElement.id === "encodeButton"){
               
        document.getElementById("showTextCD").innerHTML = cipher.encode(offsetValue, textEorD);

    }else{        
       
        document.getElementById("showTextCD").innerHTML = cipher.decode(offsetValue, textEorD);

    }

 }

 function mouseOverColorE() {
    document.getElementById("encodeButton").style.backgroundColor = '#fbf7fc';
    document.getElementById("encodeButton").style.color = '#626fa6';
    document.getElementById("encodeButton").style.border = '#626fa6';
    document.getElementById("encodeButton").style.border = '1px solid #626fa6'; 
 }

 function mouseOverColorD() {     
    document.getElementById("decodeButton").style.backgroundColor = '#fbf7fc';
    document.getElementById("decodeButton").style.color = '#626fa6';
    document.getElementById("decodeButton").style.border = '#626fa6';
    document.getElementById("decodeButton").style.border = '1px solid #626fa6'; 
 }


function mouseOutColorE() {
    document.getElementById("encodeButton").style.backgroundColor = '#626fa6';
    document.getElementById("encodeButton").style.color = '#fbf7fc';
    document.getElementById("encodeButton").style.border = '1px solid #fbf7fc';   
}

function mouseOutColorD() {
    document.getElementById("decodeButton").style.backgroundColor = '#626fa6';
    document.getElementById("decodeButton").style.color = '#fbf7fc';
    document.getElementById("decodeButton").style.border = '1px solid #fbf7fc';
}