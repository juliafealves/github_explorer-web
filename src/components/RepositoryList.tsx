import {RepositoryItem} from "./RepositoryItem";
import '../styles/repositories.scss';
import {useEffect, useState} from "react";
import {RepositoryType} from "../types/RepositoryType";

export function RepositoryList() {
    const [repositories, setRepositories] = useState<RepositoryType[]>([]);
    useEffect(() => {
        fetch('https://api.github.com/users/juliafealves/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </section>
    );
}