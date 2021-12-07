export function RepositoryItem({ repository }) {
    const { name, description, link } = repository;
    return(
        <li>
            <strong>{name}</strong>
            <p>{description}</p>
            <a href={link}>Access repository</a>
        </li>
    );
}