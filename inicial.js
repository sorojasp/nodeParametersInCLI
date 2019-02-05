/** CON ESTE PROYECTO LO QUE SE BUSCA ES INSERTAR PARAMETROS DE FUNCIONES POR 
 * CONSOLA
 * 
 * En este ejemplo lo que se busca es generar un archivo de la tabla de multiplicar
 * teniendo como parametro de entada la base y el límite(hasta cuál número queremos
 * que se imprima en pantalla y que se genere). 
 */


const fs =require('fs')
let multi = require ('./multiplicar');
var argvYargs = require ("yargs")//yargs es una librería que se usa para validar lo que se ingresa por pantalla. 
const colors = require ("colors")



.command('listar','Imprimir en consola la tabla de multiplicar',{
    base:{
        demand:true,
        alias:"b"
    },
    limite:{
        demand:false,
        alias:"l"
    }
})

.command('crear','Imprimir en consola la tabla de multiplicar',{
    base:{
        demand:true,
        alias:"b"
    },
    limite:{
        demand:false,
        alias:"l"
    }
})




.help()//Con esto el yargs genera una ayuda que se activa de la siguiente manera:
//      *** node nombreDelArchivo  --help ***
 

          
console.log(argvYargs.argv)
console.log(`Este es el argv por defecto: ${process.argv}`)
console.log(argvYargs.argv._[0])
let comando=argvYargs.argv._[0]




switch(comando){
    case "listar":
    multi.listarTablas(argvYargs.argv.base,argvYargs.argv.limite)
    break;

    case "crear":
    
    multi.crearArchivo(argvYargs.argv.base,argvYargs.argv.limite)
    .then(result=>console.log(`${result}`))
    .catch(error =>console.log(error))
    //console.log(module)
    break

    default:
    console.log("comando no reconocido");
    break
}







/**
 * Parametro se ingresa por consola de la siguiente forma:
 *     node nombreDelArchivo --variable=valor
 * En este caso el parametro del que se esta hablando es la base de los números.
 */



