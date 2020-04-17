import cipher from './cipherHacker.js';

document.getElementById("encode-button").addEventListener("click",getText);
document.getElementById("decode-button").addEventListener("click",getText);

document.getElementById("encode-button").addEventListener("mouseover",mouseOverColorE);
document.getElementById("decode-button").addEventListener("mouseover",mouseOverColorD);
 
document.getElementById("encode-button").addEventListener("mouseout",mouseOutColorE);
document.getElementById("decode-button").addEventListener("mouseout",mouseOutColorD);


function getText() {    
    const textEorD = document.getElementById("insert-text-for-cd").value;         
    const offsetValue = Number(document.getElementById("insert-offset").value);   
    
    if(document.activeElement.id === "encode-button"){
               
        document.getElementById("show-text-cd").innerHTML = cipher.encode(offsetValue, textEorD);

    }else{        
        document.getElementById("show-text-cd").innerHTML = cipher.decode(offsetValue, textEorD);
    }
}

function mouseOverColorE() {
    document.getElementById("encode-button").style.backgroundColor = '#fbf7fc';
    document.getElementById("encode-button").style.color = '#626fa6';
    document.getElementById("encode-button").style.border = '#626fa6';
    document.getElementById("encode-button").style.border = '1px solid #626fa6'; 
}

function mouseOverColorD() {     
    document.getElementById("decode-button").style.backgroundColor = '#fbf7fc';
    document.getElementById("decode-button").style.color = '#626fa6';
    document.getElementById("decode-button").style.border = '#626fa6';
    document.getElementById("decode-button").style.border = '1px solid #626fa6'; 
}

function mouseOutColorE() {
    document.getElementById("encode-button").style.backgroundColor = '#626fa6';
    document.getElementById("encode-button").style.color = '#fbf7fc';
    document.getElementById("encode-button").style.border = '1px solid #fbf7fc';   
}

function mouseOutColorD() {
    document.getElementById("decode-button").style.backgroundColor = '#626fa6';
    document.getElementById("decode-button").style.color = '#fbf7fc';
    document.getElementById("decode-button").style.border = '1px solid #fbf7fc';
}