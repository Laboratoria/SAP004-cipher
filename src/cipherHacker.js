const cipher = {
    
    encode: function(offset, stringInput) {
          
        let stringOutput = [];
     
        for(let i = 0; i < stringInput.length; i++) {
            
            if(stringInput.charCodeAt(i) >= 65 && stringInput.charCodeAt(i) <= 90){
                let x = Number(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y - 65) + x) % 26) + 65);
              stringOutput.push(String.fromCharCode(z));
            }else{
                let x = Number(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y - 97) + x) % 26) + 97);
                stringOutput.push(String.fromCharCode(z));
            }            
        }
        let encodedText = stringOutput.join('');  
        
        return encodedText; 
              
    },
  
    decode: function(offset, stringInput) {
      
        let stringOutput = [];       
        for(let i = 0; i < stringInput.length; i++) {
    
            if(stringInput.charCodeAt(i) >= 65 && stringInput.charCodeAt(i) <= 90){
                let x = Number(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y + 65) - x) % 26) + 65);
                stringOutput.push(String.fromCharCode(z));
            }else{
                let x = Number(offset);
                let y = (stringInput.charCodeAt(i));      
                let z = ((((y + 97) - x) % 26) + 97);
                stringOutput.push(String.fromCharCode(z)); 
            }        
        }
        let decodedText = stringOutput.join('');
        
        return decodedText;
      }
  
   };
    
    export default cipher;