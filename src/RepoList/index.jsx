import { useEffect, useState } from "react";

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
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Nome:</b> {repositorio.name} <br />
                    <b>Linguagem</b> {repositorio.language} <br />
                    <a target="_blank" href={repositorio.html_url}>Visitar no meu Github</a> <br />
                </li>
            ))}
            <li>Repositório</li>
        </ul>
    </>
    )
}

export default ReposList;