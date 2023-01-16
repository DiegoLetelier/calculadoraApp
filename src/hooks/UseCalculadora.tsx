import {useState, useRef} from 'react';


enum Operadores {
    sumar, restar, multiplicar, dividir
   }
   

export const UseCalculadora = () => {
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    };

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // punto decimal
            if (numeroTexto === '.') {
                setNumero (numero + numeroTexto)
            // evaluar si es otro cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);
            // evaluar si es diferente de cero y no tiene punto
            } else if (numeroTexto !== '0' && !numero.includes('.')){
                setNumero(numeroTexto)
            // evitar 0000.0 
            }else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }


        } else {
            setNumero(numero + numeroTexto);
        }
    };
    const negativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else if (numero === ('0')) {
            setNumero( numero);
        } else {
            setNumero ('-' + numero)
        }
    };

    const btnDel = () => {
    
        setNumero(numero.slice(0, -1))

        if (numero.length === 2 && numero.includes("-")) {
   
             setNumero("0")
   
        } else if (numero.length === 1) {
   
             setNumero("0")
   
        }
    
        // outro: 

        // let negativo = '' ;
        // let numeroTemp = numero;

        // if (numero.includes('-')) {
        //     negativo = '-';
        //     numeroTemp = numero.substr(1)
        
        // }if (numeroTemp.length > 1) {
        //     setNumero (negativo + numeroTemp.slice(0,-1))
        // }else {
        //     setNumero('0')
        // }

    }

    const pasarNumeroArriba = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1))
            
        } else {
            setNumeroAnterior(numero);
            
        }
        setNumero('0')
    
    }

    const btnDividir = () => {
        
        pasarNumeroArriba();
        ultimaOperacion.current = Operadores.dividir;

    }

    const btnMultiplicar = () => {
        
        pasarNumeroArriba();
        ultimaOperacion.current = Operadores.multiplicar;

    }
    const btnRestar = () => {
        
        pasarNumeroArriba();
        ultimaOperacion.current = Operadores.restar;

    }
    const btnSumar = () => {
        
        pasarNumeroArriba();
        ultimaOperacion.current = Operadores.sumar;

    }

    const calcular = () => {
        const num1 = Number (numero)
        const num2= Number (numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
            setNumero(`${num1 + num2 }`);
                break;
             case Operadores.multiplicar:
            setNumero(`${num1 * num2 }`);
                break;
            case Operadores.restar:
            setNumero(`${num2 - num1 }`);
                break;
             case Operadores.dividir:
                if (num1 === 0 && num2 === 0){
                    setNumero('0')
                }else  setNumero(`${num2 / num1 }`);
           
                break;
            default:
                break;
        }
        
        setNumeroAnterior ('0')
        
    }
  
    return {calcular, 
     limpiar, 
     armarNumero, 
     negativo, 
     btnDel, 
     btnDividir,
      btnMultiplicar,
     btnRestar, 
     btnSumar, 
     numeroAnterior,
        numero}
                     
        
}

