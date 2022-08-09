import logo from "./logo.png"
export default function Header(){
    return(
    
    <nav className="navbar is-max-desktop" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/#">
                <img src={logo} alt=""></img>
                <h1>Combustivel Portugal</h1>
            </a>
        </div>
    </nav>
    )
}