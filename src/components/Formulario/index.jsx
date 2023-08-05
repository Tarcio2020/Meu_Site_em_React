import { useState, useEffect } from "react";

const Formulario = () => {
    const [MateriaA, setMateriaA] = useState(0);
    const [MateriaB, setMateriaB] = useState(0);
    const [MateriaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');



    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('O componente finalizou')
        }
    }, [])

    useEffect(() => {
        console.log('O estado mudou')
    }, [nome])

        
    useEffect(() => {
        console.log('A materia A foi alterada para: ' + MateriaA)
    }, [MateriaA, MateriaB, MateriaC]);






    const alteraNome = (evento) => {
        //console.log(evento.target.value)
        setNome(estadoAnterior => { 
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