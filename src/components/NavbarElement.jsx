function NavbarElement ({element}) {
    return (
        <div className="single-label-container">
        <a className="label-link" href={element.link}></a>
        <div className="label">{element.label}</div>
      </div>
    )
}

export default NavbarElement