import React, { useState } from "react"

function Divisa(){

    const cambios=[
        {
          divisas: "Euro",
          cambio:1,
        },{
          divisas: "Peso argentino",
          cambio:118.6,
        },{
          divisas: "Peso colombiano",
          cambio:4543.5,
        }
    ]
    const [cantidad, SetCantidad]=useState(0)
    const [resultado1, Setresultado1]=useState(0)
    const [resultado2, Setresultado2]=useState(0)
    const [resultado3, Setresultado3]=useState(0)
    const modificar=(e)=>{
        SetCantidad(e.target.value);
        Setresultado1(e.target.value*cambios[1].cambio);
        Setresultado2(e.target.value*cambios[2].cambio);
        Setresultado3(e.target.value*cambios[3].cambio);
    
      }
return(
    <div>
        <label htmlFor="u0">{cambios[0].moneda}</label>
        <input id="u0" type="number" value={cantidad} onChange={modificar}/> 

        <label htmlFor="u1">{cambios[1].moneda}</label>
        <input id="u1" type="number" value={resultado1}  /> 

        <label htmlFor="u2">{cambios[2].moneda}</label>
        <input id="u2" type="number" value={resultado2}  /> 

        <label htmlFor="u3">{cambios[2].moneda}</label>
        <input id="u3" type="number" value={resultado3}  /> 

    </div>
)

}


export default Divisa;