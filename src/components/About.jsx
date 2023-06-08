import './style/About.css'
import proflie from '../assets/aboutme.jpg'

import nodejsLogo from '../assets/nodejs.png'
import reactLogo from '../assets/react.png'
import htmlLogo from '../assets/html.png'
import cssLogo from '../assets/css.png'
import mysqlLogo from '../assets/mysql.png'
import phpLogo from '../assets/php.png'
import jsLogo from '../assets/js.png'

function About(){
    return(
        <section className="about" id="about">
            <div className="container-a">
                <div className="content-about">
                    <div className='about-detail'>
                        <div className="about-img">
                            <img src={proflie}></img>
                        </div>
                        <div className='about-text'>
                            <h1  className='about-text-h1'>About me</h1>
                            <h2 className='about-text-h2'>- Junior Fullstack Developer</h2>
                            <p className='about-text-p'>
                            สวัสดีครับผมนายสิทธินันท์ พัฒนานันท์ชื่อเล่นมิกกี้เป็นนักศึกษาจบใหม่จากมหาวิทยาลัยพระจอมเกล้าพระนครเหนือ 
                            <br/>สาขาวิทยาการคอมพิวเตอร์
                            เริ่มเขียนภาษาซีเป็นภาษาแรกชอบ<br/>การเขียนโปรแกรมและการแก้ไขปัญหา
                            </p>
                            <div className="about-text-detail">
                                <h2 className='at-detail-h2'>- Education</h2>
                                <p className='at-detail-p'>King Mongkut's University of Technology North Bangkok</p>
                                <h2 className='at-detail-h2'>- Email</h2>
                                <p className='at-detail-p'>sittinan.p10@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-skill">
                        <h1>Technical Skills</h1>
                        <div className="logos">
                            <div className="logos-slide">
                                <img src={htmlLogo} height="70px" width="70px"/>
                                <img src={cssLogo} height="70px" width="70px"/>
                                <img src={jsLogo} height="70px" width="70px"/>
                                <img src={reactLogo} height="70px" width="70px"/>
                                <img src={nodejsLogo} height="70px" width="70px"/>
                                <img src={mysqlLogo} height="70px" width="70px"/>
                                <img src={phpLogo} height="70px" width="70px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

/*

                        <div className="slider">
                            <div className="slide-track">
                                <div className="slide">
                                    <img src={htmlLogo} height="70px" width="70px"/>
                                </div>
                                <div className="slide">
                                    <img src={cssLogo} height="70px" width="70px"/>
                                </div>
                                <div className="slide">
                                    <img src={jsLogo} height="70px" width="70px"/>
                                </div>
                                <div className="slide">
                                    <img src={reactLogo} height="70px" width="70px"/>
                                </div>
                                <div className="slide">
                                    <img src={nodejsLogo} height="70px" width="70px"/>
                                </div>
                                <div className="slide">
                                    <img src={mysqlLogo} height="70px" width="70px"/>
                                </div>
                                <div className="slide">
                                    <img src={phpLogo} height="70px" width="70px"/>
                                </div>
                            </div>
                        </div>
*/
export default About;