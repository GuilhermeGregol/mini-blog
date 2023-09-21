
import style from './About.module.css';
import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={style.about}>
            <h2>Sobre o Mini <span>Blog</span>  </h2>
            <p>Este Projeto consiste em um blog feito com reactJS no front-end e Firebase no back-end</p>
            <Link to="/posts/create" className='botao'>Criar Post </Link>
        </div>
    )
}

export default About