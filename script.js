const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
   
    document.getElementById('mostar').style.display='flex';
    document.getElementById('no-mostar').style.display='none';

  
    if (textArea.value == "") {  
        document.getElementById('mostar').style.display='none';
        document.getElementById('no-mostar').style.display='block' ;
       
    }

    //textArea.value = "";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length ; i++) {
        
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado

}

function botonDesencriptar() {
    const textodesncriptado = desencriptar(textArea.value)
    mensaje.value = textodesncriptado;
    
    
    document.getElementById('mostar').style.display='flex';
    document.getElementById('no-mostar').style.display='none';

        if (textArea.value == "") {  
            document.getElementById('mostar').style.display='none';
            document.getElementById('no-mostar').style.display='block' ;
        
        }
  //  textArea.value = "";
}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptada
    
}

function copiarResultado() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => console.log("Texto copiado"))

       
     
        
}

