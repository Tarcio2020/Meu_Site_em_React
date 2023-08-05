
import { useState } from 'react';


import Perfil from './components/Perfil';
import Formulario from './components/Formulario';
import ReposList from './RepoList';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return (
    <>
      <Perfil nome='Tarcio' endereco='https://github.com/Tarcio2020.png' />
      <ReposList /> 

{/*
      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>toggle form</button>
    */}
    </>
  )
}

export default App
