const cipher = {
    
    encode: function(offset, stringInput) {

        if (offset == "" || typeof stringInput !== "string") {
            throw new TypeError('Insira o número do offset');
        }
            
        let stringOutput = [];
     
        for(let encodeIn of stringInput) {
            
            if(encodeIn.charCodeAt() >= 65 && encodeIn.charCodeAt() <= 90){  
                                  
                const z = (((((encodeIn.charCodeAt()) - 65) + Math.abs(offset)) % 26) + 65);
                stringOutput.push(String.fromCharCode(z));
              
            }else if(encodeIn.charCodeAt() >= 97 && encodeIn.charCodeAt() <= 122){  

                const z = (((((encodeIn.charCodeAt()) - 97) + Math.abs(offset)) % 26) + 97);
                stringOutput.push(String.fromCharCode(z));
            }else{
                stringOutput.push(String.fromCharCode(encodeIn.charCodeAt()));  
            }            
        }   
        let encodedText = stringOutput.join('');  
        
        return encodedText;           
    },
  
    decode: function(offset, stringInput) {

        if (offset == "" || typeof stringInput !== "string") {
            throw new TypeError('Insira o número do offset');
        }
      
        let stringOutput = [];       
        
        for(let decodeOut of stringInput) {
    
            if(decodeOut.charCodeAt() >= 65 && decodeOut.charCodeAt() <= 90){
                
                const z = (((((decodeOut.charCodeAt()) + 65) - Math.abs(offset)) % 26) + 65);
                stringOutput.push(String.fromCharCode(z));
            
            }else if(decodeOut.charCodeAt() >= 97 && decodeOut.charCodeAt() <= 122){

                const z = (((((decodeOut.charCodeAt()) - 122) - Math.abs(offset)) % 26) + 122);
                stringOutput.push(String.fromCharCode(z)); 
            }else{        
                stringOutput.push(String.fromCharCode(decodeOut.charCodeAt()));  
            }       
        }
        let decodedText = stringOutput.join('');
        
        return decodedText;
      }
   };
    
    export default cipher;











    /*

    const cipher = {
    
    encode: function(offset, stringInput) {

        if (offset == "" || typeof stringInput !== "string") {
            throw new TypeError('Insira o número do offset');
        }
            
        let stringOutput = [];
     
        for(let i = 0; i < stringInput.length; i++) {
            
            if(stringInput.charCodeAt(i) >= 65 && stringInput.charCodeAt(i) <= 90){  
                                  
                const z = (((((stringInput.charCodeAt(i)) - 65) + Math.abs(offset)) % 26) + 65);
                stringOutput.push(String.fromCharCode(z));
              
            }else if(stringInput.charCodeAt(i) >= 97 && stringInput.charCodeAt(i) <= 122){  

                const z = (((((stringInput.charCodeAt(i)) - 97) + Math.abs(offset)) % 26) + 97);
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
            throw new TypeError('Insira o número do offset');
        }
      
        let stringOutput = [];       
        
        for(let i = 0; i < stringInput.length; i++) {
    
            if(stringInput.charCodeAt(i) >= 65 && stringInput.charCodeAt(i) <= 90){
                
                const z = (((((stringInput.charCodeAt(i)) + 65) - Math.abs(offset)) % 26) + 65);
                stringOutput.push(String.fromCharCode(z));
            
            }else if(stringInput.charCodeAt(i) >= 97 && stringInput.charCodeAt(i) <= 122){

                const z = (((((stringInput.charCodeAt(i)) - 122) - Math.abs(offset)) % 26) + 122);
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

    */