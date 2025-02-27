    let numeroMaximoPosible = 30;
    let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
    let numeroUsuario = 0;
    let intentos = 1;

    console.log(numeroSecreto); 
    //let palabrasVeces = 'vez';
    let maximosIntentos = 3;
        while (numeroUsuario != numeroSecreto){

            numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor:`));

        console.log(typeof(numeroUsuario));

        if (numeroUsuario === numeroSecreto){
            // En esta linea de codigo hacemos uso del operador ternario-
            alert(`Acertastes, el numero es: ${numeroUsuario}. Lo hicistes en ${intentos} ${intentos == 1 ? 'Vez' : 'Veces'}`);
        } else {
            if (numeroUsuario > numeroSecreto){
                alert('El numero secreto es menor');
            } else {
                alert('El numero secreto es mayor');
            }
            // Incrementamos el contador cuando no acierta
            //intentos = intentos +1;
            //intentos += 1;|
            intentos++;
           // palabrasVeces = 'veces'; 
            if (intentos > maximosIntentos){
                alert (`Llegastes al numero maximo de ${maximosIntentos} intentos`);
                break;
            }    

        // alert('Lo siento, no acertastes el numero');
        }

    } 
  
       

   
