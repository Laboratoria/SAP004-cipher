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


































/*

 ASC

"A".charCodeAt(0)

 A = 65
 Z = 90

 Fórmula para Cifra

 (codigoDaLetraOriginal + deslocamento) % tamDoAlfabeto

 ((codigoDaLetraASC - cod1aLetra + deslocamente) % tamDoAlfabeto) + cod1aLetra 

 (stringInput.charCodeAt(i) - 97 + offset) % 25) + 97;

(("STRING".charCodeAt(posiçãoDaString) - 65 + offset) % 25) + 65


codigoASC => codigo0a15 => deslocamento => giro => codigoASC


 A   B   C   D   E   F   G   H   I   J   K   L   M   N   O   P   Q   R   S   T   U   V   W   X   Y   Z  
 65 66  67  68  69  70  71  72   73  74  75  76  77  78  79  80  81  82  83  84  85  86  87  88  89  90

*/
  