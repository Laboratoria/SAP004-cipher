import cipher from './cipher.js';

document.getElementById("encodeButton").addEventListener("click",getText);
document.getElementById("decodeButton").addEventListener("click",getText);

function getText() {
    
    const textEorD = document.getElementById("insertTextForCD").value;         
    const offsetValue = document.getElementById("insertOffset").value;   
    //alert(textEorD);
    //alert(offsetValue);

    if(document.activeElement.id === "encodeButton"){

        alert("Encode");

        //let encodeA = cipher.encode(offsetValue, textEorD);
        //alert(encodeA);

        //alert(textEorD);
        //alert(offsetValue);
        document.getElementById("showTextCD").innerHTML = cipher.encode(offsetValue, textEorD);

    }else{

        alert("Decode");

        //let decodeA = cipher.decode(offsetValue, textEorD);
        //alert(decodeA);

        //alert(textEorD);
        //alert(offsetValue);
        document.getElementById("showTextCD").innerHTML = cipher.decode(offsetValue, textEorD);

    }

 }