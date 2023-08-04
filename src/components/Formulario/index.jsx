import { useState } from "react";

const Formulario = () => {
    let [MateriaA, setMateriaA] = useState(0);
    let [MateriaB, setMateriaB] = useState(0);
    let [MateriaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        setNome(estadoAnterior => { 
            console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = MateriaA + MateriaB + MateriaC;
        const media = soma / 3;

        if(media > 6){
            return(
                <p>Olá {nome}, foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota da Matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da Matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota da Matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
             {/* 
            {MateriaA}
            {MateriaB}
            {MateriaC}
            */}
        </form>
    )

}

export default Formulario