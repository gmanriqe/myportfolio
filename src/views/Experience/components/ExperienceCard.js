const ExperienceCard = ({ elem }) => {
    return (
        <div className='card-experience'>
            <h6>{elem.business} <em>{(elem.business_type.length > 0) ? `- ${elem.business_type}` : ''}</em></h6>
            <p>{elem.duration}</p>
            <span>{elem.profile}</span>
        </div>
    )
}

export default ExperienceCard