const ProjectCard = ({ elem }) => {
    return (
        <a href={elem.link} target='_blank' title={elem.title} rel="noreferrer">
            <figure>
                <img src={elem.image_URL} alt={elem.description}></img>
                <figcaption><small>{elem.marca}</small></figcaption>
            </figure>
        </a>
    )
}

export default ProjectCard;