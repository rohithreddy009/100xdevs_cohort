export function Profile({name, title, image, bio}) {
    return <div className="profile-card">
        <img src={image} style={{width:"200px", height:"200px"}}></img>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <h3>{bio}</h3>
    </div>
}


