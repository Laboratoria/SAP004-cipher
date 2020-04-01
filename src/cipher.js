const cipher = {
    
  encode: function(offset, stringInput) {
    
    let stringOutput = [];
    for(let i = 0; i < stringInput.length; i++) {
        let x = Number(offset);
        let y = (stringInput.charCodeAt(i));      
        let z = ((((y - 65) + x) % 26) + 65);
        stringOutput.push(String.fromCharCode(z));
    }
    let encodedText = stringOutput.join('');  
    
    return encodedText; 
            
  },

  decode: function(offset, stringInput) {
    
    let stringOutput = [];       
    for(let i = 0; i < stringInput.length; i++) {
        let x = Number(offset);
        let y = (stringInput.charCodeAt(i));      
        let z = ((((y + 65) - x) % 26) + 65);
        stringOutput.push(String.fromCharCode(z));
    }
    let decodedText = stringOutput.join('');
    
    return decodedText;
  }

 };
  
  export default cipher;