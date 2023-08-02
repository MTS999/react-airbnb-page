import airbnb from "/images/airbnb-logo.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="navbar--logo" src={airbnb} alt="airbnb logo" />
            
        </nav>
    )
}