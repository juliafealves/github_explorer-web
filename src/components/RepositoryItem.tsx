import {RepositoryType} from "../types/RepositoryType";

interface RepositoryItemProps {
    repository: RepositoryType
}
export function RepositoryItem(props: RepositoryItemProps) {
    const { name, description, html_url } = props.repository;
    return(
        <li>
            <strong>{name}</strong>
            <p>{description}</p>
            <a href={html_url}>Access repository</a>
        </li>
    );
}