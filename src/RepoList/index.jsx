import { useEffect, useState } from "react";
import styles from './ReposList.module.css'



const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setCarregando] = useState(true)

    useEffect(() => {
        fetch('https://api.github.com/users/Tarcio2020/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setCarregando(false)
                setRepos(resJson);
            }, 5000)
        })
    }, []);


    return (
    <>
        {estaCarregando && (
            <h1>Carregando...</h1>  
        )}
        <ul>
            {repos.map(({id, name, language, html_url}) => (
                <li key={id}>
                    <b>Nome:</b> {name} <br />
                    <b>Linguagem</b> {language} <br />
                    <a target="_blank" href={html_url}>Visitar no meu Github</a> <br />
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    </>
    )
}

export default ReposList;