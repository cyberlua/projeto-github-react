import { useEffect, useState } from "react"
import Axios from 'axios'
import Subtitle from "./Subtitle"
import Text from "./Text"

import { DiGithubBadge } from "react-icons/di";

const Search = () => {
    const [reposFromApi, setReposFromApi] = useState([]);
    const [search, setSearch] = useState('')
    const [reposFiltered, setReposFiltered] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await Axios.get(`https://api.github.com/users/cyberlua/repos`);
                setReposFromApi(response.data);
            } catch (err) {
                console.error("Erro capturado: " + err);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        setReposFiltered(reposFromApi.filter(item => {
            return item.name.includes(search)
        }))
    }, [search, reposFromApi])

    function handleSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="main">
                <input className="contentInput" onChange={handleSearch} placeholder="digite um repo" />
                <div className="card-container" >
                    {reposFiltered.map(repo =>
                        <div className="card" key={repo.id}>
                            <Subtitle className="title" text={repo.name} />
                            <Text className="paragraph" content={repo.description} />
                            <a className="enter-repo" href={repo.html_url} target="_blank" rel="noreferrer">
                                <DiGithubBadge size={30} color="000" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Search
