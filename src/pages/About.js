import React from 'react'
import './style.css'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
export default function About() {
    return (

        <div className="about">
            <h3 className="h"> This website is about sport's news.You will get all kind of sport's news here.</h3>
            <br />
            <br />
            <div style={{ textAlign: 'right', color: 'black' }}><h3>Created By - <span style={{ color: 'green', fontStyle: 'italic' }}>Mahmudul Hasan Shuvo</span></h3></div>
            <div style={{ textAlign: 'center', color: 'grey' }}>
                <h2>Follow me on</h2>
                <div style={{
                    backgroundColor: 'rgb(4, 4, 41)',
                    fontSize: '500%',
                    margin: '0 2rem',
                    fontWeight: '500'
                }}><FiLinkedin />
                    <FiGithub />
                    <FiInstagram />
                </div>
            </div>

        </div>

    )
}
