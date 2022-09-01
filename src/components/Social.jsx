function Social({socialElement}){
    return (
        <a href={socialElement.href}>
            <img src={socialElement.TwitterLogo} alt={socialElement.alt} />
        </a>
    )
}

export default Social