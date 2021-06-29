import React from 'react'
import img1 from '../images.jpeg'
import img2 from '../download.jpeg'
import './skill.css'
import img3 from '../HackerRank_logo.png'
const Skill = () => {
    return (
        <div className="skill" id="skill">
        <div className="text-center">
            <hr/>
            <h1>Skill Rating</h1>
            <div class="container">
                <div class="row">
                <div class="col">
                    <img src={img1} width="30%" hieght="30%"/>
                    <br className="work"/>
                    <h4>Data structure</h4>
                    <button className="btn btn-secondary"><a className="name" href="https://www.udemy.com/certificate/UC-f3840008-d6d1-4b67-8529-c645bf34a5a9/" >Get Certificate</a></button>
                </div>
                <div class="col">
                    <img src={img2} width="30%" hieght="30%"/>
                    <br className="work"/>
                    <h4>Html 5</h4>
                    <button className="btn btn-secondary"><a className="name" href="https://www.coursera.org/account/accomplishments/records/E7KJ6ZUPWK4B" >Get Certificate</a></button>
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <img src={img2} width="30%" hieght="30%"/>
                    <br className="work"/>
                    <h4>Python</h4>
                    <button className="btn btn-secondary"><a className="name" href="https://www.coursera.org/account/accomplishments/verify/8W5VSUURXUD2" >Get Certificate</a></button>
                </div>
                <div class="col">
                <img src={img3} width="30%" hieght="30%"/>
                    <br className="work"/>
                    <h4>HackerRank Badges</h4>
                    <button className="btn btn-secondary"><a className="name" href="https://www.hackerrank.com/2405rounaktak" >View Badges</a></button>
                </div>
            </div>
            <hr/>
            <br/>
            
        </div>
        </div>
        </div>
    )
}

export default Skill;
