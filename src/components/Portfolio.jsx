import './style/Portfolio.css'
import forexBG from '../assets/forex.png';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import img1 from '../assets/advice.png'
import img2 from '../assets/chart.png'
import img3 from '../assets/forex.png'
import img4 from '../assets/numer.png'


const data=[
    {
        name:"Buffet EA Project",
        emo:"🎇",
        github:"https://github.com/mickystn/Senior-project-EA",
        web:"https://ea-project-frontend.vercel.app/",
        des:"พัฒนา Expert Advisor และเว็บไซต์สำหรับผู้ใช้เพื่อเก็บข้อมูลการเทรดฟอเร็กซ์ของผู้ใช้งาน",
        stack:"React/Nodejs/MySQL/MQL4",
        img:img3,
     },
    {
       name:"Numerical Project",
       github:"https://github.com/mickystn/numerical_method",
       emo:"📚",
       web:"https://numerical-method-frontend.vercel.app/",
       des:"พัฒนาเว็บไซต์สำหรับใช้งานในวิชา Numerical Method",
        stack:"React/Nodejs",
       img:img4,
    },
     {
        name:"Chart data Project",
        github:"https://github.com/mickystn/treedemo",
        emo:"📊",
        des:"พัฒนาเว็บไซต์สำหรับแสดงข้อมูลจากเจสันไฟล์ในรูปแบบแผนภูมิ",
        stack:"React",
        web:"",
        img:img2,
     },
     {
        name:"Clone Advice Project",
        github:"https://github.com/mickystn/copyadvice",
        emo:"🏆",
        des:"จำลองเว็บไซต์ Advice เพื่อศึกษาการใช้งานร่วมกับฐานข้อมูล",
        stack:"HTML/CSS/Php/MySQL",
        web:"",
        img:img1,
     },
     
]
function isAvalible(data){
    if(data.length>1){
        return (
            <IconButton  href={data}>
                <RemoveRedEyeIcon fontSize="large" className="icon"/>
            </IconButton>
        )
    }
}
function Portfolio(){0
    return (
        <section className="Portfolio" id="port">
            <div className="container-p">
                <div className="content-port">
                    <h1  className='port-text-h1'>Portfolio</h1>
                    <div className="port-grid">
                        {data.map((data)=>{
                            return (
                                <div className="port">
                                    <div className="port-img">
                                        <a href="#"><img src={data.img}/></a>
                                    </div>
                                    <div className="port-text">
                                        <h1 className="port-text-title">{data.name +data.emo}</h1>
                                        <p className="port-text-detail">
                                            {data.des}
                                        </p>
                                        <h1 className="port-text-stack">{data.stack}</h1>
                                        <div className="port-button-group">
                                            <IconButton href={data.github}>
                                                <GitHubIcon  fontSize="large" className="icon"/>
                                            </IconButton>
                                            {isAvalible(data.web)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;