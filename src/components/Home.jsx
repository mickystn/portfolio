
import './style/Home.css'
import hand from '../assets/hand.png'
import proflie from '../assets/proflie.jpg'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Home(){
    return (
        <section className="home" id="home">
            <div className="container">
                <div className="content">
                    <div className="home-main">
                        <div className="home-text">
                            <h1>Hello, I'm</h1>
                            <h2>Sittinan Phattnanun</h2>
                            <h3>Fullstack Developer</h3>
                            <img src={hand}></img>
                            <div className="icon">
                                <IconButton href="https://github.com/mickystn">
                                    <GitHubIcon/>
                                </IconButton>
                                <IconButton href="https://www.linkedin.com/in/sittinan-phattananun-833a08277/">
                                    <LinkedInIcon/>
                                </IconButton>
                            </div>
                            <div className="button">
                                <Button href="#contact" sx={{color: 'black',borderColor: 'black',padding: '10px'}}variant="outlined">Contact me</Button>
                            </div>
                        </div>
                        <div className="home-img">
                            <img src={proflie}></img>
                            <div className="border"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home;