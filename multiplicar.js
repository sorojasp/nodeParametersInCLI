const fs= require('fs')


let listarTablas=(base,limite)=>{
  let i=0;
  console.log("este es i: " +i)
  console.log("este es el límite: "+limite)
  while(i<=(limite)){
    console.log(`-${i} * ${base} = ${base*i};`)
    i++
  }
}

let crearArchivo=(base, limite)=>{

    return new Promise ((resolve,reject)=>{

      if (!Number(base)){
        reject ("no es un número")
      }

let data=" ";

for (let i=0; i<=limite; i++){

    data+=`${i} * ${base} = ${base*i}\n;`
    console.log(`-${i} * base = ${base*i};`)
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err)  reject("Error en la creación del archivo");
    resolve(`el archivo de la tabla del ${base} fué creado`);
  });

})

}

module.exports={
  crearArchivo, 
  listarTablas
};