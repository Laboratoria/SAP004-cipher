const cipher = {
    
    encode: function(offset, stringInput) {

        if (offset == "" || typeof stringInput !== "string") {
            throw new TypeError('Insira o número do offset ou confira que seu texto não tenha caracteres especiais');
        }
            
        let stringOutput = [];
     
        for(let i = 0; i < stringInput.length; i++) {
            
            if(stringInput.charCodeAt(i) >= 65 && stringInput.charCodeAt(i) <= 90){                
                let x = Math.abs(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y - 65) + x) % 26) + 65);
              stringOutput.push(String.fromCharCode(z));
              
            }else if(stringInput.charCodeAt(i) >= 97 && stringInput.charCodeAt(i) <= 122){
                let x = Math.abs(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y - 97) + x) % 26) + 97);
                stringOutput.push(String.fromCharCode(z));
            }else{
                stringOutput.push(String.fromCharCode(stringInput.charCodeAt(i)));  
            }            
        }
        let encodedText = stringOutput.join('');  
        
        return encodedText; 
    
              
    },
  
    decode: function(offset, stringInput) {

        if (offset == "" || typeof stringInput !== "string") {
            throw new TypeError('Insira o número do offset ou confira que seu texto não tenha caracteres especiais');
        }
      
        let stringOutput = [];       
        for(let i = 0; i < stringInput.length; i++) {
    
            if(stringInput.charCodeAt(i) >= 65 && stringInput.charCodeAt(i) <= 90){
                let x = Math.abs(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y + 65) - x) % 26) + 65);
                stringOutput.push(String.fromCharCode(z));
            
            }else if(stringInput.charCodeAt(i) >= 97 && stringInput.charCodeAt(i) <= 122){
                let x = Math.abs(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y - 122) - x) % 26) + 122);
                stringOutput.push(String.fromCharCode(z)); 
            }else{        
                stringOutput.push(String.fromCharCode(stringInput.charCodeAt(i)));  
            }       
        }
        let decodedText = stringOutput.join('');
        
        return decodedText;
      }
  
   };
    
    export default cipher;