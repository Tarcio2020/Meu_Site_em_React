import './index.css';

const Perfil = () => {
    const usuario = {
        nome: 'Tarcio Teles',
        avatar: 'https://github.com/Tarcio2020.png',
    
    }

    return (
        <div>
            <img className='perfil-avatar' src={usuario.avatar}/>
            <h3 className='perfil-titulo'>{usuario.nome}</h3>
        </div>
    )
}

export default Perfil;



