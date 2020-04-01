const cipher = {
    
  encode: function(offset, stringInput) {
    
    let stringOutput = [];
    for(let i = 0; i < stringInput.length; i++) {
        let x = Number(offset);
        let y = (stringInput.charCodeAt(i));      
        let z = ((((y - 65) + x) % 25) + 65);
        stringOutput.push(String.fromCharCode(z));
    }
    let encodedText = stringOutput.join('');  
    alert(encodedText);
    return encodedText; 
            
  },

  decode: function(offset, stringInput) {
    
    let stringOutput = [];       
    for(let i = 0; i < stringInput.length; i++) {
        let x = Number(offset);
        let y = (stringInput.charCodeAt(i));      
        let z = ((((y - 65) - x) % 25) + 65);
        stringOutput.push(String.fromCharCode(z));
    }
    let decodedText = stringOutput.join('');
    alert(decodedText);
    return decodedText;
  }

 };
  
  export default cipher;