import './style/Navbar.css'

function Navbar(){
    return (
        <section class="top-nav">
            <div>
            <a>Mickie</a>
            </div>
            <input id="menu-toggle" type="checkbox" />
            <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>
            </label>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#port">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </section>

    )
}
export default Navbar;