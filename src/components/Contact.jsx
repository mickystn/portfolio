import './style/Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Contact(){
    return (
        <section className="contact" id="contact">
            <div className="container-c">
                <div className="content-contact">
                    <h1 className='content-header'>Contact</h1>
                    <div className="contact-group">
                        <div className="contact-icon-box">
                            <span>
                                <EmailIcon fontSize='large'  sx={{color:"#0077C0"}}/>
                            </span>
                            <div className="contact-info">
                                <h3>Email</h3>
                                <p>sittinan.p10@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-icon-box">
                            <span>
                                <LocalPhoneIcon fontSize='large' sx={{color:"#0077C0"}}/>
                            </span>
                            <div className="contact-info">
                                <h3>Phone</h3>
                                <p>+66957414383</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;