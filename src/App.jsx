
import { useState } from 'react';


import Perfil from './components/Perfil';
import Formulario from './components/Formulario';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return (
    <>
      <Perfil nome='Tarcio' endereco='https://github.com/Tarcio2020.png' />

      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>toggle form</button>
    </>
  )
}

export default App
