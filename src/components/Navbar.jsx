import './style/Navbar.css'

function Navbar(){
    return (
        <section className="top-nav">
            <div>
            <a>Mickie</a>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#port">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </section>

    )
}
export default Navbar;